function changeImage(){
    var image = document.getElementById("myImage");
    if (image.scr.match("bulbon")){
        image.src = "Images/bulb.jpg";
    } else{
        image.src = "Images/bulb.jpg";
    }
}