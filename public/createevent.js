  var events = localStorage.getItem("allEvent");
  if (events === null){
  events = [];
  }
  else{
  events = JSON.parse(events);
  }
  var user = localStorage.getItem("user");
  user = JSON.parse(user);
  var newArr = [];
  for(var i=0; i < events.length; i++){
  if(user.email===events[i].email){
  newArr.push(events[i]);
  // console.log(newArr);
  }
  }
  localStorage.setItem("myevent" , JSON.stringify(newArr));

  function create(){
  var events = localStorage.getItem("allEvent")
  console.log(events);
  if (events === null){
  events = [];
  }
  else{
  events = JSON.parse(events);
  }
  var user = localStorage.getItem("user");
  user = JSON.parse(user);
  var li = document.createElement("li");
  // new object for getting input value and store in local storage
  var obj = {
  email   :user.email,
  input1 : document.getElementById("inpt1").value,
  input2 : document.getElementById("inpt2").value,
  input3 : document.getElementById("inpt3").value,
  input4 : document.getElementById("inpt4").value,
  input5 : document.getElementById("inpt5").value,
  input6 : document.getElementById("inpt6").value,
  input7 : document.getElementById("inpt7").value.slice(12),
  likeEmail : [user.email],
  dislikeEmail:[user.email],
  intrest0 : 0,
  notIntrest0 : 0,
  } 

// var chang = obj.input7.splice();
console.log(obj);


  events.push(obj); //push object in local storagee ("allEvent")
  console.log(events);
  var newArr = [];
  for(var i=0; i < events.length; i++){
  if(user.email===events[i].email){
  newArr.push(events[i]);
  console.log(newArr);
  }
  }
  // set in localStorage
  localStorage.setItem("myevent" , JSON.stringify(newArr));
  localStorage.setItem("allEvent" , JSON.stringify(events));
  // localStorage.setItem("riplica" , JSON.stringify(events));
  // created new element for event card and make child of li variabel
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
  img.setAttribute("src" , "img")
  li.appendChild(img);
  console.log(img);
  

  var dltBtn = document.createElement("input");
  dltBtn.setAttribute("type","button");
  dltBtn.setAttribute("id",obj.input1);
  dltBtn.setAttribute("value","Delete")
  dltBtn.setAttribute("class","edit1")
  li.appendChild(dltBtn);
  // events text node and store user for event card from object
  var t1 = document.createTextNode(obj.input1);
  heading.appendChild(t1);
  var t2 = document.createTextNode("Organized By:" + obj.input2 );
  organizer.appendChild(t2);
  var t3 = document.createTextNode("Date:" + obj.input3 );
  date.appendChild(t3);
  var t4 = document.createTextNode("Phone No:  " + obj.input4 );
  phone.appendChild(t4);
  var t5 = document.createTextNode("Timing:  " + obj.input5 );
  time.appendChild(t5);
  var t6 = document.createTextNode("Adress:  " + obj.input6);
  place.appendChild(t6);
  var t7 = document.createTextNode(obj.input7);
  img.appendChild(t7);
  console.log(li);
  // when any input field empty then alert
  if (obj.input1 === '') {
  alert("You must Enter your Event Title!");
  } 
  else if(obj.input2 === '') {
  alert("Please Enter your Hosted by name!");
  } 
  else if(obj.input3 === '') {
  alert("You must Enter Date!");
  } 
  else if(obj.input4 === '') {
  alert("You must Enter your phone number!");
  } 
  else if(obj.input5 === '') {
  alert("You must Enter your Timing!");
  } 
  else if(obj.input6 === '') {
  alert("Enter your complete adress");
  } 
  else if(obj.input7 === '') {
  alert("Enter your complete adress");
    } 
  else {
  document.getElementById("myUL").appendChild(li);
  }
  // delete function
  dltBtn.addEventListener("click", function () {
  var li = this.parentNode;
  console.log(li)
  var allEvents = localStorage.getItem('allEvent');
  allEvents = JSON.parse(allEvents);
  console.log(li.id);
  for (var i = 0; i < allEvents.length; i++){
  if (this.id === allEvents[i].input1){
  console.log(allEvents[i])
  console.log(i)
  allEvents.splice(i, 1)
  var emptyData;
  emptyData = allEvents;  
  localStorage.setItem("allEvent", JSON.stringify(emptyData))
  break;
  }
  }
  li.remove();
  })    
  }


// end create function

  var events = localStorage.getItem("myevent");  
  if (events === null){
  events = [];
  }
  else{
  events = JSON.parse(events);
  console.log(events)
  }
  // created new element for event card and make child of li variabel
  for (var i = 0; i < events.length; i++){
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
  var t1 = document.createTextNode(events[i].input1);
  heading.appendChild(t1);
  var img = document.createElement("img");
  img.setAttribute("src" , events[i].input7);
  img.setAttribute("id" , "img");
  li.appendChild(img);




  var dltBtn = document.createElement("input");
  dltBtn.setAttribute("type","button");
  dltBtn.setAttribute("id",events[i].input1);
  dltBtn.setAttribute("value","Delet")
  dltBtn.setAttribute("class","edit1")
  li.appendChild(dltBtn);
  // events text node and store user for event card from object
  var t2 = document.createTextNode("Organized By:" + events[i].input2 );
  organizer.appendChild(t2);
  var t3 = document.createTextNode("Date:" + events[i].input3 );
  date.appendChild(t3);
  var t4 = document.createTextNode("Phone No:  " + events[i].input4 );
  phone.appendChild(t4);
  var t5 = document.createTextNode("Timing:  " + events[i].input5 );
  time.appendChild(t5);
  var t6 = document.createTextNode("Adress:  " + events[i].input6);
  place.appendChild(t6);
  var t7 = document.createTextNode(events[i].input7);
  img.appendChild(t7);
  
  // delete function after refresh
  dltBtn.addEventListener("click", function () {
  var li = this.parentNode;
  console.log(li)
  var allEvents = localStorage.getItem('allEvent');
  console.log(allEvents);
  allEvents = JSON.parse(allEvents);
  console.log(li.id);
  // loop for delete li
  for (var i = 0; i < allEvents.length; i++){
  if (this.id === allEvents[i].input1){
  allEvents.splice(i, 1)
  var emptyData;
  emptyData = allEvents;  
  localStorage.setItem("allEvent", JSON.stringify(emptyData))
  break;
  }
  }
  li.remove();
  })
  }
  
  
