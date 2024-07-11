function onclickSelectArtist(id) {
    let elementOfArtist = document.getElementById(id);
    let shadowColor;
    if(elementOfArtist.style.boxShadow == ``) {
        switch(id) {
            case "Wavetoearth" : shadowColor = `inset 0px 0px 20px 15px rgba(171, 73, 140, 0.612)`;
            break;
            case "LanaDelRey": shadowColor = `inset 0px 0px 20px 15px rgba(128, 155, 218, 0.612)`;
            break;
            case "BillieEilish": shadowColor = `inset 0px 0px 20px 15px rgba(220, 214, 215, 0.612)`;
            break;
            /*th2 singer*/
            case "ArianaGrande": shadowColor = `inset 0px 0px 20px 15px rgba(52, 78, 53, 0.612)`;
            break;
            case "WoodZ": shadowColor = `inset 0px 0px 20px 15px rgba(112, 174, 205, 0.612)`;
            break;
            case "Arcticmonkeys": shadowColor = `inset 0px 0px 20px 15px rgba(166, 170, 151, 0.612)`;
            break;
            /*th3 singer*/
            case "Theweekend": shadowColor = `inset 0px 0px 20px 15px rgba(98, 181, 200, 0.612)`;
            break;
            case "Taeyeon": shadowColor = `inset 0px 0px 20px 15px rgba(201, 113, 127, 0.612)`;
            break;
            case "JulietIvy": shadowColor = `inset 0px 0px 20px 15px rgba(220, 214, 215, 0.612)`;
            break;
            /*th4 singer*/
            case "VioletteWautier": shadowColor = `inset 0px 0px 20px 15px  rgba(8, 8, 8, 0.612)`;
            break;
            case "OliviaRodrigo": shadowColor = `inset 0px 0px 20px 15px rgba(32, 37, 64, 0.612)`;
            break;
            case "TaylorSwift": shadowColor = `inset 0px 0px 20px 15px rgba(188, 128, 98, 0.612)`;
            break;
        }
        elementOfArtist.style.boxShadow = shadowColor;
    }else {
        elementOfArtist.style.boxShadow = ``;
    }
    /*
    box-shadow: inset 0px 0px 20px 15px rgba(146, 130, 238, 0.612);
    line-height:150px;
    width: 150px;
    height: 150px;
    */
}