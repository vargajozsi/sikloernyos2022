/*amenyik status ki lett választva azt tárolja a változóban, hogy össze tudja hasonlítani a starthelyek státuszával */
let kilettValasztvaStatus = "osszes";
const pozEredmeny = document.getElementById("starthelyKereses");


// starthelyegyedek
const startHelyCsolnok = {
  nev: "Csolnok, Mókus hegy",
  szintKulombseg: "110",
  startIrany: ["DK", "D", "DNY"],
  gpsKoordinatak: "47.68868, 18.70899",
  legter: "G10, 1350m",
  megJegyzes:
    "Natura 2000, harombol ket starthely TV engedelyezett 2023.12.31-ig, magasstart",
  video: "valami.mov",
  starthelyKep: "valami.jpg",
  statusA: "tiltott",
  indicator: "tiltott",
};

const startHelyCsolnokMasik = {
  nev: "masodik engedélyezett",
  szintKulombseg: "110",
  startIrany: ["DK", "D", "DNY"],
  aktualisSzeliranyIndikator: "",
  gpsKoordinatak: "47.68868, 18.70899",
  legter: "G10, 1350m",
  megJegyzes:
    "Natura 2000, harombol ket starthely TV engedelyezett 2023.12.31-ig, magasstart",
  video: "valami.mov",
  starthelyKep: "valami.jpg",
  statusA: "engedélyezett",
  indicator: "engedelyezett",
};

const startHelyCsolnokHarmadik = {
  nev: "Harmadik engedélyezett",
  szintKulombseg: "110",
  startIrany: ["DK", "D", "DNY"],
  aktualisSzeliranyIndikator: "",
  gpsKoordinatak: "47.68868, 18.70899",
  legter: "G10, 1350m",
  megJegyzes:
    "Natura 2000, harombol ket starthely TV engedelyezett 2023.12.31-ig, magasstart",
  video: "valami.mov",
  starthelyKep: "valami.jpg",
  statusA: "engedélyezett",
  indicator: "engedelyezett",
};

const startHelyCsolnokNegyedik = {
  nev: "Negyedik tisztázatlan",
  szintKulombseg: "110",
  startIrany: ["DK", "D", "DNY"],
  aktualisSzeliranyIndikator: "",
  gpsKoordinatak: "47.68868, 18.70899",
  legter: "G10, 1350m",
  megJegyzes:
    "Natura 2000, harombol ket starthely TV engedelyezett 2023.12.31-ig, magasstart",
  video: "valami.mov",
  starthelyKep: "valami.jpg",
  statusA: "tisztázatlan",
  indicator: "tisztazatlan",
};

//Starthely objektumok arrayba
const starthelyTombFull = [
  startHelyCsolnok,
  startHelyCsolnokMasik,
  startHelyCsolnokHarmadik,
  startHelyCsolnokNegyedik,
];


// starthely táblázat létrehozása starthelyelemek kiíratása
function addSearchResoult(starthelyParam, statusParam) {
    if (statusParam === starthelyParam.indicator || statusParam === 'osszes') {
        pozEredmeny.innerHTML += `<tr class="${starthelyParam.indicator}"><td>${starthelyParam.nev}</td><td>${starthelyParam.szintKulombseg}</td><td>${starthelyParam.startIrany}</td><td>${starthelyParam.gpsKoordinatak}</td><td>${starthelyParam.legter}</td><td>${starthelyParam.megJegyzes}</td><td>${starthelyParam.video}</td><td>${starthelyParam.starthelyKep}</td>`;
    } 
}


//az ősszes strthely kiválasztása kiiratáshoz
function loadTableContent(ev) {
    if (ev === undefined) {
        // az első táblabetöltés argumentum nélkül hívódik a függvény hibakezelés
    } else {
        kilettValasztvaStatus = ev.target.id;
    }
    pozEredmeny.innerHTML = '';    
    pozEredmeny.innerHTML += "<tr><th>Név</th><th>Szint</th><th>Irány</th><th>GPS</th><th>Légtér</th><th>Statusz</th><th>Video</th><th>Kép</th></tr>";
    for (let i = 0; i < starthelyTombFull.length; i++) {
        const element = starthelyTombFull[i];
        addSearchResoult(element, kilettValasztvaStatus);
    }
    window.scrollTo(0,document.body.scrollHeight);
}

//először kiiratja a teljes táblát argumentum nélkül
loadTableContent();
  
/*melyik inputelem lett bejelölve?  eventlisener elhelyezése az imputokra*/
const melyikInput = document.getElementById("statusLegendId").querySelectorAll("input"); //input elemek kiválasztása
for (i = 0; i < melyikInput.length; i++) {
    melyikInput[i].addEventListener("click", loadTableContent, false);
}