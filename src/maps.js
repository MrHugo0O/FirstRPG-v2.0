import { c } from "./game.js"
import { offset } from "./util.js"

class MapImage
{
    constructor({position, image})
    {
        this.position = position
        this.image = image
    }

    draw()
    {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const starterMapImg = new Image()
starterMapImg.src = './Assets/Map/Starter-Map.png'
export const starterMap = new MapImage({position: {x: offset.x, y: offset.y}, image: starterMapImg})

const starterMapForegroundImg = new Image()
starterMapForegroundImg.src = './Assets/Map/Starter-Map-Foreground.png'
export const starterMapForeground = new MapImage({position: {x: offset.x, y: offset.y}, image: starterMapForegroundImg})