const belepesiPont = document.getElementsByClassName("cikkBelepesiPont");
console.log(belepesiPont[0]);



class CreateCikk {
    constructor(cim, datumNap) {
        this._cim = cim;
        this._datumNap = datumNap;
    }
    get cim() {
        return this._cim
    }
}

const kkkk = new CreateCikk("mmmm", "2023.03.12");

