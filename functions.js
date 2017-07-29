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
    if (window.location.href !== "http://localhost/VerderberPhotography/index.html")
        window.scroll(0, 325);
    
    $(".gallery_album > img").mouseenter(function(){
        var element = $(this);
        albumInt = setInterval(function(){albumForward(element);}, 3000);
    });
    
    $(".gallery_album > img").mouseleave(function(){
        albumRevert($(this));
    });
    
    $(".gallery_album > img").click(function(){
        galleryViewer($(this).attr("class"));
    });
    
    $("#gallery_overlay").click(function(){
        galleryViewerClose();
    });
    
    $("#viewer_img").click(function(){
        albumForward($(this)); 
    });
    
    $("#right_arrow").click(function(){
        albumForward($("#viewer_img"));
    });
    
    $("#left_arrow").click(function(){
        albumReverse($("#viewer_img"));
    });
    
    $(".arrow").mouseenter(function(){
        $(this).attr("style", "background-color: rgba(255, 255, 255, .2)");
    });
    
    $(".arrow").mouseleave(function(){
        $(this).removeAttr("style");
    });
    
    $(".nav_img").mouseenter(function(){
        $(this).next().fadeIn(300);
    });
    
    $(".nav_img").next().mouseleave(function(){
        $(this).fadeOut(300);
    });
    
    setInterval(titleSwitch, 5000);
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

function albumForward(element){
    var album = albumChooser(element.attr("class"));
    
    $(element).fadeOut(function() { 
        $(this).fadeIn(300); 
        $(this).attr("src", album[albumCtr]);
    });
    
    albumCtr++;
    
    if (albumCtr === album.length)
        albumCtr = 0;
}

function albumReverse(element){
    var album = albumChooser(element.attr("class"));
    
    albumCtr--;
    
    if (albumCtr < 0){
        albumCtr = album.length - 1;
    }
    
    $(element).fadeOut(function(){
        $(this).fadeIn(300);
        $(this).attr("src", album[albumCtr]);
    });
}

function albumRevert(element){
    clearInterval(albumInt);
    var album = albumChooser(element.attr("class"));
    
    if (element.attr("src") !== album[0]){
        element.fadeOut(function() { 
            $(this).fadeIn("slow"); 
            $(this).attr("src", album[0]);
        });
    }
    albumCtr = 0;
}

function emailAlert(){
    alert("Thank you for contacting me! I try to read all of my emails as soon as they come, but please" +
            " allow me 3 - 5 business days to get back to you.");
}

function galleryViewer(element){
    $("#gallery_overlay").fadeIn("slow");
    
    var album = albumChooser(element);
    $("#viewer_img").attr("class", element);
    $("#viewer_img").attr("src", album[0]);
    $("#gallery_viewer").attr("style", "visibility: visible");
    $("#gallery_viewer").fadeIn("slow");
    $("body").attr("opacity", "0");
}

function galleryViewerClose(){
    $("#gallery_viewer").fadeOut("slow");
    $("#gallery_overlay").fadeOut("slow");
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