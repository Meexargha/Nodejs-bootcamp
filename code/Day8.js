//Authentication & Authorization 
//login 
//authentiaction is used by passport 
//pasport local startegy () 3 rd party miidelware 
const passport = require ('passport');
const localStrategy = require('passport-local ').Stategy;//based on  username and password based acuthentication 
const Person = require (../model/Person);
Person {

  username:{
    type:string,
      required:true
  },
  pasword:{
    type:string,
      required:true
  }
  
}
passport.use(new lacalStrategy (async( USERNAME, password, done)=>{
  try{
    console.log('rvcd credential', USERNAME, password);
    const user = awiat Person.finndone{(username:USERNAME)} //user here have passoed and username 
    if(!user)
      return done(null, false, {message:'Incorrect username'});

    const isPasswordMatch =user.password ===password ? true: false;
    if(isPasswordMatch){
      return done(null, user);
    }
    else{
      return done(null,false, {message: incoorecvt password});
    }
  }cath(err){
    return done(err);
    
  }
});


app.use(passport.initialze());
/* 
  hoe to use thse function /miidelware
  go to postmana use authentication and tehere we have usernamre and password
  go to params 
  
*/
app.ge('/', localAuthMiddleware, (req, res) {
  
})

const LocalAuthMiddleware =passport.authenticate('local', {session: false})


//hasing of password 
//bycrpt
password -------> hash function -------> hashed password

salt()-----> random string 
hashed password = string + hash function 

----------------------------
  const bycrpt = require ('bycrypt');
//in model 
personSchema.pre('save', async function (next){
  const person = this;
  if(!person.ismodified('person')) return next() // is false we wont skip  here if true we dont need 
  try{
    //hash passowrd gen
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bycrypt.hashedPassword(person.paswword, salt);
    person.password = hashPassword;
    next();
  }cath(err){
    return next(error);
  }
  
})
