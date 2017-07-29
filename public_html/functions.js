/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var albumInt;
var titleCtr = 0;
var albumCtr = 0;

var titleImgs = ["Resources/Misc/MichyPic_Cropped.jpg", "Resources/Misc/MichyPic2_Cropped.jpg", "Resources/Misc/MichyPic3_Cropped.jpg"];
var michy = ["Resources/Michy's_Album/MichyPic.jpg", "Resources/Michy's_Album/MichyPic2.jpg", "Resources/Michy's_Album/MichyPic3.jpg"];
var tasty = ["Resources/Tasty_Album/Chicken_Nuggets.jpg", "Resources/Tasty_Album/Pancakes.jpg", "Resources/Tasty_Album/Pizza.jpg", "Resources/Tasty_Album/Tater_Tots.jpg"];
var fast = ["Resources/Fast_Album/Corvette.jpg", "Resources/Fast_Album/Aston_Martin.jpg", "Resources/Fast_Album/Bugatti.jpg", "Resources/Fast_Album/Ferrari.jpg", "Resources/Fast_Album/Tesla.jpg"];
var kitty = ["Resources/Kitty_Album/Tiger.jpg", "Resources/Kitty_Album/Lion.jpg", "Resources/Kitty_Album/Panther.jpg", "Resources/Kitty_Album/Snow_Leopard.jpg"];

window.onload = function(){
    if (window.location.href !== "http://localhost:8383/VerderberPhotography/index.html")
        window.scroll(0, 325);
    
    $(".gallery_album > img").mouseenter(function(event){
        albumInt = setInterval(function(){albumSwitch(event.target.id);}, 3000); 
    });
    
    $(".gallery_album > img").mouseleave(function(event){
        albumRevert(event.target.id);
    });
    
    $(".gallery_album > img").click(function(event){
        galleryViewer(event.target.id);
    });
    
    $("#viewer_img").click(function(){
        galleryViewerClose();
    });
    
    setInterval(titleSwitch, 5000);
    $(".nav_img").mouseenter(function(){
        $(this).next().fadeIn(400);
    });
    
    $(".nav_img").next().mouseleave(function(){
        $(this).fadeOut(400);
    });
};

function albumChooser(name){
    switch (name.toUpperCase()){
        case "MICHY":
            name = michy;
            break;
        case "TASTY":
            name = tasty;
            break;
        case "FAST":
            name = fast;
            break;
        case "KITTY":
            name = kitty;
            break;
        case "TITLE_IMG":
            name = titleImgs;
            break;
        default:
            name = null;
            break;
    }
    
    return name;
}

function albumRevert(element){
    clearInterval(albumInt);
    var album = albumChooser(element);
    
    if ($("#" + element).attr("src") !== album[0]){
        $("#" + element).fadeOut(function() { 
            $(this).fadeIn("slow"); 
            $(this).attr("src", album[0]);
        });
    }
    albumCtr = 0;
}

function albumSwitch(element){
    var album = albumChooser(element);
    
    $("#" + element).fadeOut(function() { 
        $(this).fadeIn("slow"); 
        $(this).attr("src", album[albumCtr]);
    });
    
    albumCtr++;
    
    if (albumCtr === album.length)
        albumCtr = 0;
}

function galleryViewer(element){
    $("#gallery_overlay").fadeIn("slow");
    
    var album = albumChooser(element);
    $("#viewer_img").attr("src", album[0]);
    $("#gallery_viewer").attr("style", "visibility: visible");
    $("#gallery_viewer").fadeIn("slow");
    $("body").attr("opacity", "0");
}

function galleryViewerClose(){
    $("#gallery_viewer").fadeOut("slow");
    $("#gallery_overlay").fadeOut("slow");
    $("viewer_img").attr("src", "");
}

function titleSwitch(){
    $("#title_img").fadeOut(function() { 
        $(this).fadeIn("slow"); 
        $(this).attr("src", titleImgs[titleCtr]);
    });
    
    titleCtr++;
    
    if (titleCtr === titleImgs.length)
        titleCtr = 0;
    
    $("#title_img_block").attr("style", "background-image: URL(\"" + titleImgs[titleCtr] + "\"");
}