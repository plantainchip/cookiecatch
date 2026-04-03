import "kaplay/global";

export default function () {
    console.log(getSceneName())
    const music = play("elevator1",{
        music: true,
        volume: 0.3,
        loop: true,
    })

    const bestscorepage = add([
        sprite("bakingpanbestscores"),
        area({isSensor:true}),
        "bestscorepage"
    ])

    const cookieLabel = add([
        text("          all time cookie count:",{
            size: 5,
            font: "tiny5"
        }),
        pos(12,10),
        color(171,82,54),
    ])

    const alltimecookieLabel = add([
        text("0 cookies eaten",{
            size: 6,
            font: "tiny5",
            align: "center"
        }),
        pos(width()/2, 21),
        color(0,0,0),
        anchor("center")
        
    ])

    const cookieLabel2 = add([
        text("                    Best Score",{
            size: 5,
            font: "tiny5"
        }),
        pos(12,26),
        color(255,119,168),
    ])

    const cookieLabel3 = add([
        text("cookies ate: \ntime spent: \nyour score: ",{
            size: 4,
            font: "tiny5"
        }),
        pos(14,35),
        color(171,82,54),
    ])

    const yourbestscore = add([
        text("0 \n0 \n0",{
            size: 4,
            font: "tiny5"
        }),
        pos(38,35),
        color(0,0,0),
    ])

    //local storage ------------------------

    if((localStorage.getItem("score")) !== null){
        yourbestscore.text = localStorage.getItem("ate") +"\n"+ localStorage.getItem("spent") +" seconds\n"+localStorage.getItem("score")
        
    }

    if((localStorage.getItem("total")) !== null){
        alltimecookieLabel.text = localStorage.getItem("total") + " cookies eaten"
    }


    // local stor --------------------

    
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

    onKeyPress("space",() => {
        if(cookiepointer.pos.y == 48){
            music.paused = true
            play("crunch")
            go("titlescreen");
        }
    })



}