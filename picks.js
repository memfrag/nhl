

var persons = [
    "Dan", "Elin", "Eric", "Fredrik B", "John", "Jonas", "Linda", "Martin", "Robert", "Fredrik S"
];

var picks = {
    "Dan": {
        eastern: ["nyr", "det", "njd", "tor", "mtl", "pit", "fla", "ott", "bos", "car", "wsh", "buf", "cbj", "nyi", "tbl", "phi"],
        western: ["col", "edm", "van", "ana", "sjs", "lak", "cgy", "chi", "ari", "wpg", "dal", "vgk", "nsh", "min", "stl"]
    },
    "Elin": {
        eastern: ["det", "pit", "phi", "tbl", "wsh", "nyr", "nyi", "fla", "bos", "buf", "car", "cbj", "mtl", "njd", "ott", "tor"],
        western: ["sjs", "chi", "dal", "ana", "stl", "min", "nsh", "ari", "lak", "col", "van", "vgk", "cgy", "wpg", "edm"]
    },
    "Eric": {
        eastern: ["pit", "bos", "nyr", "ott", "det", "wsh", "tbl", "cbj", "nyi", "tor", "mtl", "phi", "buf", "fla", "car", "njd"],
        western: ["nsh", "chi", "ana", "sjs", "lak", "vgk", "edm", "min", "cgy", "stl", "van", "wpg", "dal", "col", "ari"]
    },
    "Fredrik B": {
        eastern: ["mtl", "wsh", "cbj", "pit", "ott", "nyi", "bos", "tor", "nyr", "fla", "car", "tbl", "buf", "phi", "njd", "det"],
        western: ["edm", "ana", "stl", "chi", "min", "vgk", "nsh", "lak", "dal", "wpg", "sjs", "ari", "van", "cgy", "col"]
    },
    "John": {
        eastern: ["pit", "tbl", "wsh", "tor", "nyr", "ott", "mtl", "cbj", "bos", "nyi", "phi", "fla", "njd", "car", "buf", "det"],
        western: ["edm", "nsh", "ana", "chi", "min", "sjs", "stl", "wpg", "dal", "lak", "ari", "cgy", "vgk", "van", "col"]
    },
    "Jonas": {
        eastern: ["wsh", "pit", "nyr", "bos", "mtl", "tbl", "nyi", "cbj", "det", "ott", "tor", "car", "njd", "fla", "phi", "buf"],
        western: ["stl", "chi", "ana", "nsh", "dal", "min", "edm", "lak", "sjs", "van", "vgk", "cgy", "wpg", "col", "ari"]
    },
    "Linda": {
        eastern: ["mtl", "wsh", "pit", "ott", "cbj", "tbl", "nyr", "bos", "tor", "car", "det", "buf", "fla", "njd", "nyi", "phi"],
        western: ["chi", "ana", "edm", "sjs", "stl", "nsh", "col", "cgy", "min", "vgk", "ari", "dal", "lak", "van", "wpg"]
    },
    "Martin": {
        eastern: ["wsh", "pit", "cbj", "mtl", "tor", "nyr", "tbl", "car", "nyi", "ott", "bos", "phi", "fla", "det", "njd", "buf"],
        western: ["edm", "ana", "sjs", "nsh", "min", "stl", "lak", "dal", "wpg", "chi", "ari", "cgy", "van", "vgk", "col"]
    },
    "Robert": {
        eastern: ["pit", "wsh", "bos", "nyr", "cbj", "mtl", "ott", "phi", "det", "tor", "nyi", "njd", "fla", "car", "tbl", "buf"],
        western: ["ana", "nsh", "chi", "min", "stl", "edm", "sjs", "cgy", "vgk", "lak", "ari", "col", "dal", "wpg", "van"]
    },
    "Fredrik S": {
        eastern: ["wsh", "nyr", "cbj", "pit", "bos", "mtl", "ott", "tor", "car", "det", "phi", "nyi", "tbl", "njd", "fla", "buf"],
        western: ["chi", "ana", "cgy", "min", "sjs", "stl", "edm", "nsh", "lak", "dal", "van", "vgk", "col", "wpg", "ari"]
    }
};

function generateEasternTable() {
    var headerHTML = "";
    for (var i = 0; i < persons.length; i++) {
        var person = persons[i];
        headerHTML += "\t<th>" + person + "</th>\n";
    }
    document.getElementById('eastern-table-header').innerHTML = headerHTML;

    var bodyHTML = "";
    for (var j = 0; j < 16; j++) {
        var rowHTML = "\t<tr>\n";
        for (var i = 0; i < persons.length; i++) {
            var person = persons[i];
            var pick = picks[person].eastern[j];
            rowHTML += '\t\t<td><div class="sprite-nhl sprite-' + pick + '"><span style="padding-left: 20">' + pick.toUpperCase() + '</span></div></td>\n';
        }
        rowHTML += "\t</tr>\n";
        bodyHTML += rowHTML;
    }
    document.getElementById('eastern-table-body').innerHTML = bodyHTML;
}

function generateWesternTable() {
    var headerHTML = "";
    for (var i = 0; i < persons.length; i++) {
        var person = persons[i];
        headerHTML += "\t<th>" + person + "</th>\n";
    }
    document.getElementById('western-table-header').innerHTML = headerHTML;

    var bodyHTML = "";
    for (var j = 0; j < 15; j++) {
        var rowHTML = "\t<tr>\n";
        for (var i = 0; i < persons.length; i++) {
            var person = persons[i];
            var pick = picks[person].western[j];
            rowHTML += '\t\t<td><div class="sprite-nhl sprite-' + pick + '"><span style="padding-left: 20">' + pick.toUpperCase() + '</span></div></td>\n';
        }
        rowHTML += "\t</tr>\n";
        bodyHTML += rowHTML;
    }
    document.getElementById('western-table-body').innerHTML = bodyHTML;
}
