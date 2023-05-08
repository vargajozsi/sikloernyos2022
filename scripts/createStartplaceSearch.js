/*amenyik status ki lett választva azt tárolja a változóban, hogy össze tudja hasonlítani a starthelyek státuszával */
let kilettValasztvaStatus = "osszes";
//osszes statusz input elemek kiválasztása
const melyikInput = document.getElementById("statusLegendId").querySelectorAll("input"); 
//starthelytablazat helye
const pozEredmeny = document.getElementById("starthelyKereses");
//startirany valaszto inputok E,D,K,Ny stb.
const szelIranyInputok = document.querySelectorAll('form.startHelyValasztoForm fieldset div input');
let szelIranyValasztott = [];


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
  startIrany: ["E", "EK", "K"],
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
  startIrany: ["K", "DNY", "NY"],
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
  startIrany: ["NY", "ENY", "E"],
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

    if (statusParam === starthelyParam.indicator || statusParam === "osszes") {
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
  pozEredmeny.innerHTML = "";
  pozEredmeny.innerHTML +=
    "<tr><th>Név</th><th>Szint</th><th>Irány</th><th>GPS</th><th>Légtér</th><th>Statusz</th><th>Video</th><th>Kép</th></tr>";
  for (let i = 0; i < starthelyTombFull.length; i++) {
    const element = starthelyTombFull[i];
    //ha a starthely szeliránya megtalálható a kiválasztott szélirányok között renderel
    if (element.startIrany.some(ai => szelIranyValasztott.includes(ai))) {
      addSearchResoult(element, kilettValasztvaStatus);      
    }
  }
  
}

//Megnézi, hogy melyik start-szélirány lett-maradt aktív a kattintás hatására
function getIranyValasztottak() {
  szelIranyValasztott = [];
  for (i = 0; i < szelIranyInputok.length; i++) {
    if (szelIranyInputok[i].checked) {
      szelIranyValasztott.push(szelIranyInputok[i].defaultValue);
    }
  } loadTableContent();
}

//Futatási terület____________________________________________
//_____*****************************************______________

//legyujti a kijelolt-bejelölt start-szél irányokat
getIranyValasztottak();

//először kiiratja a teljes táblát argumentum nélkül
loadTableContent();

/*melyik inputelem lett bejelölve?  eventlisener elhelyezése az imputokra a statusz szerinti választásnál*/
melyikInput.forEach(elem => elem.addEventListener('click', loadTableContent, false));


//start-szél iranyvalaszó input eseményfigyelés függvény indítása eseményfigyeléssel
szelIranyInputok.forEach(elem => elem.addEventListener('change', getIranyValasztottak, false));