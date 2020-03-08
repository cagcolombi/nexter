//OPEN AND CLOSE NAV
function openNavBig(){
    document.getElementById("nav").style.height = "100%";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.opacity = 1;
};

function closeNavBig(){
    document.getElementById("nav").style.height = "100%";
    document.getElementById("nav").style.width = "0%";
    document.getElementById("nav").style.opacity = 0;
};

function openNavSmall(){
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.height = "100%";
    document.getElementById("nav").style.opacity = 1;
};

function closeNavSmall(){
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.height = "0%";
    document.getElementById("nav").style.opacity = 0;
};

var openNav;
var closeNav;

function chooseMode(){

    if(innerWidth > 1000){
        openNav = openNavBig();
        closeNav = closeNavBig();

    }else if(innerWidth <= 1000){
        openNav = openNavSmall();
        closeNav = closeNavSmall();  
    }
};

function chooseClick(){

    if(innerWidth > 1000){
        document.getElementById("btn-hamb").addEventListener("click", function(evt){
            evt.preventDefault();
            openNav = openNavBig();
        });
        document.getElementById("btn-cross").addEventListener("click", function(evt){
            evt.preventDefault();
            closeNav = closeNavBig();
        });  

    }else if(innerWidth <= 1000){
        document.getElementById("btn-hamb").addEventListener("click", function(evt){
            evt.preventDefault();
            openNav = openNavSmall();
        });
        document.getElementById("btn-cross").addEventListener("click", function(evt){
            evt.preventDefault();
            closeNav = closeNavSmall();
        }); 
    }
};

window.addEventListener('resize', function(){
    chooseMode();
    chooseClick();
});

chooseMode();
chooseClick();