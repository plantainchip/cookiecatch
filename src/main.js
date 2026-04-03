import kaplay from "kaplay";
import titlescreen from "./title"
import cookiegame from "./cookiegame"
import scorescreen from "./scorepage"
import infopage from "./infopage"
import bestscore from "./bestscore";


// import "kaplay/global"; // uncomment if you want to use without the  prefix

kaplay({
    scale: 8,
    width: 96,
    height: 64
});
debug.inspect = false

// loadRoot("./"); // A good idea for Itch.io publishing later

loadSprite("titlescreenbackground", "./sprites/assets/titlescreenspritesheet.png",{
    sliceX:12,sliceY:1,
    anims:{
        playtitle:{
            from:0,
            to:11,
            loop:true,
        }
    }
});
loadSprite("cookiepoint","./sprites/assets/cookiepointerspritesheet.png",{
    sliceX:4,sliceY:1,
    anims:{
        movepoint:{
            from:0,
            to:3,
            loop:true,
        }
    }
});
loadSprite("bowl","./sprites/assets/bowlspritesheet.png",{
    sliceX: 5, sliceY: 1,
    anims:{
        bowldefault:{
            from: 0,
            to: 0
        },
        bowlright:{
            from: 1,
            to: 2,
            loop: true
        },
        bowlleft:{
            from: 3,
            to: 4,
            loop: true 
        }
    }
})

loadSprite("best","./sprites/assets/bestspritesheet.png",{
    sliceX: 7, sliceY: 1,
    anims:{
        bestdefault:{
            from: 0,
            to: 6,
            loop:true
        },

    }
})
loadSprite("kitchenbackground", "./sprites/assets/kitchenbackground.png")
loadSprite("bakingpan", "./sprites/assets/bakingpan.png")
loadSprite("infopage", "./sprites/assets/infopage.png")
loadSprite("bakingpanbestscores", "./sprites/assets/bakingpanbestscores.png")
loadSprite("bigcookie1", "./sprites/assets/bigcookie1.png")
loadSprite("bigcookie2", "./sprites/assets/bigcookie2.png")
loadSprite("bigcookie3", "./sprites/assets/bigcookie3.png")
loadSprite("smallcookie1", "./sprites/assets/smallcookie1.png")
loadSprite("smallcookie2", "./sprites/assets/smallcookie2.png")
loadSprite("smallcookie3", "./sprites/assets/smallcookie3.png")
loadSprite("dubiouscookie1", "./sprites/assets/dubiouscookie1.png")
loadSprite("dubiouscookie2", "./sprites/assets/dubiouscookie2.png")
loadSprite("milk", "./sprites/assets/milk.png")
loadSprite("plus2","./sprites/assets/plus2.png")
loadSprite("plus30","./sprites/assets/plus30.png")
loadSprite("minus5","./sprites/assets/minus5.png")
loadSprite("minus10","./sprites/assets/minus10.png")
loadSprite("slowed","./sprites/assets/slowed.png")
loadSprite("stuck","./sprites/assets/stuck.png")
loadFont("tiny5", "./sprites/assets/Tiny5-Regular.ttf");
loadSound("crunch","./sprites/assets/makigai_maimai-crunchy-bite-450650-[AudioTrimmer.com].mp3")
loadSound("bonus","./sprites/assets/universfield-game-bonus-03-487857.mp3")
loadSound("negativechime","./sprites/assets/universfield-system-notification-04-206493 (mp3cut.net).mp3")
loadSound("levelcomplete","./sprites/assets/universfield-level-up-02-199574.mp3")
loadSound("bubble","./sprites/assets/universfield-bubble-pop-293342.mp3")
loadSound("swoosh","./sprites/assets/universfield-swoosh-06-351021.mp3")
loadSound("drag","./sprites/assets/freesound_community-whoosh-clothing-drag-42291.mp3")
loadSound("elevator1","./sprites/assets/hitslab-elevator-elevator-jazz-lounge-music-412339.mp3")
loadSound("elevator2","./sprites/assets/hitslab-lounge-jazz-elevator-music-324902.mp3")


scene("titlescreen",titlescreen)
scene("cookiegame",cookiegame)
scene("scorescreen", scorescreen)
scene("infopage",infopage)
scene("bestscore",bestscore)

window.STATE = {
    cookiecount: 0,
    timecount: 0,
    scorecount: 0
}

onLoad(()=>{go("titlescreen")})

