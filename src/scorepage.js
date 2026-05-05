import "kaplay/global";

export default function () {
    console.log(getSceneName())
    const music = play("elevator2",{
        music: true,
        volume: 0.1,
        loop: true,
        detune: -400
        
    })

    const titlescreenbackground = add([
        sprite("bakingpan"),
        area({isSensor:true}),
        "bakingpan"
    ])

    const cookieLabel = add([
        text("0",{
            size: 6,
            font: "tiny5"
        }),
        pos(48,11),
        color(0,0,0),
    ])
    cookieLabel.text = window.STATE.cookiecount

    const timeLabel = add([
        text("0",{
            size: 6,
            font: "tiny5"
        }),
        pos(40,22),
        color(0,0,0),
    ])
    timeLabel.text = window.STATE.timecount + " s"

    const scoreLabel = add([
        text("0",{
            size: 10,
            font: "tiny5"
        }),
        pos(28,40),
        color(0,0,0),
    ])
    window.STATE.scorecount = window.STATE.timecount * window.STATE.cookiecount
    scoreLabel.text = window.STATE.scorecount

    const bestLabel = add([
        sprite("best"),
        pos(42,70),
        animate()
    ])
    bestLabel.play("bestdefault")

    //local storage ------------------------

    // checks if 
    if((localStorage.getItem("ate")) === null){
        localStorage.setItem("ate",window.STATE.cookiecount)
    } 

    if((localStorage.getItem("spent")) === null){
        localStorage.setItem("spent",window.STATE.timecount)
    };

    if((localStorage.getItem("score")) === null){
        bestLabel.moveTo(42,32)
        localStorage.setItem("score",window.STATE.scorecount)
    } else {
        
        let templocalate = parseInt(localStorage.getItem("ate"))
        let templocalspent = parseInt(localStorage.getItem("spent"))
        let templocalscore = parseInt(localStorage.getItem("score"))
        
        if(window.STATE.scorecount > templocalscore){
            bestLabel.moveTo(42,32)
            localStorage.setItem("ate",window.STATE.cookiecount)
            localStorage.setItem("spent",window.STATE.timecount)
            localStorage.setItem("score",window.STATE.scorecount)
        }
    }

    if((localStorage.getItem("total")) === null){
        localStorage.setItem("total",window.STATE.cookiecount)
    } else {
        let templocaltotal = parseInt(localStorage.getItem("total"))
        templocaltotal += window.STATE.cookiecount
        localStorage.setItem("total",templocaltotal)
    }





    // local stor --------------------



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

        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-8)
        }
    })

    onKeyPress("s",()=>{
        if(cookiepointer.pos.y == 46){

        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+8)
        }
        
    })

    onKeyPress("up",()=>{
        if(cookiepointer.pos.y == 38){

        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-8)
        }
    })

    onKeyPress("down",()=>{
        if(cookiepointer.pos.y == 46){

        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+8)
        }
        
    })

    onKeyPress("space",() => {
        if(cookiepointer.pos.y == 38){
            window.STATE.cookiecount = 0
            window.STATE.timecount = 0
            music.paused = true
            play("crunch")
            go("cookiegame");
        }
        if(cookiepointer.pos.y == 46){
            window.STATE.cookiecount = 0
            window.STATE.timecount = 0
            music.paused = true
            play("crunch")
            go("titlescreen");
        }
    })

    onGamepadButtonPress("dpad-up",()=>{
        if(cookiepointer.pos.y == 38){

        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y-8)
        }
    })

    onGamepadButtonPress("dpad-down",()=>{
        if(cookiepointer.pos.y == 46){

        } else {
            play("bubble",{volume:0.3})
            cookiepointer.moveTo(cookiepointer.pos.x,cookiepointer.pos.y+8)
        }
    })

    onGamepadButtonPress("south",()=>{
        if(cookiepointer.pos.y == 38){
            window.STATE.cookiecount = 0
            window.STATE.timecount = 0
            music.paused = true
            play("crunch")
            go("cookiegame");
        }
        if(cookiepointer.pos.y == 46){
            window.STATE.cookiecount = 0
            window.STATE.timecount = 0
            music.paused = true
            play("crunch")
            go("titlescreen");
        }
    })
    
    onGamepadButtonPress("east",()=>{ setFullscreen(!isFullscreen())});



}