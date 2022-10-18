export function statStringConverter(statString) {
    //convert stat string to image url
    var statImageSrc;
    if(statString == "Atk") {
        statImageSrc = "https://i.imgur.com/yduAVsz.png";
    } else if (statString == "Def") {
        statImageSrc = "https://i.imgur.com/P4N7gFs.png";
    } else if (statString == "Balance") {
        statImageSrc = "https://i.imgur.com/MLuLYZy.png";
    } else {
        statImageSrc = statString;
    }
    return statImageSrc;
}