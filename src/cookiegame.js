import "kaplay/global";
import { spawncookie1 } from "./fallingcookie1";
import { spawngreendubiouscookie } from "./greendubiouscookie";
import { spawnbluedubiouscookie } from "./bluedubiouscookie";
import { spawnswirlcookie } from "./swirlcookie";
import { spawnchristmascookie } from "./christmascookie";


export default function () {
    console.log(getSceneName())
    const music = play("elevator2",{
        music: true,
        volume: 0.2,
        loop: true,
    })

    // this will be changed later. Bowl speed
    let SPEED = 100

    const kitchenbackground = add([
        sprite("kitchenbackground"),
        area({isSensor:true}),
        "kitchenbackground"
    ])

    const bouncecookiel = add([
        sprite("dubiouscookie2"),            
        pos(29,29),
        body(),
        area({isSensor:true,friction: 0, restitution: 1}),
        body({isStatic:true}),
        color(0,100,100),
        surfaceEffector({speed: rand(-100,100)}),
        patrol({
            waypoints:[
                vec2(29,29),
                vec2(13,29),
            ],
            speed:8,
            endBehavior: "ping-pong"
        }),
        "bouncecookie"
    ])
    const bouncecookier = add([
        sprite("dubiouscookie2"),            
        pos(61,29),
        body(),
        area({isSensor:true,friction: 0, restitution: 1}),
        body({isStatic:true}),
        color(0,100,100),
        surfaceEffector({speed: rand(-50,50)}),
        patrol({
            waypoints:[
                vec2(61,29),
                vec2(77,29),
            ],
            speed:8,
            endBehavior: "ping-pong"
        }),
        "bouncecookie"
    ])
    // bouncecookie.addForce(vec2(100, 0));

    // const pinkbowl = pinkbowlplayer(STATE.pinkbowlplayer.speed )
    const pinkbowl = add([
        sprite("bowl"),
        pos(48,54),
        area({ shape: new Rect(vec2(0,0), 18, 6), isSensor: true }),
        anchor("top"),
        animate(),
        "pinkbowl"
    ])
    pinkbowl.play("bowldefault")

    onKeyDown("a", () => {
        if(pinkbowl.pos.x > 9){
            pinkbowl.move(-SPEED,0,)
        }
    });
    onKeyDown("d", () => {
        if(pinkbowl.pos.x < 87){
            pinkbowl.move(SPEED,0)
        }
    });

    onKeyDown("left", () => {
        if(pinkbowl.pos.x > 9){
            pinkbowl.move(-SPEED,0,)
        }
    });

    onKeyDown("right", () => {
        if(pinkbowl.pos.x < 87){
            pinkbowl.move(SPEED,0)
        }
    });

    onKeyPress("a",()=>{
        pinkbowl.play("bowlleft")
        play("drag",{volume:0.5})
    })
    onKeyPress("d",()=>{
        pinkbowl.play("bowlright")
        play("drag",{volume:0.5})
    })
    onKeyPress("left",()=>{
        pinkbowl.play("bowlleft")
        play("drag",{volume:0.5})
    })
    onKeyPress("right",()=>{
        pinkbowl.play("bowlright")
        play("drag",{volume:0.5})
    })

    onKeyRelease([`a`, `d`, `left`, `right`], () => {
        pinkbowl.play("bowldefault")
    });


    // spawning cookies -------------------------------
    
    // spawn the yummy cookies
    wait(1,()=>{
        spawncookie1()
    })
    wait(3,()=>{
        spawnswirlcookie()
    })

    wait(20,()=>{
        spawnchristmascookie()
    })
    

    // spawn the yucky cookies
    wait(4,()=>{
        spawngreendubiouscookie()
    })

    wait(6,()=>{
        spawnbluedubiouscookie()
    })

    // handles count down time =================================== TIME TIME TIME
    let currTime = 61;

    // score
    const timeLabel = add([
        text("10",{
            size: 6,
            font:"tiny5"
        }),
        pos(82,1),
        color(0,0,0),
        {value:currTime}
    ])

    // indicators for time added or subtracted =-=-=-=-=-=-
    const plus30 = add([
        sprite("plus30"),
        pos(pinkbowl.pos.x,70),
        opacity(1)
    ])
    const plus2 = add([
        sprite("plus2"),
        pos(pinkbowl.pos.x,70),
        opacity(1)
    ])
    const minus5 = add([
        sprite("minus5"),
        pos(pinkbowl.pos.x,70),
        opacity(1)
    ])
    const minus10 = add([
        sprite("minus10"),
        pos(pinkbowl.pos.x,70),
        opacity(1)
    ])
    const stuck = add([
        sprite("stuck"),
        pos(pinkbowl.pos.x,70),
        opacity(1)
    ])
    const slowed = add([
        sprite("slowed"),
        pos(pinkbowl.pos.x,70),
        opacity(1)
    ])

    // =-=-=-=-=-=-

    function counting(){
        currTime -= 1
        timeLabel.value = currTime
        timeLabel.text = currTime
        if(currTime <= 0){
            window.STATE.cookiecount = cookieNum
            music.paused = true
            play("levelcomplete")
            go("scorescreen")
        }
    }

    const obj = add([
        timer(),
    ])
    obj.loop(1,()=>{
        counting()
        window.STATE.timecount += 1
    })

    onCollideUpdate("pinkbowl","greencookie",()=>{
        // showing players time added
        minus5.moveTo(pinkbowl.pos.x,pinkbowl.pos.y-10)
        slowed.moveTo(pinkbowl.pos.x,pinkbowl.pos.y-20)
        wait(0.7, () => {
            minus5.moveTo(pinkbowl.pos.x,70)
            slowed.moveTo(pinkbowl.pos.x,70)

        })
        //effects
        play("negativechime",{volume:0.5})
        currTime -= 5
        SPEED = 40
        wait(3,()=>{
            SPEED = 100
        })
    })

    onCollideUpdate("pinkbowl","bluecookie",()=>{
        // showing players time added
        minus10.moveTo(pinkbowl.pos.x,pinkbowl.pos.y-10)
        stuck.moveTo(pinkbowl.pos.x,pinkbowl.pos.y-20)
        wait(0.7, () => {
            minus10.moveTo(pinkbowl.pos.x,70)
            stuck.moveTo(pinkbowl.pos.x,70)
        })
        //effects
        play("negativechime",{volume:0.5})
        currTime -= 10
        SPEED = 0
        wait(1.5,()=>{
            SPEED = 100
        })
    })

    onCollideUpdate("pinkbowl","swirlcookie",()=>{
        // showing players time added
        plus2.moveTo(pinkbowl.pos.x,pinkbowl.pos.y-10)
        wait(0.7, () => {
            plus2.moveTo(pinkbowl.pos.x,70)
        })
        //effects
        currTime += 2
    })

    onCollideUpdate("pinkbowl","christmascookie",()=>{
        // showing players time added
        plus30.moveTo(pinkbowl.pos.x,pinkbowl.pos.y-10)
        wait(0.7, () => {
            plus30.moveTo(pinkbowl.pos.x,70)
        })
        //effects
        currTime += 30
        SPEED = 130
        wait(3,()=>{
            SPEED = 100
        })
    })
    
 




    // handle updating cookie count ================================= COOKIE COUNT 

    let cookieNum = 0


    // score
    const cookieLabel = add([
        text("0",{
            size: 6,
            font:"tiny5"
        }),
        pos(10,1),
        color(0,0,0),
        {value:cookieNum}
    ])

    onCollideUpdate("pinkbowl","smallcookie1",()=>{
        play("bonus",{volume:0.5})
        cookieNum += 1
        cookieLabel.value = cookieNum
        cookieLabel.text = cookieNum
    })
    onCollideUpdate("pinkbowl","swirlcookie",()=>{
        play("bonus",{volume:0.5})
        cookieNum += 1
        cookieLabel.value = cookieNum
        cookieLabel.text = cookieNum
    })

    onCollideUpdate("pinkbowl","christmascookie",()=>{
        play("bonus",{volume:0.5})
        cookieNum += 1
        cookieLabel.value = cookieNum
        cookieLabel.text = cookieNum
    })



    // sound effects ===================

    onCollideUpdate("bouncecookie","smallcookie1",()=>{
        play("bubble",{volume:0.3})
    })
    onCollideUpdate("bouncecookie","swirlcookie",()=>{
        play("bubble",{volume:0.3})
    })
    onCollideUpdate("bouncecookie","christmascookie",()=>{
        play("bubble",{volume:0.3})
    })
    onCollideUpdate("bouncecookie","greencookie",()=>{
        play("bubble",{volume:0.3})
    })
    onCollideUpdate("bouncecookie","bluecookie",()=>{
        play("bubble",{volume:0.3})
    })

}