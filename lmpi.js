function inputBox(){
    document.getElementById("responce").innerHTML="Search no longer works";
    closeFunct();
} 

function closeFunct(){
    setTimeout(closeFunct2, 5000);
}     
    
function closeFunct2(){
    document.getElementById("responce").innerHTML="";
} 


function forwardClickGrund(){
   window.open("grundarchive.html");
    
}

function forwardClickHilux(){
   window.open("hilux.html");
    
}