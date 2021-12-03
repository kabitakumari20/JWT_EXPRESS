const express = require("express")
const app=express()
const fs = require("fs")
app.use(express.json())
const jwt=require("jsonwebtoken")
const secretkey = "manvi"

app.get('/api',(req,res)=>{
    res.json({message:"i am manvi here............"})
});

app.post('/post',(req,res)=>{
//     const path = "data.json"
//     fs.exists(path,function(exists){
//         if (exists){
//             console.log("file exists")
//             var k=fs.readFile('data.json', "utf8", function(err,k) {
//                 if (err) throw err
//                 console.log(k)
//             })
//         }
//     })
// })
    var data={
        id:req.body.id,
        name:req.body.name,
        gmail:req.body.gmail
      
    }
    var data1=JSON.stringify(data)
    fs.writeFile("data.json",data1,function(err,data){
        if (err){
            console.log(err)
        }
        else{
            console.log("ur data save on json file")
        }
    })
    console.log(data)
    jwt.sign(data, secretkey,(err,token)=>{
        if (err){
            res.send(err)
        }
        else{
            res.send(token)
        }
        
    });
});
app.listen(4000,(err)=>{
    console.log("server is runing port number 4000")
})