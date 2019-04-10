var myevents = localStorage.getItem("myevent");
if (myevents === null){
myevents = [];
}
else{
myevents = JSON.parse(myevents);
}
for (var i = 0; i < myevents.length; i++){
var li = document.createElement("li");
document.getElementById("myUL").appendChild(li);
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
img.setAttribute("src" ,myevents[i].input7 );
img.setAttribute("id" ,"img" );
li.appendChild(img);
var riplicaOfEvent = localStorage.getItem("myevent");
riplicaOfEvent = JSON.parse(riplicaOfEvent);
var likedislikeDiv=document.createElement("div");
likedislikeDiv.setAttribute("id" , "intrestedDiv");
li.appendChild(likedislikeDiv)
var likeNum = document.createElement("span");
var txt1 = document.createTextNode("👍"+riplicaOfEvent[i].intrest0);
likeNum.appendChild(txt1);
likedislikeDiv.appendChild(likeNum);
var intrestReplica = localStorage.getItem("myevent");
intrestReplica = JSON.parse(intrestReplica);
var dislikeNum = document.createElement("span");
var txt2= document.createTextNode("👎"+intrestReplica[i].notIntrest0);
dislikeNum.appendChild(txt2)
likedislikeDiv.appendChild(dislikeNum);
var t1 = document.createTextNode(myevents[i].input1);
heading.appendChild(t1);
var t2 = document.createTextNode("Organized By:" + myevents[i].input2 );
organizer.appendChild(t2);
var t3 = document.createTextNode("Date:" + myevents[i].input3 );
date.appendChild(t3);
var t4 = document.createTextNode("Phone No:  " + myevents[i].input4 );
phone.appendChild(t4);
var t5 = document.createTextNode("Timing:  " + myevents[i].input5 );
time.appendChild(t5);
var t6 = document.createTextNode("Adress:  " + myevents[i].input6);
place.appendChild(t6);
console.log(li);
var t7 = document.createTextNode(myevents[i].input7);
img.appendChild(t6);
console.log(li)
}









// intrestBtn.addEventListener("click", function () {
  var riplicaOfEvent = localStorage.getItem("myevent");
  riplicaOfEvent = JSON.parse(riplicaOfEvent);
  for (var j = 0; j < riplicaOfEvent.length; j++){
      if (this.id === riplicaOfEvent[j].input1){
          if (riplicaOfEvent[j].intrest0 ===undefined){
              riplicaOfEvent[j].intrest0 = 0
  }
// alert(riplicaOfEvent[j].intrest0 + "  people riplicaOfEvent your event")
  }
}
// })


// notIntrBtn.addEventListener("click", function () {
  var intrestReplica = localStorage.getItem("myevent");
  intrestReplica = JSON.parse(intrestReplica);
  for (var j = 0; j < intrestReplica.length; j++){
      if (this.id === intrestReplica[j].input1){
          if (intrestReplica[j].intrest0 ===undefined){
              intrestReplica[j].intrest0 = 0
          }
  
// alert(intrestReplica[j].notIntrest0 + "   people not interest in your event");
          }

}
  
// })


