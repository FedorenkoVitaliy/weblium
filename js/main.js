//Choose Theme
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

//Toggle menu
const headerMenu=document.getElementsByClassName("header__menu")[0];
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function(){
    if(this.classList.contains("active")){
        this.classList.remove("active");
        headerMenu.classList.remove("active");
    }
    else{
       this.classList.add("active");
       headerMenu.classList.add("active");
    }
});


//Convert to SVG
document.querySelectorAll('img.svg').forEach(function(img){
    var imgID = img.id;
    var imgClass = img.className;
    var imgURL = img.src;

    fetch(imgURL).then(function(response) {
        return response.text();
    }).then(function(text){

        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(text, "text/xml");

        // Get the SVG tag, ignore the rest
        var svg = xmlDoc.getElementsByTagName('svg')[0];

        // Add replaced image ID to the new SVG
        if(typeof imgID !== 'undefined') {
            svg.setAttribute('id', imgID);
        }
        // Add replaced image classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            svg.setAttribute('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        svg.removeAttribute('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
            svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
        }

        // Replace image with new SVG
        img.parentNode.replaceChild(svg, img);
    });
});

