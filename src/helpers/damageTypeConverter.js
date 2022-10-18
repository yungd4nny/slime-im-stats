export function damageTypeConverter (inputDamageType) {
    var damageType;
    if(inputDamageType === 'Magic') {
        damageType = "https://i.imgur.com/tOS4FvO.png"
    } else if(inputDamageType === "Physical") {
        damageType = "https://i.imgur.com/P8lUDX0.png"
    } else {
        return inputDamageType;
    }
    return damageType;
}