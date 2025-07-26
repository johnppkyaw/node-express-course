const EventEmitter = require("events"); 

const staff1 = new EventEmitter();
const staff2 = new EventEmitter();  

setTimeout(() => {  
  staff1.emit("timer", "hi there");  
}, 2000);

setTimeout(() => {  
  staff1.emit("timer2", "You are here for your pick-up order?");  
}, 4000);  

setTimeout(() => {  
  staff1.emit("timer3", "it will be ready in a few minutes.");  
}, 6000);  

setTimeout(() => {
  staff2.emit("ready", "Your order is ready!  Here you go!")
}, 9000)

setTimeout(() => {
  staff2.emit("closing", "Thank you!  See you next time!")
}, 11000)


staff1.on("timer", (msg) => console.log(msg));
staff1.on("timer2", (msg) => console.log(msg));
staff1.on("timer3", (msg) => console.log(msg));  
staff2.on("ready", (msg) => console.log(msg));   
staff2.on("closing", (msg) => console.log(msg));   
