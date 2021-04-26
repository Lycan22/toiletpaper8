const dbNr = 10;
const dbVars = [
    {
        ident: "WCC1 BOOL Bit OSF",
        type: "BOOL",
        start: 0,
        bit: 0
    },
    {
        ident: "WCC1 BOOL Bit MAN",
        type: "BOOL",
        start: 0,
        bit: 6
    },
    {
        ident: "WCC1 BOOL Bit REM",
        type: "BOOL",
        start: 0,
        bit: 7
    },
     {
         ident: "WCC1 BOOL Bit NIS",
         type: "BOOL",
         start: 1,
         bit: 1
     },
     {
         ident: "WCC1 BOOL Bit FLT",
         type: "BOOL",
         start: 1,
         bit: 2
     },
     {
         ident: "WCC1 BOOL Bit MTA",
         type: "BOOL",
         start: 1,
         bit: 4
     },
     {
         ident: "WCC1 BOOL Bit FTR",
         type: "BOOL",
         start: 1,
         bit: 6
     },
     {
         ident: "WCC1 BOOL Bit FTS",
         type: "BOOL",
         start: 1,
         bit: 7
     },
     {
         ident: "WCC1 BOOL Bit PWF",
         type: "BOOL",
         start: 3,
         bit: 1
     },
     {
         ident: "WCC1 BOOL Bit SPA01",
         type: "BOOL",
         start: 3,
         bit: 3
     },

     {
         ident: "WCC2 BOOL Bit OSF",
         type: "BOOL",
         start: 4,
         bit: 0
     },
     {
         ident: "WCC2 BOOL Bit MAN",
         type: "BOOL",
         start: 4,
         bit: 6
     },
     {
         ident: "WCC2 BOOL Bit REM",
         type: "BOOL",
         start: 4,
         bit: 7
     },
     {
         ident: "WCC2 BOOL Bit NIS",
         type: "BOOL",
         start: 5,
         bit: 1
     },
     {
         ident: "WCC2 BOOL Bit FLT",
         type: "BOOL",
         start: 5,
         bit: 2
     },
     {
         ident: "WCC2 BOOL Bit MTA",
         type: "BOOL",
         start: 5,
         bit: 4
     },
     {
         ident: "WCC2 BOOL Bit FTR",
         type: "BOOL",
         start: 5,
         bit: 6
     },
     {
         ident: "WCC2 BOOL Bit FTS",
         type: "BOOL",
         start: 5,
         bit: 7
     },
     {
         ident: "WCC2 BOOL Bit PWF",
         type: "BOOL",
         start: 7,
         bit: 1
     },
     {
         ident: "WCC2 BOOL Bit SPA01",
         type: "BOOL",
         start: 7,
         bit: 3
     },

     {
         ident: "WCC3 BOOL Bit OSF",
         type: "BOOL",
         start: 8,
         bit: 0
     },
     {
         ident: "WCC3 BOOL Bit MAN",
         type: "BOOL",
         start: 8,
         bit: 6
     },
     {
         ident: "WCC3 BOOL Bit REM",
         type: "BOOL",
         start: 8,
         bit: 7
     },
     {
         ident: "WCC3 BOOL Bit NIS",
         type: "BOOL",
         start: 9,
         bit: 1
     },
     {
         ident: "WCC3 BOOL Bit FLT",
         type: "BOOL",
         start: 9,
         bit: 2
     },
     {
         ident: "WCC3 BOOL Bit MTA",
         type: "BOOL",
         start: 9,
         bit: 4
     },
     {
         ident: "WCC3 BOOL Bit FTR",
         type: "BOOL",
         start: 9,
         bit: 6
     },
     {
         ident: "WCC3 BOOL Bit FTS",
         type: "BOOL",
         start: 9,
         bit: 7
     },
     {
         ident: "WCC3 BOOL Bit PWF",
         type: "BOOL",
         start: 11,
         bit: 1
     },
     {
         ident: "WCC3 BOOL Bit SPA01",
         type: "BOOL",
         start: 11,
         bit: 3
     },

     {
         ident: "WCC4 BOOL Bit OSF",
         type: "BOOL",
         start: 12,
         bit: 0
     },
     {
         ident: "WCC4 BOOL Bit MAN",
         type: "BOOL",
         start: 12,
         bit: 6
     },
     {
         ident: "WCC4 BOOL Bit REM",
         type: "BOOL",
         start: 12,
         bit: 7
     },
     {
         ident: "WCC4 BOOL Bit NIS",
         type: "BOOL",
         start: 13,
         bit: 1
     },
     {
         ident: "WCC4 BOOL Bit FLT",
         type: "BOOL",
         start: 13,
         bit: 2
     },
     {
         ident: "WCC4 BOOL Bit MTA",
         type: "BOOL",
         start: 13,
         bit: 4
     },
     {
         ident: "WCC4 BOOL Bit FTR",
         type: "BOOL",
         start: 13,
         bit: 6
     },
     {
         ident: "WCC4 BOOL Bit FTS",
         type: "BOOL",
         start: 13,
         bit: 7
     },
     {
         ident: "WCC4 BOOL Bit PWF",
         type: "BOOL",
         start: 15,
         bit: 1
     },
     {
         ident: "WCC4 BOOL Bit SPA01",
         type: "BOOL",
         start: 15,
         bit: 3
     },

    {
        ident: "HRC1 BOOL Bit OSF",
        type: "BOOL",
        start: 16,
        bit: 0
    },
    {
        ident: "HRC1 BOOL Bit MAN",
        type: "BOOL",
        start: 16,
        bit: 6
    },
    {
        ident: "HRC1 BOOL Bit REM",
        type: "BOOL",
        start: 16,
        bit: 7
    },
    {
        ident: "HRC1 BOOL Bit NIS",
        type: "BOOL",
        start: 17,
        bit: 1
    },
    {
        ident: "HRC1 BOOL Bit FLT",
        type: "BOOL",
        start: 17,
        bit: 2
    },
    {
        ident: "HRC1 BOOL Bit MTA",
        type: "BOOL",
        start: 17,
        bit: 4
    },
    {
        ident: "HRC1 BOOL Bit FTR",
        type: "BOOL",
        start: 17,
        bit: 6
    },
    {
        ident: "HRC1 BOOL Bit FTS",
        type: "BOOL",
        start: 17,
        bit: 7
    },
    {
        ident: "HRC1 BOOL Bit PWF",
        type: "BOOL",
        start: 19,
        bit: 1
    },
    {
        ident: "HRC1 BOOL Bit SPA01",
        type: "BOOL",
        start: 19,
        bit: 3
    },

    {
        ident: "CHWP1 BOOL Bit OSF",
        type: "BOOL",
        start: 20,
        bit: 0
    },
    {
        ident: "CHWP1 BOOL Bit OSH",
        type: "BOOL",
        start: 20,
        bit: 1
    },
    {
        ident: "CHWP1 BOOL Bit OSL",
        type: "BOOL",
        start: 20,
        bit: 2
    },
    {
        ident: "CHWP1 BOOL Bit MAN",
        type: "BOOL",
        start: 20,
        bit: 6
    },
    {
        ident: "CHWP1 BOOL Bit REM",
        type: "BOOL",
        start: 20,
        bit: 7
    },
    {
        ident: "CHWP1 BOOL Bit NIS",
        type: "BOOL",
        start: 21,
        bit: 1
    },
    {
        ident: "CHWP1 BOOL Bit FLT",
        type: "BOOL",
        start: 21,
        bit: 2
    },
    {
        ident: "CHWP1 BOOL Bit MTA",
        type: "BOOL",
        start: 21,
        bit: 4
    },
    {
        ident: "CHWP1 BOOL Bit FTR",
        type: "BOOL",
        start: 21,
        bit: 6
    },
    {
        ident: "CHWP1 BOOL Bit FTS",
        type: "BOOL",
        start: 21,
        bit: 7
    },
    {
        ident: "CHWP1 BOOL Bit VSF",
        type: "BOOL",
        start: 23,
        bit: 0
    },
    {
        ident: "CHWP1 BOOL Bit PWF",
        type: "BOOL",
        start: 23,
        bit: 1
    },
    {
        ident: "CHWP1 BOOL Bit SPA01",
        type: "BOOL",
        start: 23,
        bit: 3
    },

    {
        ident: "CHWP2 BOOL Bit OSF",
        type: "BOOL",
        start: 24,
        bit: 0
    },
    {
        ident: "CHWP2 BOOL Bit OSH",
        type: "BOOL",
        start: 24,
        bit: 1
    },
    {
        ident: "CHWP2 BOOL Bit OSL",
        type: "BOOL",
        start: 24,
        bit: 2
    },
    {
        ident: "CHWP2 BOOL Bit MAN",
        type: "BOOL",
        start: 24,
        bit: 6
    },
    {
        ident: "CHWP2 BOOL Bit REM",
        type: "BOOL",
        start: 24,
        bit: 7
    },
    {
        ident: "CHWP2 BOOL Bit NIS",
        type: "BOOL",
        start: 25,
        bit: 1
    },
    {
        ident: "CHWP2 BOOL Bit FLT",
        type: "BOOL",
        start: 25,
        bit: 2
    },
    {
        ident: "CHWP2 BOOL Bit MTA",
        type: "BOOL",
        start: 25,
        bit: 4
    },
    {
        ident: "CHWP2 BOOL Bit FTR",
        type: "BOOL",
        start: 25,
        bit: 6
    },
    {
        ident: "CHWP2 BOOL Bit FTS",
        type: "BOOL",
        start: 25,
        bit: 7
    },
    {
        ident: "CHWP2 BOOL Bit VSF",
        type: "BOOL",
        start: 27,
        bit: 0
    },
    {
        ident: "CHWP2 BOOL Bit PWF",
        type: "BOOL",
        start: 27,
        bit: 1
    },
    {
        ident: "CHWP2 BOOL Bit SPA01",
        type: "BOOL",
        start: 27,
        bit: 3
    },

    {
        ident: "CHWP3 BOOL Bit OSF",
        type: "BOOL",
        start: 28,
        bit: 0
    },
    {
        ident: "CHWP3 BOOL Bit OSH",
        type: "BOOL",
        start: 28,
        bit: 1
    },
    {
        ident: "CHWP3 BOOL Bit OSL",
        type: "BOOL",
        start: 28,
        bit: 2
    },
    {
        ident: "CHWP3 BOOL Bit MAN",
        type: "BOOL",
        start: 28,
        bit: 6
    },
    {
        ident: "CHWP3 BOOL Bit REM",
        type: "BOOL",
        start: 28,
        bit: 7
    },
    {
        ident: "CHWP3 BOOL Bit NIS",
        type: "BOOL",
        start: 29,
        bit: 1
    },
    {
        ident: "CHWP3 BOOL Bit FLT",
        type: "BOOL",
        start: 29,
        bit: 2
    },
    {
        ident: "CHWP3 BOOL Bit MTA",
        type: "BOOL",
        start: 29,
        bit: 4
    },
    {
        ident: "CHWP3 BOOL Bit FTR",
        type: "BOOL",
        start: 29,
        bit: 6
    },
    {
        ident: "CHWP3 BOOL Bit FTS",
        type: "BOOL",
        start: 29,
        bit: 7
    },
    {
        ident: "CHWP3 BOOL Bit VSF",
        type: "BOOL",
        start: 31,
        bit: 0
    },
    {
        ident: "CHWP3 BOOL Bit PWF",
        type: "BOOL",
        start: 31,
        bit: 1
    },
    {
        ident: "CHWP3 BOOL Bit SPA01",
        type: "BOOL",
        start: 31,
        bit: 3
    },

    {
        ident: "CHWP4 BOOL Bit OSF",
        type: "BOOL",
        start: 32,
        bit: 0
    },
    {
        ident: "CHWP4 BOOL Bit OSH",
        type: "BOOL",
        start: 32,
        bit: 1
    },
    {
        ident: "CHWP4 BOOL Bit OSL",
        type: "BOOL",
        start: 32,
        bit: 2
    },
    {
        ident: "CHWP4 BOOL Bit MAN",
        type: "BOOL",
        start: 32,
        bit: 6
    },
    {
        ident: "CHWP4 BOOL Bit REM",
        type: "BOOL",
        start: 32,
        bit: 7
    },
    {
        ident: "CHWP4 BOOL Bit NIS",
        type: "BOOL",
        start: 33,
        bit: 1
    },
    {
        ident: "CHWP4 BOOL Bit FLT",
        type: "BOOL",
        start: 33,
        bit: 2
    },
    {
        ident: "CHWP4 BOOL Bit MTA",
        type: "BOOL",
        start: 33,
        bit: 4
    },
    {
        ident: "CHWP4 BOOL Bit FTR",
        type: "BOOL",
        start: 33,
        bit: 6
    },
    {
        ident: "CHWP4 BOOL Bit FTS",
        type: "BOOL",
        start: 33,
        bit: 7
    },
    {
        ident: "CHWP4 BOOL Bit VSF",
        type: "BOOL",
        start: 35,
        bit: 0
    },
    {
        ident: "CHWP4 BOOL Bit PWF",
        type: "BOOL",
        start: 35,
        bit: 1
    },
    {
        ident: "CHWP4 BOOL Bit SPA01",
        type: "BOOL",
        start: 35,
        bit: 3
    },

    {
        ident: "CHWP5 BOOL Bit OSF",
        type: "BOOL",
        start: 36,
        bit: 0
    },
    {
        ident: "CHWP5 BOOL Bit OSH",
        type: "BOOL",
        start: 36,
        bit: 1
    },
    {
        ident: "CHWP5 BOOL Bit OSL",
        type: "BOOL",
        start: 36,
        bit: 2
    },
    {
        ident: "CHWP5 BOOL Bit MAN",
        type: "BOOL",
        start: 36,
        bit: 6
    },
    {
        ident: "CHWP5 BOOL Bit REM",
        type: "BOOL",
        start: 36,
        bit: 7
    },
    {
        ident: "CHWP5 BOOL Bit NIS",
        type: "BOOL",
        start: 37,
        bit: 1
    },
    {
        ident: "CHWP5 BOOL Bit FLT",
        type: "BOOL",
        start: 37,
        bit: 2
    },
    {
        ident: "CHWP5 BOOL Bit MTA",
        type: "BOOL",
        start: 37,
        bit: 4
    },
    {
        ident: "CHWP5 BOOL Bit FTR",
        type: "BOOL",
        start: 37,
        bit: 6
    },
    {
        ident: "CHWP5 BOOL Bit FTS",
        type: "BOOL",
        start: 37,
        bit: 7
    },
    {
        ident: "CHWP5 BOOL Bit VSF",
        type: "BOOL",
        start: 39,
        bit: 0
    },
    {
        ident: "CHWP5 BOOL Bit PWF",
        type: "BOOL",
        start: 39,
        bit: 1
    },
    {
        ident: "CHWP5 BOOL Bit SPA01",
        type: "BOOL",
        start: 39,
        bit: 3
    },

    {
        ident: "CHWP6 BOOL Bit OSF",
        type: "BOOL",
        start: 40,
        bit: 0
    },
    {
        ident: "CHWP6 BOOL Bit OSH",
        type: "BOOL",
        start: 40,
        bit: 1
    },
    {
        ident: "CHWP6 BOOL Bit OSL",
        type: "BOOL",
        start: 40,
        bit: 2
    },
    {
        ident: "CHWP6 BOOL Bit MAN",
        type: "BOOL",
        start: 40,
        bit: 6
    },
    {
        ident: "CHWP6 BOOL Bit REM",
        type: "BOOL",
        start: 40,
        bit: 7
    },
    {
        ident: "CHWP6 BOOL Bit NIS",
        type: "BOOL",
        start: 41,
        bit: 1
    },
    {
        ident: "CHWP6 BOOL Bit FLT",
        type: "BOOL",
        start: 41,
        bit: 2
    },
    {
        ident: "CHWP6 BOOL Bit MTA",
        type: "BOOL",
        start: 41,
        bit: 4
    },
    {
        ident: "CHWP6 BOOL Bit FTR",
        type: "BOOL",
        start: 41,
        bit: 6
    },
    {
        ident: "CHWP6 BOOL Bit FTS",
        type: "BOOL",
        start: 41,
        bit: 7
    },
    {
        ident: "CHWP6 BOOL Bit VSF",
        type: "BOOL",
        start: 43,
        bit: 0
    },
    {
        ident: "CHWP6 BOOL Bit PWF",
        type: "BOOL",
        start: 43,
        bit: 1
    },
    {
        ident: "CHWP6 BOOL Bit SPA01",
        type: "BOOL",
        start: 43,
        bit: 3
    },

    {
        ident: "CHWP7 BOOL Bit OSF",
        type: "BOOL",
        start: 44,
        bit: 0
    },
    {
        ident: "CHWP7 BOOL Bit OSH",
        type: "BOOL",
        start: 44,
        bit: 1
    },
    {
        ident: "CHWP7 BOOL Bit OSL",
        type: "BOOL",
        start: 44,
        bit: 2
    },
    {
        ident: "CHWP7 BOOL Bit MAN",
        type: "BOOL",
        start: 44,
        bit: 6
    },
    {
        ident: "CHWP7 BOOL Bit REM",
        type: "BOOL",
        start: 44,
        bit: 7
    },
    {
        ident: "CHWP7 BOOL Bit NIS",
        type: "BOOL",
        start: 45,
        bit: 1
    },
    {
        ident: "CHWP7 BOOL Bit FLT",
        type: "BOOL",
        start: 45,
        bit: 2
    },
    {
        ident: "CHWP7 BOOL Bit MTA",
        type: "BOOL",
        start: 45,
        bit: 4
    },
    {
        ident: "CHWP7 BOOL Bit FTR",
        type: "BOOL",
        start: 45,
        bit: 6
    },
    {
        ident: "CHWP7 BOOL Bit FTS",
        type: "BOOL",
        start: 45,
        bit: 7
    },
    {
        ident: "CHWP7 BOOL Bit VSF",
        type: "BOOL",
        start: 47,
        bit: 0
    },
    {
        ident: "CHWP7 BOOL Bit PWF",
        type: "BOOL",
        start: 47,
        bit: 1
    },
    {
        ident: "CHWP7 BOOL Bit SPA01",
        type: "BOOL",
        start: 47,
        bit: 3
    },

    {
        ident: "CHWP8 BOOL Bit OSF",
        type: "BOOL",
        start: 48,
        bit: 0
    },
    {
        ident: "CHWP8 BOOL Bit OSH",
        type: "BOOL",
        start: 48,
        bit: 1
    },
    {
        ident: "CHWP8 BOOL Bit OSL",
        type: "BOOL",
        start: 48,
        bit: 2
    },
    {
        ident: "CHWP8 BOOL Bit MAN",
        type: "BOOL",
        start: 48,
        bit: 6
    },
    {
        ident: "CHWP8 BOOL Bit REM",
        type: "BOOL",
        start: 48,
        bit: 7
    },
    {
        ident: "CHWP8 BOOL Bit NIS",
        type: "BOOL",
        start: 49,
        bit: 1
    },
    {
        ident: "CHWP8 BOOL Bit FLT",
        type: "BOOL",
        start: 49,
        bit: 2
    },
    {
        ident: "CHWP8 BOOL Bit MTA",
        type: "BOOL",
        start: 49,
        bit: 4
    },
    {
        ident: "CHWP8 BOOL Bit FTR",
        type: "BOOL",
        start: 49,
        bit: 6
    },
    {
        ident: "CHWP8 BOOL Bit FTS",
        type: "BOOL",
        start: 49,
        bit: 7
    },
    {
        ident: "CHWP8 BOOL Bit VSF",
        type: "BOOL",
        start: 51,
        bit: 0
    },
    {
        ident: "CHWP8 BOOL Bit PWF",
        type: "BOOL",
        start: 51,
        bit: 1
    },
    {
        ident: "CHWP8 BOOL Bit SPA01",
        type: "BOOL",
        start: 51,
        bit: 3
    },

    {
        ident: "CHWP9 BOOL Bit OSF",
        type: "BOOL",
        start: 52,
        bit: 0
    },
    {
        ident: "CHWP9 BOOL Bit OSH",
        type: "BOOL",
        start: 52,
        bit: 1
    },
    {
        ident: "CHWP9 BOOL Bit OSL",
        type: "BOOL",
        start: 52,
        bit: 2
    },
    {
        ident: "CHWP9 BOOL Bit MAN",
        type: "BOOL",
        start: 52,
        bit: 6
    },
    {
        ident: "CHWP9 BOOL Bit REM",
        type: "BOOL",
        start: 52,
        bit: 7
    },
    {
        ident: "CHWP9 BOOL Bit NIS",
        type: "BOOL",
        start: 53,
        bit: 1
    },
    {
        ident: "CHWP9 BOOL Bit FLT",
        type: "BOOL",
        start: 53,
        bit: 2
    },
    {
        ident: "CHWP9 BOOL Bit MTA",
        type: "BOOL",
        start: 53,
        bit: 4
    },
    {
        ident: "CHWP9 BOOL Bit FTR",
        type: "BOOL",
        start: 53,
        bit: 6
    },
    {
        ident: "CHWP9 BOOL Bit FTS",
        type: "BOOL",
        start: 53,
        bit: 7
    },
    {
        ident: "CHWP9 BOOL Bit VSF",
        type: "BOOL",
        start: 55,
        bit: 0
    },
    {
        ident: "CHWP9 BOOL Bit PWF",
        type: "BOOL",
        start: 55,
        bit: 1
    },
    {
        ident: "CHWP9 BOOL Bit SPA01",
        type: "BOOL",
        start: 55,
        bit: 3
    },

    {
        ident: "CHWP10 BOOL Bit OSF",
        type: "BOOL",
        start: 56,
        bit: 0
    },
    {
        ident: "CHWP10 BOOL Bit OSH",
        type: "BOOL",
        start: 56,
        bit: 1
    },
    {
        ident: "CHWP10 BOOL Bit OSL",
        type: "BOOL",
        start: 56,
        bit: 2
    },
    {
        ident: "CHWP10 BOOL Bit MAN",
        type: "BOOL",
        start: 56,
        bit: 6
    },
    {
        ident: "CHWP10 BOOL Bit REM",
        type: "BOOL",
        start: 56,
        bit: 7
    },
    {
        ident: "CHWP10 BOOL Bit NIS",
        type: "BOOL",
        start: 57,
        bit: 1
    },
    {
        ident: "CHWP10 BOOL Bit FLT",
        type: "BOOL",
        start: 57,
        bit: 2
    },
    {
        ident: "CHWP10 BOOL Bit MTA",
        type: "BOOL",
        start: 57,
        bit: 4
    },
    {
        ident: "CHWP10 BOOL Bit FTR",
        type: "BOOL",
        start: 57,
        bit: 6
    },
    {
        ident: "CHWP10 BOOL Bit FTS",
        type: "BOOL",
        start: 57,
        bit: 7
    },
    {
        ident: "CHWP10 BOOL Bit VSF",
        type: "BOOL",
        start: 59,
        bit: 0
    },
    {
        ident: "CHWP10 BOOL Bit PWF",
        type: "BOOL",
        start: 59,
        bit: 1
    },
    {
        ident: "CHWP10 BOOL Bit SPA01",
        type: "BOOL",
        start: 59,
        bit: 3
    },

    {
        ident: "CHWP11 BOOL Bit OSF",
        type: "BOOL",
        start: 60,
        bit: 0
    },
    {
        ident: "CHWP11 BOOL Bit OSH",
        type: "BOOL",
        start: 60,
        bit: 1
    },
    {
        ident: "CHWP11 BOOL Bit OSL",
        type: "BOOL",
        start: 60,
        bit: 2
    },
    {
        ident: "CHWP11 BOOL Bit MAN",
        type: "BOOL",
        start: 60,
        bit: 6
    },
    {
        ident: "CHWP11 BOOL Bit REM",
        type: "BOOL",
        start: 60,
        bit: 7
    },
    {
        ident: "CHWP11 BOOL Bit NIS",
        type: "BOOL",
        start: 61,
        bit: 1
    },
    {
        ident: "CHWP11 BOOL Bit FLT",
        type: "BOOL",
        start: 61,
        bit: 2
    },
    {
        ident: "CHWP11 BOOL Bit MTA",
        type: "BOOL",
        start: 61,
        bit: 4
    },
    {
        ident: "CHWP11 BOOL Bit FTR",
        type: "BOOL",
        start: 61,
        bit: 6
    },
    {
        ident: "CHWP11 BOOL Bit FTS",
        type: "BOOL",
        start: 61,
        bit: 7
    },
    {
        ident: "CHWP11 BOOL Bit VSF",
        type: "BOOL",
        start: 63,
        bit: 0
    },
    {
        ident: "CHWP11 BOOL Bit PWF",
        type: "BOOL",
        start: 63,
        bit: 1
    },
    {
        ident: "CHWP11 BOOL Bit SPA01",
        type: "BOOL",
        start: 63,
        bit: 3
    },

    {
        ident: "CHWP12 BOOL Bit OSF",
        type: "BOOL",
        start: 64,
        bit: 0
    },
    {
        ident: "CHWP12 BOOL Bit OSH",
        type: "BOOL",
        start: 64,
        bit: 1
    },
    {
        ident: "CHWP12 BOOL Bit OSL",
        type: "BOOL",
        start: 64,
        bit: 2
    },
    {
        ident: "CHWP12 BOOL Bit MAN",
        type: "BOOL",
        start: 64,
        bit: 6
    },
    {
        ident: "CHWP12 BOOL Bit REM",
        type: "BOOL",
        start: 64,
        bit: 7
    },
    {
        ident: "CHWP12 BOOL Bit NIS",
        type: "BOOL",
        start: 65,
        bit: 1
    },
    {
        ident: "CHWP12 BOOL Bit FLT",
        type: "BOOL",
        start: 65,
        bit: 2
    },
    {
        ident: "CHWP12 BOOL Bit MTA",
        type: "BOOL",
        start: 65,
        bit: 4
    },
    {
        ident: "CHWP12 BOOL Bit FTR",
        type: "BOOL",
        start: 65,
        bit: 6
    },
    {
        ident: "CHWP12 BOOL Bit FTS",
        type: "BOOL",
        start: 65,
        bit: 7
    },
    {
        ident: "CHWP12 BOOL Bit VSF",
        type: "BOOL",
        start: 67,
        bit: 0
    },
    {
        ident: "CHWP12 BOOL Bit PWF",
        type: "BOOL",
        start: 67,
        bit: 1
    },
    {
        ident: "CHWP12 BOOL Bit SPA01",
        type: "BOOL",
        start: 67,
        bit: 3
    },

    {
        ident: "CHWP13 BOOL Bit OSF",
        type: "BOOL",
        start: 68,
        bit: 0
    },
    {
        ident: "CHWP13 BOOL Bit OSH",
        type: "BOOL",
        start: 68,
        bit: 1
    },
    {
        ident: "CHWP13 BOOL Bit OSL",
        type: "BOOL",
        start: 68,
        bit: 2
    },
    {
        ident: "CHWP13 BOOL Bit MAN",
        type: "BOOL",
        start: 68,
        bit: 6
    },
    {
        ident: "CHWP13 BOOL Bit REM",
        type: "BOOL",
        start: 68,
        bit: 7
    },
    {
        ident: "CHWP13 BOOL Bit NIS",
        type: "BOOL",
        start: 69,
        bit: 1
    },
    {
        ident: "CHWP13 BOOL Bit FLT",
        type: "BOOL",
        start: 69,
        bit: 2
    },
    {
        ident: "CHWP13 BOOL Bit MTA",
        type: "BOOL",
        start: 69,
        bit: 4
    },
    {
        ident: "CHWP13 BOOL Bit FTR",
        type: "BOOL",
        start: 69,
        bit: 6
    },
    {
        ident: "CHWP13 BOOL Bit FTS",
        type: "BOOL",
        start: 69,
        bit: 7
    },
    {
        ident: "CHWP13 BOOL Bit VSF",
        type: "BOOL",
        start: 71,
        bit: 0
    },
    {
        ident: "CHWP13 BOOL Bit PWF",
        type: "BOOL",
        start: 71,
        bit: 1
    },
    {
        ident: "CHWP13 BOOL Bit SPA01",
        type: "BOOL",
        start: 71,
        bit: 3
    },

    {
        ident: "CHWP14 BOOL Bit OSF",
        type: "BOOL",
        start: 72,
        bit: 0
    },
    {
        ident: "CHWP14 BOOL Bit OSH",
        type: "BOOL",
        start: 72,
        bit: 1
    },
    {
        ident: "CHWP14 BOOL Bit OSL",
        type: "BOOL",
        start: 72,
        bit: 2
    },
    {
        ident: "CHWP14 BOOL Bit MAN",
        type: "BOOL",
        start: 72,
        bit: 6
    },
    {
        ident: "CHWP14 BOOL Bit REM",
        type: "BOOL",
        start: 72,
        bit: 7
    },
    {
        ident: "CHWP14 BOOL Bit NIS",
        type: "BOOL",
        start: 73,
        bit: 1
    },
    {
        ident: "CHWP14 BOOL Bit FLT",
        type: "BOOL",
        start: 73,
        bit: 2
    },
    {
        ident: "CHWP14 BOOL Bit MTA",
        type: "BOOL",
        start: 73,
        bit: 4
    },
    {
        ident: "CHWP14 BOOL Bit FTR",
        type: "BOOL",
        start: 73,
        bit: 6
    },
    {
        ident: "CHWP14 BOOL Bit FTS",
        type: "BOOL",
        start: 73,
        bit: 7
    },
    {
        ident: "CHWP14 BOOL Bit VSF",
        type: "BOOL",
        start: 75,
        bit: 0
    },
    {
        ident: "CHWP14 BOOL Bit PWF",
        type: "BOOL",
        start: 75,
        bit: 1
    },
    {
        ident: "CHWP14 BOOL Bit SPA01",
        type: "BOOL",
        start: 75,
        bit: 3
    },
 ];

module.exports.dbVars = dbVars;
module.exports.dbNr = dbNr;
