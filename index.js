for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",onclickbutton);
    function onclickbutton(){
        var cl=this.innerHTML;
     opa(cl);
     ani(cl);
    
    
}
}
addEventListener("keydown",function(){

      var cl=event.key;
      opa(cl);
      ani(cl);
     
});

function opa(cl){
    switch (cl){
        case "w":
                 var au=new Audio("0.mp3");
        au.play();
        break;
        case "a":
                 var au=new Audio("1.mp3");
        au.play();
        break;
        case "s":
                 var au=new Audio("2.mp3");
        au.play();
        break;
        case "d":
                 var au=new Audio("3.mp3");
        au.play();
        break;
        case "j":
                 var au=new Audio("4.mp3");
        au.play();
        break;
        case "k":
                 var au=new Audio("5.mp3");
        au.play();
        break;
        case "l":
                 var au=new Audio("6.mp3");
        au.play();
        break;
        default:
            alert("Oppps!");
    }
    }
    function ani(cl){
      
         document.querySelector("."+cl).classList.add("pressed");
         setTimeout(() => {
            document.querySelector("."+cl).classList.remove("pressed"); 
         }, 100);
    }


