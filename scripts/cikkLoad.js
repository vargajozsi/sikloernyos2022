const belepesiPont = document.getElementById("cikkBelepesiPont");

const articelDatas = [{
    articelNr: 3,
    cikkCim: "Harmadik cikk",
    kepEleres: "./media/cikkek/dudek/dudek-logo-red.svg",
    adat1: ["szoveg", "ide szöveg1"],
    adat2: ["szoveg", "ide szöveg2"],
    adat3: ["szoveg", "ide szöveg3"],
    adat4: "",
    adat5: "",
    articelDatum: "2023.03.12",
    kepAltSzoveg: "Dudek Beulő bevitt altszoveg"

}]


class CreateCikk {
  constructor(aktualisCikk) {
    this._cim = aktualisCikk.cikkCim;
    this._datumNap = aktualisCikk.articelDatum;
    this._altSzoveg = aktualisCikk.kepAltSzoveg;
    this._kepeleres = aktualisCikk.kepEleres;
    this._szoveg1 = aktualisCikk.adat1[1];
    this._szoveg2 = aktualisCikk.adat2[1];
    this._szoveg3 = aktualisCikk.adat3[1];
      this._sorszam = aktualisCikk.articelNr;
    const articCreated = document.createElement("article");
    belepesiPont.append(articCreated);
    console.log(belepesiPont.lastElementChild);
    belepesiPont.lastElementChild.setAttribute("id", `${this._sorszam}`);
    belepesiPont.lastElementChild.innerHTML = `<div id="hirCime" class="hir-cime"><h2>${this._cim}</h2><img id="cikkFejKep" src="${this._kepeleres}" alt="${this._altSzoveg}"></div><div id="tartalom" class="hir-tartalom"><div class="
        "szovegeles"><p id="szoveg1">${this._szoveg1}</p><br><br><p id="szoveg2">${this._szoveg2}</p><br><br><p id="szoveg3">${this._szoveg3}</p><p><time datetime="${this._datumNap}">${this._datumNap}</time></p></div><div id="hastag" class="hir-hashtag"></div>`;
  }

  get cim() {
    return this._cim;
    }
    set putParagraph(szovegBekezdes) {
       
   }

}

const kkkk = new CreateCikk(articelDatas[0]);


