/**
 * Created by user on 19.10.2016.
 */
var divCont;
var closeBtn;
var imgPath = [
    "./IMGsLib/Graffiti_1.jpg",
    "./IMGsLib/Graffiti_2.JPG",
    "./IMGsLib/Graffiti_3.jpg",
    "./IMGsLib/Graffiti_4.jpg",
    "./IMGsLib/Graffiti_5.jpg",
    "./IMGsLib/Graffiti_6.jpg",
    "./IMGsLib/Graffiti_7.jpg",
    "./IMGsLib/Graffiti_8.jpg",
    "./IMGsLib/Graffiti_9.jpg",
    "./IMGsLib/Graffiti_10.jpg"
];

function genImage (imgId, imgClass, imgSrc){
    var img = new Image();
    img.id = imgId;
    img.className = imgClass;
    img.src = imgSrc;
    return img;
}
//ListPoint.prototype = Object.create(Image.prototype);
//ListPoint.prototype.constructor = ListPoint;

window.addEventListener("load",init);

function init(){
    divCont = document.getElementById("img_container");

    for(var i = 0; i < imgPath.length; i++){
        var divPerImg = document.createElement("div");
        divPerImg.className = "img_frame";
        var newDiv = divCont.appendChild(divPerImg);
        var newIng = newDiv.appendChild(genImage("graffiti_"+i, "gallery_img", imgPath[i]));
        newIng.addEventListener("click",maximizeImg);
    }
    closeBtn = document.getElementById("selected_close");
    closeBtn.addEventListener("click",closeMaxImg);
}

function maximizeImg (){
    lockScreen();
    var maximizeImg = document.getElementById("selected_img");
    maximizeImg.src = this.src;
    var maximizeDiv = document.getElementById("selected_container");
    maximizeDiv.style.display = "block";

}

function lockScreen(){
    var lockDiv = document.getElementById("lock_container");
    lockDiv.style.display = "block";

}

function closeMaxImg(){
    var lockDiv = document.getElementById("lock_container");
    lockDiv.style.display = "none";
    var maximizeDiv = document.getElementById("selected_container");
    maximizeDiv.style.display = "none";
}
