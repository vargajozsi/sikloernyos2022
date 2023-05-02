const startHelyCsolnok = {
    nev: "Csolnok, Mókus hegy",
    szintKulombseg: "110",
    startIrany: ["DK", "D", "DNY"],
    gpsKoordinatak: "47.68868, 18.70899",
    legter: "G10, 1350m",
    megJegyzes: "Natura 2000, harombol ket starthely TV engedelyezett 2023.12.31-ig, magasstart",
    video: "valami.mov",
    starthelyKep: "valami.jpg",
    statusA: "tiltott"

}

const startHelyCsolnokMasik = {
    nev: "Csolnok, Mókus hegy",
    szintKulombseg: "110",
    startIrany: ["DK", "D", "DNY"],
    aktualisSzeliranyIndikator: "",
    gpsKoordinatak: "47.68868, 18.70899",
    legter: "G10, 1350m",
    megJegyzes: "Natura 2000, harombol ket starthely TV engedelyezett 2023.12.31-ig, magasstart",
    video: "valami.mov",
    starthelyKep: "valami.jpg",
    statusA: "free"

}


const starthelyTombFull = [startHelyCsolnok, startHelyCsolnokMasik];

function addSearchResoult(starthelyParam){
    
    const pozEredmeny = document.getElementById('starthelyKereses');
    pozEredmeny.innerHTML += 
    `<tr class="${starthelyParam.statusA}"><td>${starthelyParam.nev}</td><td>${starthelyParam.szintKulombseg}</td><td>${starthelyParam.startIrany}</td><td>${starthelyParam.gpsKoordinatak}</td><td>${starthelyParam.legter}</td><td>${starthelyParam.megJegyzes}</td><td>${starthelyParam.video}</td><td>${starthelyParam.starthelyKep}</td>`;
};

for (let i = 0; i < starthelyTombFull.length; i++) {
    const element = starthelyTombFull[i];
    addSearchResoult(element);

};

document.getElementById("osszes").addEventListener("click", melyikFuggveny, false);
function melyikFuggveny() {
let melyikStatus = "osszes";
    console.log(melyikStatus);
}