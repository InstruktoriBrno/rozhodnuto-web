﻿var vterina = 1000;
var minuta = vterina * 60;
var hodina = minuta * 60;
var den = hodina * 24;
var rok = den * 365.24219;

var slova = {
    roku: ["rok", "roky", "let"],
    dnu: ["den", "dny", "dnů"],
    hodin: ["hodina", "hodiny", "hodin"],
    minut: ["minuta", "minuty", "minut"],
    vterin: ["vteřina", "vteřiny", "vteřin"]
};

function sklonovani(pocet, co) {
    if (pocet == 1) return slova[co][0];
    if (pocet < 5 && pocet > 0) return slova[co][1];
    return slova[co][2];
}

function odpocet(el) {
    var konec = new Date(el.getAttribute("data-konec"));
    var ted = new Date();
    var rozdil = konec - ted;
    if (rozdil < vterina) {
        el.innerHTML = el.getAttribute("data-hlaska");
        return;
    }
    var zbyva = {
        roku: Math.floor(rozdil / rok),
        dnu: Math.floor(rozdil % rok / den),
        hodin: Math.floor((rozdil % den) / hodina),
        minut: Math.floor((rozdil % hodina) / minuta),
        vterin: Math.floor((rozdil % minuta) / vterina)
    }

    var vypis = el.getAttribute("data-zbyva");
    for (co in zbyva) {
        var pocet = zbyva[co];
        if (pocet > 0) vypis += " " + pocet + " " + sklonovani(pocet, co);

    }

    el.innerHTML = vypis;
    setTimeout(function() {
      odpocet(el); 
    }, vterina);
}