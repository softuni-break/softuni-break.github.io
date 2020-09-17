import { animationFrame } from './animations.js';
let isStarted = false;

export function controlCenter(){
    if(!isStarted){
        animationFrame.startUpdateSeconds();
    } else {
        animationFrame.stopUpdateSeconds();
    }

    isStarted = !isStarted;
}