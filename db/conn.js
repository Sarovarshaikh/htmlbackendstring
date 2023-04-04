const mongoose =require("mongoose")
const uri ='mongodb+srv://sarwarshaikh:11wyRWIrgLeo6Y85@cluster0.szvnkbc.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri, {
     useNewUrlParser: true, 
     useUnifiedTopology: true
     }).then(()=>{
        console.log("Connecton is succssfull with database")
     }).catch((err)=>{
        console.log("error in database ==>",err)
     })
     