function instructor() {
  let txt = 0;
  let person = prompt("Are you an instructor ?", "Yes or No (Case Sensitive)");
  if (person === "Yes") {
    let num = prompt("How many do you want?", "Input number");
    txt += Number(num);
  } else {
    alert("Sorry");
  }

  document.getElementById("amount").innerHTML =
    Number(document.getElementById("amount").innerHTML) + txt;
}

let waifuName = {
  SSR: [
    "SSR - Amaterasu",
    "SSR - Hachiman",
    "SSR - Izanami",
    "SSR - Sri",
    "SSR - Roro",
    "SSR - Wendigo",
    "SSR - Hraesvelgr ",
    "SSR - Gilgamesh",
  ],
  SR: [
    "SR - Osiris",
    "SR - Ra",
    "SR - Anubis",
    "SR - Enki",
    "SR - Ereshkigal",
    "SR - Kane",
    "SR - Kanaloa",
    "SR - Hina",
    "SR - Mithra",
    "SR - Verethragna",
    "SR - Ahura Mazda",
  ],
  R: [
    "R - Zorvan",
    "R - Nazarata",
    "R - Perun",
    "R - Dazhbog",
    "R - Ah Muzen Cab",
    "R - Ah Puch",
    "R - Anhur",
    "R - Awilix",
    "R - Baba Yaga",
    "R - Baron Samedi",
    "R - Bastet",
    "R - Cabrakan",
    "R - Camazotz",
    "R - Cernunnos",
    "R - Chaac",
    "R - Chernobog",
    "R - Xbalanque",
    "R - Susanoo",
    "R - Hun Batz",
    "R - Yemoja",
    "R - Sobek",
    "R - Bishamon",
    "R - Kuzenbo",
    "R - Geb",
  ],
  UC: [
    "UC - Cthulhu",
    "UC - Nodens",
    "UC - Dagan",
    "UC - Dagon",
    "UC - Dagnu",
    "UC - Calliana",
    "UC - Soul Cinder",
    "UC - Blink",
    "UC - Talaven",
    "UC - Lockjaw",
    "UC - Varas",
    "UC - Gisguth",
    "UC - Mordiggian",
    "UC - Nyogtha",
    "UC - Nug",
    "UC - Rhan-Tegoth",
    "UC - Umr At-Tawil",
    "UC - Yig",
    "UC - Zushakon",
    "UC - Uktena",
    "UC - Tianuwa",
    "UC - Barzach",
    "UC - Thernvull",
    "UC - Ashura",
    "UC - Anjanath",
    "UC - Rathian",
    "UC - Legiana",
    "UC - Odogaron",
    "UC - Lavasioth",
    "UC - Nergigante",
    "UC - Vaal Hazak",
    "UC - Shaddar-Nur",
    "UC - Glorb",
    "UC - Frazzler",
    "UC - Odin",
    "UC - Frigg",
    "UC - Baldr",
    "UC - Ymir",
    "UC - Loki",
    "UC - Thor",
    "UC - Freya",
    "UC - Jack The Ripper",
  ],
  C: [
    "C - Heimdall",
    "C - Jormungandr",
    "C - Zeus",
    "C - Hera",
    "C - Poseidon",
    "C - Demeter",
    "C - Ares",
    "C - Athena",
    "C - Apollo",
    "C - Arthemis",
    "C - Hephaestus",
    "C - Hestia",
    "C - Aphrodite",
    "C - Hermes",
    "C - Dionysus",
    "C - Hades",
    "C - Hypnos",
    "C - Janus",
    "C - Nemesis",
    "C - Iris",
    "C - Hecate",
    "C - Isis",
    "C - Tyche",
    "C - Uzume",
    "C - Fuujin",
    "C - Inari",
    "C - Izanagi",
    "C - Kuninotokotachi",
    "C - Okuninushi",
    "C - Omoikane",
    "C - Raijin",
    "C - Ryuujin",
    "C - Suijin",
    "C - Tenjin",
    "C - Tsukuyomi",
    "C - Takemikazuchi",
    "C - Futsunushi",
    "C - Isetsuhiko",
    "C - Kagutsuchi",
    "C - Konohanasakuya",
    "C - Bezai",
    "C - Daikoku  ",
    "C - Ebisu",
    "C - Fukurokuju",
    "C - Hotei",
    "C - Jurojin",
    "C - Yato",
    "C - Akaname",
    "C - Amamehagi",
    "C - Amaterasu",
    "C - Ayakashi",
    "C - Byakko",
    "C - Daidara",
    "C - Isonade",
    "C - Jorogumo",
    "C - Jibakurei",
    "C - Kamaitachi",
    "C - Kamikiri",
    "C - Kirin",
    "C - Kitsune",
    "C - Kiyohime",
    "C - Kubikajiri",
    "C - Mizuchi",
    "C - Momokuren",
    "C - Momonji",
    "C - Nekomata",
    "C - Nozuchi",
    "C - Nurarihyon",
    "C - Okami",
  ],
};

function gacha() {
  if (Number(document.getElementById("amount").innerHTML) < 30) {
    alert(`You don't have enough diamonds. Get some through gambling`);
  } else if (Number(document.getElementById("amount").innerHTML) >= 30) {
    let x = Math.ceil(Math.random() * 100),
      result = 0;
    if (x > 98.5) {
      let y = Math.ceil(Math.random() * (waifuName.SSR.length - 1));
      result = waifuName.SSR[y];
    } else if (x > 90) {
      let y = Math.ceil(Math.random() * (waifuName.SR.length - 1));
      result = waifuName.SR[y];
    } else if (x > 75) {
      let y = Math.ceil(Math.random() * (waifuName.R.length - 1));
      result = waifuName.R[y];
    } else if (x > 50) {
      let y = Math.ceil(Math.random() * (waifuName.UC.length - 1));
      result = waifuName.UC[y];
    } else {
      let y = Math.ceil(Math.random() * (waifuName.C.length - 1));
      result = waifuName.C[y];
    }

    for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
      if (i == 0) {
        document.getElementsByTagName("p")[i].innerHTML = result;
        document.getElementById("amount").innerHTML =
          Number(document.getElementById("amount").innerHTML) - 30;
      } else document.getElementsByTagName("p")[i].innerHTML = "";
    }
  }

  if (Number(document.getElementById("amount").innerHTML) < 0) {
    document.getElementById("amount").innerHTML = 0;
  }
}

function gacha10() {
  if (Number(document.getElementById("amount").innerHTML) < 270) {
    alert(`You don't have enough diamonds. Get some through gambling`);
  } else if (Number(document.getElementById("amount").innerHTML) >= 270) {
    let result = [];
    for (let i = 0; i < 10; i++) {
      let x = Math.ceil(Math.random() * 100);
      if (x > 97.5) {
        let y = Math.ceil(Math.random() * (waifuName.SSR.length - 1));
        result.push(waifuName.SSR[y]);
      } else if (x > 90) {
        let y = Math.ceil(Math.random() * (waifuName.SR.length - 1));
        result.push(waifuName.SR[y]);
      } else if (x > 75) {
        let y = Math.ceil(Math.random() * (waifuName.R.length - 1));
        result.push(waifuName.R[y]);
      } else if (x > 50) {
        let y = Math.ceil(Math.random() * (waifuName.UC.length - 1));
        result.push(waifuName.UC[y]);
      } else {
        let y = Math.ceil(Math.random() * (waifuName.C.length - 1));
        result.push(waifuName.C[y]);
      }
      document.getElementsByTagName("p")[i].innerHTML = result[i];
    }
    document.getElementById("amount").innerHTML =
      Number(document.getElementById("amount").innerHTML) - 270;
  }

  if (Number(document.getElementById("amount").innerHTML) < 0) {
    document.getElementById("amount").innerHTML = 0;
  }
}
