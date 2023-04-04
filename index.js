const express = require('express');
const bodyParser = require('body-parser');
require('./db/conn')
const textModel =require("./models/schemaapi")

const app = express();
const port =process.env.PORT ||7000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To store the response in MongoDB, you will need to connect to your database and save the response. You can use the following code to connect to your MongoDB database
// create five varibales
const html = `
  <h1>{{title}}</h1>
  <p>{{description}}</p>
  <div>{{content}}</div>
  <h2>{{author}}</h2>
  <span>{{date}}</span>
`;

const replaceValues = (data) => {
  let modifiedHtml = html;
  for (const key in data) {
    modifiedHtml = modifiedHtml.replace(`{{${key}}}`, data[key]);
  }
  return modifiedHtml;
};



app.post('/replace_html', async (req, res) => {
   try{
    const data = req.body;
    const textModelcreate =new textModel(data)
    console.log(data)
   const insertStrin=  await  textModelcreate.save()
    const modifiedHtml = replaceValues(insertStrin);
    res.send(modifiedHtml);
   }catch(e){
    console.log(e)
   }
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
