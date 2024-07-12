/* 0.5.7 2020-12-27 16:37:09 */
var app = new function() {
    this.name = "Mechanic", this.version = "1", this.date = "2020", this.folder = "asset-v1/", this.looptime = 6857, this.bpm = 140, this.totalframe = 452, this.nbpolo = 7, this.nbloopbonus = 8, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 80, this.recminloop = 2, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepolotshirt = "polo-sprite-tshirt.png", this.spritepicto = "game-picto.png", this.colBck = "#000000", this.col0 = "#564BB5", this.col1 = "#4A3FA4", this.col2 = "#362C86", this.col3 = "#332184", this.col4 = "#2C1A67", this.animearray = [{
        name: "1_pump",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "2_wheel",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "3_tiktuk",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "4_hammer",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "5_snare",
        color: "DF8020",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "8F82FF",
        uniqsnd: !1
    }, {
        name: "7_cube",
        color: "8F82FF",
        uniqsnd: !0
    }, {
        name: "8_breather",
        color: "8F82FF",
        uniqsnd: !0
    }, {
        name: "9_transition",
        color: "8F82FF",
        uniqsnd: !1
    }, {
        name: "10_hit",
        color: "8F82FF",
        uniqsnd: !1
    }, {
        name: "11_alert",
        color: "20DF20",
        uniqsnd: !1
    }, {
        name: "12_synth",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "13_beep",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "14_arpeg",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "15_tunbum",
        color: "20DF20",
        uniqsnd: !0
    }, {
        name: "16_mechanic",
        color: "DF2020",
        uniqsnd: !1
    }, {
        name: "17_struck",
        color: "DF2020",
        uniqsnd: !1
    }, {
        name: "18_woah",
        color: "DF2020",
        uniqsnd: !0
    }, {
        name: "19_hum",
        color: "DF2020",
        uniqsnd: !0
    }, {
        name: "20_doot",
        color: "DF2020",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Mechanic",
        src: "v1-b1-mechanic-hb.mp4",
        code: "1,3,6,12,20",
        sound: "bonus-mechanic",
        aspire: "aspire-mechanic"
    }], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
