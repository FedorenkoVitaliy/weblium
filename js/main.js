
let themeLink = document.getElementById("template");
document.getElementById("themeSwitcher").addEventListener("click", function(){
    if(this.value=='blue'){
        themeLink.setAttribute("href","css/orange.css");
        this.value='orange';
    }
    else{
        themeLink.setAttribute("href","css/blue.css");
        this.value='blue';
    }
});

