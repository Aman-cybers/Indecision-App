const isAdult = (x) => {
    if(x>=18){
        return true
    }
    return false
}
const canDrink = (x) => {
    if(x<18){
        return false
    }
    return true
}

const sub = (a,b) => a-b;

export {isAdult,canDrink,sub as default}