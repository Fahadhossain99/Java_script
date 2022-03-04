document.querySelector("button").addEventListener("click",function(){
    alert("Danger");
});

var myVar=document.querySelector("h1");
myVar.addEventListener("mouseover",function(){
    
    alert("I love u too Fahad");
});

myVar.addEventListener("mouseover",function(){
    
    myVar.classList.add("my-style");
});


var myVar=document.querySelector("h1");
myVar.addEventListener("mouseout",function(){
    
    myVar.classList.remove("my-style");
});



