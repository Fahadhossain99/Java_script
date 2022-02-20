for(var i=0; i<3; i++){

    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    console.log(text);
    audioPlay(text);
    
    
    
    
    });
    }

    function audioPlay(text){
        switch(text){
            case "A":
                var audio = new Audio('/Sounds/a.mp3');
                audio.play();
                break;
            
            case "B":
                var audio = new Audio('/Sounds/b.mp3');
                audio.play();
                break;
            
            case "C":
                var audio = new Audio('/Sounds/c.mp3');
                audio.play();
                break;
            
                
            }
    }

    function playAnimation(text){
       var selectedButton = document.querySelectorAll("."+text);
        selectedButton.classList.add("anim");
    
    }