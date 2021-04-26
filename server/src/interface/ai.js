const dbNr = 16;
const dbVars = [
    {
        ident: "SYS COOLING LOAD",
        type: "CHAR",
        start: 0,
    },
    {
        ident: "SYS COOLING CAP",
        type: "CHAR",
        start: 4,
    },
    {
        ident: "CHI ADD Threshold",
        type: "CHAR",
        start: 8,
    },
    {
        ident: "CHI DROP Threshold",
        type: "CHAR",
        start: 12,
    },
    {
        ident: "MAIN CHW RET DTY",
        type: "CHAR",
        start: 16,
    },
    {
        ident: "MAIN CHW SUP DTY",
        type: "CHAR",
        start: 20,
    },
    {
        ident: "SYS COP",
        type: "CHAR",
        start: 24,
    },
    {
        ident: "HRC B02 801 COP",
        type: "CHAR",
        start: 28,
    },
    {
        ident: "WCC B02 801 COP",
        type: "CHAR",
        start: 32,
    },
    {
        ident: "WCC B02 802 COP",
        type: "CHAR",
        start: 36,
    },
    {
        ident: "WCC B02 803 COP",
        type: "CHAR",
        start: 40,
    },
    {
        ident: "WCC B02 804 COP",
        type: "CHAR",
        start: 44,
    },
    {
        ident: "HRC B02 801 COOLING LOAD",
        type: "CHAR",
        start: 48,
    },
    {
        ident: "WCC B02 801 COOLING LOAD",
        type: "CHAR",
        start: 52,
    },
    {
        ident: "WCC B02 802 COOLING LOAD",
        type: "CHAR",
        start: 56,
    },
    {
        ident: "WCC B02 803 COOLING LOAD",
        type: "CHAR",
        start: 60,
    },
    {
        ident: "WCC B02 804 COOLING LOAD",
        type: "CHAR",
        start: 64,
    },
    {
        ident: "SYS CURRENT",
        type: "CHAR",
        start: 68,
    },
    {
        ident: "SYS CURRENT CAP",
        type: "CHAR",
        start: 72,
    },
    {
        ident: "CHI ADD Threshold Current",
        type: "CHAR",
        start: 76,
    },
    {
        ident: "CHI DROP Threshold Current",
        type: "CHAR",
        start: 80,
    },
    {
        ident: "HRC B02 801 CURRENT",
        type: "CHAR",
        start: 84,
    },
    {
        ident: "WCC B02 801 CURRENT",
        type: "CHAR",
        start: 88,
    },
    {
        ident: "WCC B02 802 CURRENT",
        type: "CHAR",
        start: 92,
    },
    {
        ident: "WCC B02 803 CURRENT",
        type: "CHAR",
        start: 96,
    },
    {
        ident: "WCC B02 804 CURRENT",
        type: "CHAR",
        start: 100,
    },
    {
        ident: "PLANT TOT POWER",
        type: "CHAR",
        start: 104,
    },
    {
        ident: "PLANT TOT ENERGY",
        type: "CHAR",
        start: 108,
    },

];

module.exports.dbVars = dbVars;
module.exports.dbNr = dbNr;
