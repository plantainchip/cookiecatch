export function spawnswirlcookie(){

    setGravity(200)
    const cookie1 = add([
        sprite("bigcookie1"),            
        pos(rand(16,79),0),
        body(),
        area({shape:new Circle(vec2(0),4),isSensor:true, friction: 0, restitution: 1}),
        anchor("center"),
        offscreen({destroy:true}),
        "swirlcookie"
    ])
    cookie1.vel.x = rand(-12,12)

    wait(rand(1,4),()=>{
        spawnswirlcookie()
    })

    cookie1.onCollide("pinkbowl",()=>{
        cookie1.destroy()
    })
}

export default{
    spawnswirlcookie
}