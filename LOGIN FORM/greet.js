var greet=document.getElementById("greet");
greet.addEventListener('click',(e)=>{
    e.preventDefault();
    var gret;
    var time=parseInt(document.getElementById("time").value);
    if(time>=0 && time<12){
        gret="Good Morning";
    }else if(time>=12 && time<17){
        gret="Good Afternoon";
    }else if(time>=17 && time<24){
        gret="Good Evening";
    }
    else{
        gret="that is an incorrect input";
    }
alert(gret);
})
