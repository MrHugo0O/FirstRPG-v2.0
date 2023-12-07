export const offset = {x: -1100, y: -900}

export const canvasWidth = 1879
export const canvasHeight = 497
export const playerOffset = {x: canvasWidth/2, y: canvasHeight/2 + 10}

export const playerVelocity = 1.5
export const cameraVelocity = playerVelocity

export function rectengularCollisionDetection({rectangle1, rectangle2})
{
    if(rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )return true
    else return false
}