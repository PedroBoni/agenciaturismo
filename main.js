const container = document.querySelector('.container');
const img = document.querySelector('.carousel img');
const images = ["sp.jpg","rj.jpg","fortaleza.jpg","natal.jpg"];
let checked = false;
let imgIndex = 0;
function move(){
    if(!checked){
        container.style.marginTop = "40vh";
        container.style.transition = "all .5s";
        checked = true;
    }
    else{
        container.style.marginTop = "0";
        container.style.transition = "all .5s";
        checked = false;
    }
}
function moveRight(){

    if(images.length - 1 == imgIndex){
        imgIndex = 0;
    }
    else{
        imgIndex++;
    }
    img.src = "img/" + images[imgIndex];
}
function moveLeft(){
    if(imgIndex == 0){
        imgIndex = images.length - 1
    }
    else{
        imgIndex--;
    }
    img.src = "img/" + images[imgIndex];
}