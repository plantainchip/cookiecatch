export function spawnbluedubiouscookie(){

    setGravity(300)
    const cookie1 = add([
        sprite("dubiouscookie1"),            
        pos(rand(16,79),0),
        body(),
        area({shape:new Circle(vec2(0),4),isSensor:true, friction: 0, restitution: 1}),
        anchor("center"),
        offscreen({destroy:true}),
        "bluecookie"
    ])
    cookie1.vel.x = rand(-8,8)

    wait(rand(7,10),()=>{
        spawnbluedubiouscookie()
    })

    cookie1.onCollide("pinkbowl",()=>{
        cookie1.destroy()
    })
}

export default{
    spawnbluedubiouscookie
}