function sayHello(firstname){
  var fname = prompt("Enter name", "");
  document.getElementsByTagName("h1")[0].style.color = "yellow";
  document.getElementsByTagName("p")[2].style.color = "teal";
  document.getElementsByTagName("p")[2].innerHTML =  "Hi "+fname;
}