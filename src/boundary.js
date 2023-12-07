import { c } from './game.js'
import { collisionsStarterMap } from './collisionMaps.js'
import { offset } from './util.js'

class Boundary
{
    static width = 48
    static height = 48
    constructor({position})
    {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw()
    {
        c.fillStyle = 'rgba(255, 0, 0, 0.3)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

export const boundariesStarterMap = []
collisionsStarterMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if(symbol == 1868)
        {
            boundariesStarterMap.push(new Boundary({position: {x: j * Boundary.width + offset.x, y: i * Boundary.height + offset.y}}))
        }
    })
})