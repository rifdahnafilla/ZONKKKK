//(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1641452291878
//APP_KEY=SWlPtflXiOe7BaslUh3Wq9X4_mIkY-hIesgF1AQuTNmx8OMRVnQ0v7w6THE2MFtPJMUvsHZYiPpVvoCVm2OuKg
//UNIX=1641824118932
//APP_KEY=wPrFiF9IvzKKBB74CJVHa_sYb-VVPw4LkmbNTBK3wP2ou0BfXEUNVDO8Za7Z7hiWumq1rKkqFEpPdZmAu-A2oQ

//import express
const express = require("express");
//object
const app = express();

//definisikan port
app.listen(3000,function(){
    console.log("Server berjalan di: http://localhost:3000");
});

//definisikan routing
app.get("/",function(req,res){
    res.send("Hello");
});

// pake router
const router = require("./routes/api");
//use = untuk menggunakan middleware
app.use(express.json());
app.use(router);