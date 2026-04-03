import "kaplay/global";

export default function () {
    console.log(getSceneName())
    const music = play("elevator1",{
        music: true,
        volume: 0.3,
        loop: true,
    })

    const titlescreenbackground = add([
        sprite("titlescreenbackground"),
        area({isSensor:true}),
        animate(),
        "titlescreenbackground"
    ])
    titlescreenbackground.play("playtitle")

    const cookiepointer = add([
        sprite("cookiepoint"),
        pos(60,38),
        area({isSensor:true}),
        animate(),
        "cookiepointer"
    ])
    cookiepointer.play("movepoint")

    onKeyPress("w",()=>{
        if(cookiepointer.pos.y == 38){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-6)
        }
    })

    onKeyPress("s",()=>{
        if(cookiepointer.pos.y == 50){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+6)
        }
        
    })
    onKeyPress("up",()=>{
        if(cookiepointer.pos.y == 38){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-6)
        }
    })

    onKeyPress("down",()=>{
        if(cookiepointer.pos.y == 50){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+6)
        }
        
    })

    onKeyPress("space",() => {
        if(cookiepointer.pos.y == 38){
            music.paused = true
            play("crunch")
            go("cookiegame");
        } else if (cookiepointer.pos.y == 44){
            music.paused = true
            play("crunch")
            go("infopage");
        } else if (cookiepointer.pos.y == 50){
            music.paused = true
            play("crunch")
            go("bestscore");
        }
    })



}