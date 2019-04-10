var riplicaOfEvents = localStorage.getItem("allEvent");
console.log(riplicaOfEvents)
if (riplicaOfEvents === null){
riplicaOfEvents = [];
}
else{
riplicaOfEvents = JSON.parse(riplicaOfEvents);
console.log(riplicaOfEvents);
}
for (var i = 0; i < riplicaOfEvents.length; i++){
var li = document.createElement("li");
document.getElementById("myUL").appendChild(li);
var b = li.parentNode;
console.log(b);
var heading = document.createElement("h2");
li.appendChild(heading);
var date = document.createElement("p");
li.appendChild(date);
var time = document.createElement("p");
li.appendChild(time);
var place = document.createElement("p");
li.appendChild(place);
var organizer = document.createElement("p");
li.appendChild(organizer);
var phone = document.createElement("p");
li.appendChild(phone);
var img = document.createElement("img");
img.setAttribute("src" , riplicaOfEvents[i].input7);
img.setAttribute("id" , "img");
li.appendChild(img);
var IntrBtn = document.createElement("input");
IntrBtn.setAttribute("type" , "button");
IntrBtn.setAttribute("value" , "intrest");
IntrBtn.setAttribute("class" , "choice");
IntrBtn.setAttribute("id" , riplicaOfEvents[i].input1)
li.appendChild(IntrBtn);
var notIntrBtn = document.createElement("input");
notIntrBtn.setAttribute("type" , "button");
notIntrBtn.setAttribute("value" , "not intrest");
notIntrBtn.setAttribute("class" , "choice")
notIntrBtn.setAttribute("id" , riplicaOfEvents[i].input1)
li.appendChild(notIntrBtn);
var t1 = document.createTextNode(riplicaOfEvents[i].input1);
heading.appendChild(t1);
var t2 = document.createTextNode("Organized By:" + riplicaOfEvents[i].input2 );
organizer.appendChild(t2);
var t3 = document.createTextNode("Date:" + riplicaOfEvents[i].input3 );
date.appendChild(t3);
var t4 = document.createTextNode("Phone No:  " + riplicaOfEvents[i].input4 );
phone.appendChild(t4);
var t5 = document.createTextNode("Timing:  " + riplicaOfEvents[i].input5 );
time.appendChild(t5);
var t6 = document.createTextNode("Adress:  " + riplicaOfEvents[i].input6);
place.appendChild(t6);

IntrBtn.addEventListener("click", function () {
var user = localStorage.getItem("user");
var useremail = JSON.parse(user).email;
var intrest = localStorage.getItem("allEvent");
intrest = JSON.parse(intrest);
console.log(intrest);
for(var i=0; i< intrest.length; i++){
if(this.id=== intrest[i].input1){
var flg = true;
var identity1 = document.getElementById(riplicaOfEvents[i].input1).value="intrested";
for(var j=0; j<intrest[i].dislikeEmail.length; j++){
if(intrest[i].dislikeEmail[j]===useremail){
flg=false;
// alert("eamil is already present");
break;
}
}
if(flg === true){
flg2 = true;
for(var k=0; k<intrest[i].dislikeEmail.length; k++){
if(intrest[i].dislikeEmail===useremail){
intrest[i].likeEmail.push(useremail);
flg2=false;
intrest[i].likeEmail.splice(k,1)
intrest[i].notIntrest0--
intrest[i].intrest0++
localStorage.setItem("allEvent" , JSON.stringify(intrest));
}
}
if(flg2===true){
intrest[i].intrest0++;
intrest[i].likeEmail.push(useremail);
localStorage.setItem("allEvent" , JSON.stringify(intrest));
}
}
}
}
})

notIntrBtn.addEventListener("click", function () {
var user = localStorage.getItem("user");
var useremail = JSON.parse(user).email;
console.log(useremail);
var intrest = localStorage.getItem("allEvent");
intrest = JSON.parse(intrest);
console.log(intrest);
for(var i=0; i< intrest.length; i++){
if(this.id===intrest[i].input1){
var flg = true;
for(var j=0; j<intrest[i].dislikeEmail.length; j++){
if(intrest[i].dislikeEmail[j]===useremail){
flg=false;
alert("eamil is already present");
break;
}
}
if(flg === true){
flg2 = true;
for(var k=0; k<intrest[i].likeEmail.length; k++){
if(intrest[i].likeEmail===useremail){
intrest[i].dislikeEmail.push(useremail);
flg2=false;
intrest[i].likeEmail.splice(k,1)
intrest[i].notIntrest0++
intrest[i].intrest0--
localStorage.setItem("allEvent" , JSON.stringify(intrest));
}
}
if(flg2===true){
intrest[i].notIntrest0++;
intrest[i].dislikeEmail.push(useremail);
localStorage.setItem("allEvent" , JSON.stringify(intrest));
}
}
}
}
})
    






















































    
// notIntrBtn.addEventListener("click", function () {
// var intrest = localStorage.getItem("riplica");
// intrest = JSON.parse(intrest);
// console.log(intrest)
// for (var j = 0; j < intrest.length; j++){
// if (this.id === intrest[j].input1)
// intrest[j].intrest0 = intrest[j].intrest0 + 1
// console.log(intrest);
// localStorage.setItem("riplica", JSON.stringify(intrest));
// }
// })

// notIntrBtn.addEventListener("click", function () {
// var intrest2 = localStorage.getItem("riplica");
// intrest2 = JSON.parse(intrest2);
// console.log(intrest2)
// for (var j = 0; j < intrest2.length; j++){
// if (this.id === intrest2[j].input1)
// intrest2[j].notIntrest0 = intrest2[j].notIntrest0 + 1
// console.log(intrest2);
// localStorage.setItem("riplica", JSON.stringify(intrest2));
// }
// })
// notIntrBtn.addEventListener("click", function () {
// var intrest = localStorage.getItem("creatnew");
// intrest = JSON.parse(intrest);
// console.log(intrest)
// for (var j = 0; j < intrest.length; j++){
// if (this.id === intrest[j].input1)
// intrest[j].intrest0 = intrest[j].intrest0 + 1
// console.log(intrest);
// localStorage.setItem("creatnew", JSON.stringify(intrest));
// }
// })
// roll.addEventListener("click", function () {
// var notInt1 = localStorage.getItem("user");
// notInt1 = JSON.parse(notInt1)
// var intrest2 = localStorage.getItem("creatnew");
// intrest2 = JSON.parse(intrest2);
// console.log(intrest2)
// for (var j = 0; j < intrest2.length; j++){
// if (this.id === intrest2[j].input1)
// intrest2[j].notIntrest0 = intrest2[j].notIntrest0 + 1;
// // intrest2[j].dislikeEmail= notInt1.email;
// // console.log(intrest2[j].dislikeEmail)
// console.log(intrest2);
// localStorage.setItem("creatnew", JSON.stringify(intrest2));
// }
// })
// }





















































































// notIntrBtn.addEventListener("click", function () {
//     var eventcopy = localStorage.getItem("riplica");
//     eventcopy = JSON.parse(eventcopy);
//     // console.log(eventcopy);
//     for (var j = 0; j < eventcopy.length; j++){
//     if (this.id === eventcopy[j].input1)
//     eventcopy[j].notIntrest0 = eventcopy[j].notIntrest0 + 1
//     // console.log(eventcopy);
//     localStorage.setItem("riplica", JSON.stringify(eventcopy));
//     }
//     })
//     notIntrBtn.addEventListener("click", function () {
//     var riplicaOfEvent = localStorage.getItem("riplica");
//     riplicaOfEvent = JSON.parse(riplicaOfEvent);
//     // console.log(riplicaOfEvent)
//     for (var j = 0; j < riplicaOfEvent.length; j++){
//     if (this.id === riplicaOfEvent[j].input1)
//     riplicaOfEvent[j].intrest0 = riplicaOfEvent[j].intrest0 + 1
//     localStorage.setItem("riplica", JSON.stringify(riplicaOfEvent));
//     }
//     })
    
//     notIntrBtn.addEventListener("click", function () {
//     var notInt1 = localStorage.getItem("user");
//     notInt1 = JSON.parse(notInt1)
//     console.log(notInt1);
//     var eventcopy = localStorage.getItem("riplica");
//     eventcopy = JSON.parse(eventcopy);
//     // console.log(eventcopy)
    
//     for (var j = 0; j < eventcopy.length; j++){
//     if (this.id === eventcopy[j].input1)
//     eventcopy[j].notIntrest0 = eventcopy[j].notIntrest0 + 1;
//     // eventcopy[j].dislikeEmail= notInt1.email;
//     // // console.log(eventcopy);
//     localStorage.setItem("riplica", JSON.stringify(eventcopy));
//     }
//     })
    
}