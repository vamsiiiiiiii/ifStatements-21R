var a=10;
var b=a;
a="vamsi"

var a={
    id:1,
    profileImg:"pic1.jpg"
}

var b=a;
b.profileImg="pic35.jpg"



if(0){
    console.log("code to exexute") 
    console.log("done")
}else{
    console.log("ok false")
}

if("redColor" && "cotton" && "3days"){
    console.log("code to exexute") 
    console.log("done")
}else{
    console.log("ok false")
}

var age=20;
if(age < 18){
    console.log("eligible for voting")
    // confirm("you are eligible tovote")
}else{
    console.log("not eligible")
}

var ageOfBoy=22;
var gender="male"
if(ageOfBoy >21 && gender){
  console.log("he is eligble for adult marriage")
}

var ageOfGirl=24;
var gender="female"
if(ageOfGirl >18 && gender=="female"){
  console.log("he is eligble for adult marriage")
}else{
    console.log("ertyuasdfghjk")
}

var rain=false;

if(!!!rain){
    console.log("its raining outside")
}else{
    console.log("its not raining ")
}

var email="vamsi@gmail.com";
var password="vamsi@123"

if(!email && password){
    console.log("you are logged in !!!!!!!!!!!!!!!!")
}else{
    console.log("enter proper credentials")
}

var bikeSpeed=120;

if (bikeSpeed>100){
  console.log("ok bye")
}
else if(bikeSpeed >90 && bikeSpeed <=100){
    console.log("overspeed")
}else if(bikeSpeed >60 && bikeSpeed <90){
    console.log("little speed")
}else if(bikeSpeed >=40 && bikeSpeed <60){
    console.log("economy speed")
}else{
    console.log("first start the bike")
}