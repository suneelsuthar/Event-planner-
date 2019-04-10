var username = localStorage.getItem("user");
username =JSON.parse(username).email;
username=username.slice(0,-10)
console.log(username);
document.getElementById("user").innerHTML=username;

        