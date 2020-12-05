//creating our own server

const express=require("express");     
//though, we have installed express in our device, but to use it in our project we r writting this line.

const bodyParser=require("body-parser");
//Since, we will need to do parsing, hence its needed to import it using require fxn. 

const app=express();      
//we have used the express fxn, so that we can use several methods in our project.Here (app is like an object for class express) 

app.use(bodyParser.urlencoded({extended:true}));   //urlencoded method of body-parser retrieves values as texts,so we will need to hange it again to number.
//for fetching all the data of body using (use method)

app.get("/",function(req,res){
res.send("welcome to my channel");
});
//these methods shows the folowing cmnd when user visits the server home page(bcoz we have given address of homepage).

app.get("/about",function(req,res){
    res.send("hyyy i am a web developer");
});
//these methods shows the folowing cmnd when user visits the server about page(bcoz we have given address of about page).
//for seeing the above text u will have to write (localhost:3000/about) in url bar

app.get("/calculator",function(req,res){
    res.sendFile(__dirname+"/index.html");   //this is how we give absolute address(__dirname takes u to root folder, which is node_modules here)
});
//if u want to display, whole file to the user then use (sendFile method)

app.post("/calculator",function(req,res){
    // res.send("calculation occoured"); 
    console.log(req.body)    //req.body property contains key-value pairs of data submitted in the request body.
    let n1=Number(req.body.v1);     //req method helps to access the value of value stored in v1, Number changes text to number format
    let n2=Number(req.body.v2);     //req method helps to access the value of value stored in v2
    let sum=n1+n2;
    res.send("the sum of two no is"+sum);
});

app.listen(3000,function(req,res){
    console.log("server listening whyyyyyy");   //this lines checks whether server is running or node, we chech this in cmnd prompt.
});
//listen is a method for creating server at port 3000.


// -------------------- what is nodemon?-----------------------------------
// ----------- we noticed above, that as we r making changes in code, we will have to change same in cmnd propt too, to make it visible on our server home page but this pblm is solved by nodemon