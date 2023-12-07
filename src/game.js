import { starterMap, starterMapForeground } from './maps.js'
import { player } from './player.js'
import { boundariesStarterMap } from './boundary.js'

const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let currentZoneState = 'STARTERMAP'

function mainLoop()
{
    window.requestAnimationFrame(mainLoop)
    switch(currentZoneState)
    {
        case 'STARTERMAP':
            starterMap.draw()
            boundariesStarterMap.forEach(boundary => {
                boundary.draw()
            })
            player.update()
            starterMapForeground.draw()
            break
    }
}
mainLoop()
console.log(boundariesStarterMap)

