export function spawncookie1(){

    setGravity(100)
    const cookie1 = add([
        choose([
            sprite("smallcookie1"),
            sprite("smallcookie2"),
            sprite("smallcookie3"),            
        ]),
        
        pos(rand(16,79),0),
        body(),
        area({shape:new Circle(vec2(0),3),isSensor:true, friction: 0, restitution: 1}),
        anchor("center"),
        offscreen({destroy:true}),
        "smallcookie1"
    ])
    cookie1.vel.x = rand(-24,24)

    wait(rand(0.3,3),()=>{
        spawncookie1()
    })

    cookie1.onCollide("pinkbowl",()=>{
        cookie1.destroy()
    })
}

export default{
    spawncookie1
}