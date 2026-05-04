export function spawnmilk(){

    setGravity(200)
    const cookie1 = add([
        sprite("milk"),            
        pos(rand(16,79),0),
        body(),
        area({isSensor:true, friction: 0, restitution: 1}),
        anchor("center"),
        offscreen({destroy:true}),
        "milkglass"
    ])
    cookie1.vel.x = rand(-16,16)

    wait(rand(8,13),()=>{
        spawnmilk()
    })

    cookie1.onCollide("pinkbowl",()=>{
        cookie1.destroy()
    })
}

export default{
    spawnmilk
}