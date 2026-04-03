export function spawnchristmascookie(){

    setGravity(200)
    const cookie1 = add([
        sprite("bigcookie3"),            
        pos(rand(16,79),0),
        body(),
        area({isSensor:true, friction: 0, restitution: 1}),
        offscreen({destroy:true}),
        "christmascookie"
    ])
    cookie1.vel.x = rand(-30,30)

    wait(rand(10,15),()=>{
        spawnchristmascookie()
    })

    cookie1.onCollide("pinkbowl",()=>{
        cookie1.destroy()
    })
}

export default{
    spawnchristmascookie
}