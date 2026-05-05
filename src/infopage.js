import "kaplay/global";

export default function () {
    console.log(getSceneName())
    const music = play("elevator1",{
        music: true,
        volume: 0.3,
        loop: true,
    })

    const infopagebackground = add([
        sprite("infopage"),
        area({isSensor:true}),
        "infopagebackground"
    ])

    const cookieLabel = add([
        text("move - wasd/arrow \nselect - space bar",{
            size: 8,
            font: "tiny5"
        }),
        pos(10,8),
        color(255,241,232),
    ])
    

    const cookiepointer = add([
        sprite("cookiepoint"),
        pos(62,48),
        area({isSensor:true}),
        animate(),
        "cookiepointer"
    ])
    cookiepointer.play("movepoint")

    onKeyPress("w",()=>{
        if(cookiepointer.pos.y == 48){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-6)
        }
    })

    onKeyPress("s",()=>{
        if(cookiepointer.pos.y == 48){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+6)
        }
        
    })
    onKeyPress("up",()=>{
        if(cookiepointer.pos.y == 48){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-6)
        }
    })

    onKeyPress("down",()=>{
        if(cookiepointer.pos.y == 48){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+6)
        }
        
    })

    onGamepadButtonPress("dpad-up",()=>{
        if(cookiepointer.pos.y == 48){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-6)
        }
    })

    onGamepadButtonPress("dpad-down",()=>{
        if(cookiepointer.pos.y == 48){
            play("bubble",{volume:0.3})
        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+6)
        }
    })

    onGamepadButtonPress("south",()=>{
        if(cookiepointer.pos.y == 48){
            music.paused = true
            play("crunch")
            go("titlescreen");
        }
    })

    onGamepadButtonPress("east",()=>{ setFullscreen(!isFullscreen())});



    onKeyPress("space",() => {
        if(cookiepointer.pos.y == 48){
            music.paused = true
            play("crunch")
            go("titlescreen");
        }
    })



}