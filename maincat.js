
window.onscroll = function () {
 var body = document.body,           
     object1 = document.getElementById('foreffsquare1').style,   
     object2 = document.getElementById('foreffsquare2').style,
     object3 = document.getElementById('foreffsquare3').style,   
     object4 = document.getElementById('foreffsquare4').style,
     object1c = document.getElementById('foreffcircle1').style,   
     object2c = document.getElementById('foreffcircle2').style,
     object3c = document.getElementById('foreffcircle3').style,   
     object4c = document.getElementById('foreffcircle4').style,
     gradone = document.getElementById('gradone').style,
     gradtwo = document.getElementById('gradtwo').style,
     exampleone = document.getElementById('exampleone'),
     inpclose = document.getElementById('inpclose'),
     inpviewone = document.getElementById('inpviewone'),
     logoname = document.getElementById('logoname').style,
     inp = "1", 
     backgradforeffsquare1one = document.getElementById('backgradforeffsquare1one').style, 
     gradforeff14one = document.getElementById('gradforeff14one').style,
     gradforeff23one = document.getElementById('gradforeff23one').style,
     pPforgradof12one = document.getElementById('pPforgradof12one').style,
     pPforgradof34one = document.getElementById('pPforgradof34one').style,
     pforgradofsquare14one = document.getElementById('pforgradofsquare14one').style,
     pforgradofsquare23one = document.getElementById('pforgradofsquare23one').style,
     backgradforeffsquare1two = document.getElementById('backgradforeffsquare1two').style, 
     gradforeff14two = document.getElementById('gradforeff14two').style,
     gradforeff23two = document.getElementById('gradforeff23two').style,
     pPforgradof12two = document.getElementById('pPforgradof12two').style,
     pPforgradof34two = document.getElementById('pPforgradof34two').style,
     pforgradofsquare14two = document.getElementById('pforgradofsquare14two').style,
     pforgradofsquare23two = document.getElementById('pforgradofsquare23two').style;
 if (body.scrollTop>1142||body.scrollTop<757){ //760
        } 
    else { 
           
           }
//1
 if (body.scrollTop>607||body.scrollTop<221.5){ //600.221.5  d
        pPforgradof34one.opacity="1";
        } 
    else { 
           pPforgradof34one.opacity="0";
           
           }
 if (body.scrollTop>600){ 
        logoname.color="#141414";
        logoname.zIndex="120";
        } 
    else {
           logoname.color="white";
           logoname.zIndex="120";
           }
 if (body.scrollTop>752){  //    up
        gradone.opacity="1";
        pPforgradof12one.opacity="0";
        gradforeff14one.opacity="1";
        gradforeff23one.opacity="1";
        } 
    else {
           gradone.opacity="0";
           pPforgradof12one.opacity="1";
           gradforeff14one.opacity="0";
           gradforeff23one.opacity="0";
           }     
 if (body.scrollTop>1162){
     pforgradofsquare14one.opacity="0";
     pforgradofsquare23one.opacity="0";
 }
    else {
           pforgradofsquare14one.opacity="1";
           pforgradofsquare23one.opacity="1";
    }
 if (body.scrollTop<212){
     pforgradofsquare14one.opacity="0";
     pforgradofsquare23one.opacity="0";
 }
    else {
           pforgradofsquare14one.opacity="1";
           pforgradofsquare23one.opacity="1";
    }

 if ((body.scrollTop<600)&&(inpviewone.checked="true")&&(inp="1")){
     inpclose.checked="true",
     inp="2";
     }
 
    
//2
 if (body.scrollTop>1157||body.scrollTop<771.5){ //600.221.5  d
        pPforgradof34two.opacity="1";
        } 
    else { 
           pPforgradof34two.opacity="0";
           
           }
 if (body.scrollTop>1302){  //    up
        gradtwo.opacity="1";
        pPforgradof12two.opacity="0";
        gradforeff14two.opacity="1";
        gradforeff23two.opacity="1";
        } 
    else {
           gradtwo.opacity="0";
           pPforgradof12two.opacity="1";
           gradforeff14two.opacity="0";
           gradforeff23two.opacity="0";
           }     
 if (body.scrollTop>1612){
     pforgradofsquare14two.opacity="0";
     pforgradofsquare23two.opacity="0";
 }
    else {
           pforgradofsquare14two.opacity="1";
           pforgradofsquare23two.opacity="1";
    }
 if (body.scrollTop<762){
     pforgradofsquare14two.opacity="0";
     pforgradofsquare23two.opacity="0";
 }
    else {
           pforgradofsquare14two.opacity="1";
           pforgradofsquare23two.opacity="1";
    }
 document.ondragstart = xenforo;
 document.onselectstart = xenforo;
 document.oncontextmenu = xenforo;
 
 function xenforo() {
     return false
     }
    
}




