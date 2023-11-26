const express = require("express")
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3030;
const dirpath = path.join(__dirname,"timestamp");

app.get("/",(req,res)=>{
    const utc = new Date();
     
    //Current Date
    const date = utc.getDate();
   
    //Current Month
    const month = utc.getMonth()+1;

    //Current Year
    const year = utc.getFullYear();

    //Current Hours
    const hours = utc.getHours();


    //Current Minutes
    const min = utc.getMinutes();


    //Current Seconds
    const sec = utc.getSeconds();

    const datetime = `${date}-${month}-${year}_${hours}hr-${min}min-${sec}sec`;
    const data = `The Current Timestamp is Date: ${year}-${month}-${date} , Indian Standard Time: ${hours}:${min}:${sec}`;
    console.log(data)
       fs.writeFile(`./${datetime}.text`,data,(err)=>{
        if(err){
            console.log(err)
            res.send("Error in writing File")
            return
        }else{
            res.send("File created Successfully")
        }
       })
   
})


app.listen(PORT,()=>console.log(`The server Started in : 3030`))
