const belepesiPont = document.getElementById("cikkBelepesiPont");


class CreateCikk {
    constructor(cim, kepEleres, szoveg1, szoveg2, szoveg3, datumNap, sorszam, altSzoveg) {
        this._cim = cim;
        this._datumNap = datumNap;
        this._altSzoveg = altSzoveg;
        this._kepeleres = kepEleres;
        this._szoveg1 = szoveg1;
        this._szoveg2 = szoveg2;
        this._szoveg3 = szoveg3;
        const articCreated = document.createElement("article");
        belepesiPont.append(articCreated);
        console.log(belepesiPont.lastElementChild)
        belepesiPont.lastElementChild.setAttribute("id", `${sorszam}`);
        belepesiPont.lastElementChild.innerHTML = `<div id="hirCime" class="hir-cime"><h2>${cim}</h2><img id="cikkFejKep" src="${kepEleres}" alt="${altSzoveg}"></div><div id="tartalom" class="hir-tartalom"><div class="
        "szovegeles"><p id="szoveg1">${szoveg1}</p><br><br><p id="szoveg2">${szoveg2}</p><br><br><p id="szoveg3">${szoveg3}</p><p><time datetime="${datumNap}">${datumNap}</time></p></div><div id="hastag" class="hir-hashtag"></div>`

    
    }

    get cim() {
        return this._cim
    }
    

}

const kkkk = new CreateCikk("Az első cilkk Javascript", "./media/cikkek/dudek/dudek-logo-red.svg", "ide szöveg1", "ide szöveg2", "ide szöveg3", "2023.03.12", 0, "Dudek Beulő bevitt altszoveg");
const llll = new CreateCikk("Masodik cikk","./media/cikkek/dudek/dudek-logo-red.svg" , "ide szöveg1", "ide szöveg2", "ide szöveg3", "2023.03.13", 1, "altszoveg 2");

