import { c } from "./game.js"
import { playerOffset, playerVelocity, rectengularCollisionDetection } from './util.js'
import { boundariesStarterMap } from "./boundary.js"

class Player
{
    constructor({position, velocity, image, frames = {upMax: 1}, animation = {movingDirection: 'DOWN'}})
    {
        this.movKeysPressed = {
            w: {pressed: false}, 
            a: {pressed: false}, 
            s: {pressed: false}, 
            d: {pressed: false}
        }

        this.position = position
        this.velocity = velocity
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.animation = animation
        this.moving = false

        this.image.onload = () => {
            this.width = this.image.width / 4
            this.height = this.image.height / (this.frames.upMax + 3)
        }
    }

    update()
    {
        this.playerMovement()
        this.draw()
    }

    draw()
    {
        let dircetionIndex = 0
        switch(this.animation.movingDirection)
        {
            case 'DOWN':
                dircetionIndex = 0
                break
            case 'UP':
                dircetionIndex = 1
                break
            case 'LEFT':
                dircetionIndex = 2
                break
            case 'RIGHT':
                dircetionIndex = 3
                break
        }
        c.drawImage(
            this.image,
            48 * dircetionIndex,
            this.frames.val * 48,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
            )
        if(this.moving)
        {
            if(this.frames.upMax > 1)
            {
                this.frames.elapsed++
            }
            if(this.frames.elapsed % 20 == 0)
            {
                if(this.frames.val < this.frames.upMax - 1)
                {
                    this.frames.val++
                }
                else
                {
                    this.frames.val = 0
                }
            }
        }
    }

    playerMovement()
    {
        if(this.movKeysPressed.w.pressed)
        {
            this.moving = true
            for(let i = 0;i < boundariesStarterMap.length;i++)
            {
                const boundary = boundariesStarterMap[i]
                if(rectengularCollisionDetection({rectangle1: {...boundary, position: {x: boundary.position.x, y: boundary.position.y + playerVelocity}}, rectangle2: {...player, width: player.width - 3, height: player.height - 3}}))
                {
                    this.moving = false
                    break
                }
            }
            if(this.moving)
            {
                this.position.y -= playerVelocity
                this.animation.movingDirection = 'UP'
            }
        }
        if(this.movKeysPressed.a.pressed)
        {
            this.moving = true
            for(let i = 0;i < boundariesStarterMap.length;i++)
            {
                const boundary = boundariesStarterMap[i]
                if(rectengularCollisionDetection({rectangle1: {...boundary, position: {x: boundary.position.x + playerVelocity, y: boundary.position.y}}, rectangle2: {...player, width: player.width - 3, height: player.height - 3}}))
                {
                    this.moving = false
                    break
                }
            }
            if(this.moving)
            {
                this.position.x -= playerVelocity
                this.animation.movingDirection = 'LEFT'
            }
        }
        if(this.movKeysPressed.s.pressed)
        {
            this.moving = true
            for(let i = 0;i < boundariesStarterMap.length;i++)
            {
                const boundary = boundariesStarterMap[i]
                if(rectengularCollisionDetection({rectangle1: {...boundary, position: {x: boundary.position.x, y: boundary.position.y - playerVelocity}}, rectangle2: {...player, width: player.width - 3, height: player.height - 3}}))
                {
                    this.moving = false
                    break
                }
            }
            if(this.moving)
            {
                this.position.y += playerVelocity
                this.animation.movingDirection = 'DOWN'
            }
        }
        if(this.movKeysPressed.d.pressed)
        {
            this.moving = true
            for(let i = 0;i < boundariesStarterMap.length;i++)
            {
                const boundary = boundariesStarterMap[i]
                if(rectengularCollisionDetection({rectangle1: {...boundary, position: {x: boundary.position.x - playerVelocity, y: boundary.position.y}}, rectangle2: {...player, width: player.width - 3, height: player.height - 3}}))
                {
                    this.moving = false
                    break
                }
            }
            if(this.moving)
            {
                this.position.x += playerVelocity
                this.animation.movingDirection = 'RIGHT'
            }
        }
        if(!this.movKeysPressed.w.pressed && !this.movKeysPressed.a.pressed && !this.movKeysPressed.s.pressed && !this.movKeysPressed.d.pressed)
        {
            this.moving = false
        }
    }
}

const playerImage = new Image()
playerImage.src = './Assets/UsedAssets/Actor/Player/SpriteSheet.png'
export const player = new Player({position: {x: playerOffset.x, y: playerOffset.y}, playerVelocity, image: playerImage, frames : {upMax: 4}})

window.addEventListener('keydown', (e) => {
    switch(e.key)
    {
        case 'w':
            player.movKeysPressed.w.pressed = true
            break
        case 'a':
            player.movKeysPressed.a.pressed = true
            break
        case 's':
            player.movKeysPressed.s.pressed = true
            break
        case 'd':
            player.movKeysPressed.d.pressed = true
            break
    }
})
window.addEventListener('keyup', (e) => {
    switch(e.key)
    {
        case 'w':
            player.movKeysPressed.w.pressed = false
            break
        case 'a':
            player.movKeysPressed.a.pressed = false
            break
        case 's':
            player.movKeysPressed.s.pressed = false
            break
        case 'd':
            player.movKeysPressed.d.pressed = false
            break
    }
})
