//hotel managemnt {loging}-user hit the login when user came and the url is hited 

//middleware function 
const logrequest = (req, res, next)=>{
  console.log(`${new.Date().toLocalString()} Request made to ${req.origninal.url}`);
  next();//
}
//use in total then 
app.use(localstring);
app.get('/', function(req, res){
  res.send('esho modh kabo')
})
