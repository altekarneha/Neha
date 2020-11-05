var express=require('express');
var sql=require('mysql');
var cors=require('cors');
var bodyparser=require('body-parser');
var app=express();

constring={
    host: 'localhost',
    user: 'root',
    password:'',
    database:'assignment'
}

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.post('/register',function(req,res){
  var d=req.body;
  console.log(d);
 var con=sql.createConnection(constring);
  con.query('INSERT INTO `users`(`fname`, `lname`, `email`, `username`, `password`) VALUES("'+d.fname+'","'+d.lname+'","'+d.email+'","'+d.username+'","'+d.psw+'")',function(err,result){
      if(err) throw err;
       res.send({"msg":"Registration Successful"}); 
      console.log(result);
})
})


app.post("/login", function(req,res){

var d=req.body;
console.log(d);
var con=sql.createConnection(constring);
con.query("select * from users where username='"+d.uname+"' and password='"+d.psw+"'", function(err,result){
if(err) throw err;
if(result.length>0){
    res.send({'successmsg':'Login Successfully'})
}else{
    res.send({'errmsg':'Login Failed'})
}
 
console.log(result);
})


})


app.get("/getuser",function(req,res){
 
    var con=sql.createConnection(constring);
    con.query("select * from users", function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    })

})


app.post("/deleteRow",function(req,res){
    var d=req.body;
    //console.log(d);
    var con=sql.createConnection(constring);
    con.query("delete from users where uid="+d.uid+"",function(err,result){
        if(err)throw err; 
          res.send({"deletesuccess":"Successfully Deleted"});
         
        console.log(result);
    })
})

app.listen(5000,function(){
    console.log('Connected');
})