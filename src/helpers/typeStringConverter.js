export function typeStringConverter(typeString) {
    //convert string types to imgur links
    var typeImageSrc;
    if(typeString == "Wind") {
        typeImageSrc = "https://i.imgur.com/pQYVkI3.png";
    } else if (typeString == "Dark") {
        typeImageSrc = "https://i.imgur.com/pzX6NRL.png";
    } else if (typeString == "Light") {
        typeImageSrc = "https://i.imgur.com/hX15sR0.png";
    } else if (typeString == "Space") {
        typeImageSrc = "https://i.imgur.com/z8bnSYg.png";
    } else if (typeString == "Earth") {
        typeImageSrc = "https://i.imgur.com/AHPti72.png";
    } else if (typeString == "Fire") {
        typeImageSrc = "https://i.imgur.com/QndVudD.png";
    } else if (typeString == "Water") {
        typeImageSrc = "https://i.imgur.com/NchScWh.png";
    } else {
        typeImageSrc = typeString;
    }
    return typeImageSrc;
}