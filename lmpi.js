function inputBox(){
    if(document.getElementById("searchBar").value == 36459){
       herNameHasBeenEntered(); 
    }else{
    document.getElementById("responce").innerHTML="Search no longer works";
    closeFunct();        
}} 

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


function herNameHasBeenEntered(){
   window.open("https://hilux-git.github.io/hiluxsite/blank.html", "_self");
}
