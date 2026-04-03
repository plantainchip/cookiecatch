export function spawngreendubiouscookie(){

    setGravity(200)
    const cookie1 = add([
        sprite("dubiouscookie2"),            
        pos(rand(16,79),0),
        body(),
        area({shape:new Circle(vec2(0),4),isSensor:true, friction: 0, restitution: 1}),
        anchor("center"),
        offscreen({destroy:true}),
        "greencookie"
    ])
    cookie1.vel.x = rand(-16,16)

    wait(rand(2,4),()=>{
        spawngreendubiouscookie()
    })

    cookie1.onCollide("pinkbowl",()=>{
        cookie1.destroy()
    })
}

export default{
    spawngreendubiouscookie
}