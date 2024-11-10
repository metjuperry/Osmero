const cardsData = [
    {
        "CardNumber": 1,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Azure",
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 2,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "Azure",
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 3,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 4;
        }
    },
    {
        "CardNumber": 4,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Pineapple",
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 5,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 2;
        }
    },
    {
        "CardNumber": 6,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 7,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "GoatHead",
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 8,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 9,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 5;
        }
    },
    {
        "CardNumber": 10,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length * 3;
        }
    },
    {
        "CardNumber": 11,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length * 2;
        },
    },
    {
        "CardNumber": 12,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": true,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 13,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 2;
        }
    },
    {
        "CardNumber": 14,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length * 2;
        }
    },
    {
        "CardNumber": 15,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).GoatHead * 2;
        }
    },
    {
        "CardNumber": 16,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).GoatHead * 2;
        }
    },
    {
        "CardNumber": 17,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {
            "GoatHead": 2
        },
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 3;
        }
    },
    {
        "CardNumber": 18,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getGroupOfFourCardColorsCount(playedCards) * 10;
        }
    },
    {
        "CardNumber": 19,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Pineapple * 2;
        }
    },
    {
        "CardNumber": 20,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "Azure": 1
        },
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length * 2;
        }
    },
    {
        "CardNumber": 21,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Azure": 2
        }, GetPoints: function (playedCards) {
            return 8;
        }
    },
    {
        "CardNumber": 22,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length;
        }
    },
    {
        "CardNumber": 23,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Azure",
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getGroupOfFourCardColorsCount(playedCards) * 10;
        }
    },
    {
        "CardNumber": 24,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {


            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length * 2;
        }
    },
    {
        "CardNumber": 25,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.CardColor === CardColor.Yellow || card.CardColor === CardColor.Green).length;
        }
    },
    {
        "CardNumber": 26,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Pineapple * 3;
        }
    },
    {
        "CardNumber": 27,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Yellow, CardColor.Blue
                ]).length;
        }
    },
    {
        "CardNumber": 28,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).GoatHead * 3;
        }
    },
    {
        "CardNumber": 29,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Pineapple * 2;
        }
    },
    {
        "CardNumber": 30,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 2;
        }
    },
    {
        "CardNumber": 31,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.CardColor === CardColor.Yellow || card.CardColor === CardColor.Red).length;
        }
    },
    {
        "CardNumber": 32,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "GoatHead",
            "Azure"
        ],
        "PointCost": {
            "Azure": 3
        },
        GetPoints: function (playedCards) {


            return 7;
        }
    },
    {
        "CardNumber": 33,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Yellow,
        "HasMap": true,
        "Produces": [],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Pineapple * 3;
        }
    },
    {
        "CardNumber": 34,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {
            "Azure": 2
        },
        GetPoints: function (playedCards) {


            return getResourcePool(playedCards).GoatHead * 3;
        }
    },
    {
        "CardNumber": 35,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getGroupOfFourCardColorsCount(playedCards) * 10;
        }
    },
    {
        "CardNumber": 36,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "GoatHead": 2
        },
        GetPoints: function (playedCards) {


            return getResourcePool(playedCards).Pineapple * 4;
        }
    },
    {
        "CardNumber": 37,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Pineapple": 1
        },
        GetPoints: function (playedCards) {


            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length * 3;
        },
    },
    {
        "CardNumber": 38,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {
            "Pineapple": 1,
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {


            return playedCards.filter(card => card.HasMap) * 3;
        }
    },
    {
        "CardNumber": 39,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Azure",
            "Pineapple"
        ],
        "PointCost": {
            "GoatHead": 2
        },
        GetPoints: function (playedCards) {


            return 9;
        }
    },
    {
        "CardNumber": 40,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Pineapple": 1,
            "Azure": 1,
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {


            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length * 3;
        }
    },
    {
        "CardNumber": 41,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {
            "Azure": 2,
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length * 4;
        }
    },
    {
        "CardNumber": 42,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Azure": 1,
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Yellow, CardColor.Green
                ]).length * 2;
        }
    },
    {
        "CardNumber": 43,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getGroupOfFourCardColorsCount(playedCards) * 10;
        }
    },
    {
        "CardNumber": 44,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Pineapple": 1,
            "Azure": 1
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Yellow, CardColor.Blue
                ]).length * 2;
        }
    },
    {
        "CardNumber": 45,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {
            "GoatHead": 3
        },
        GetPoints: function (playedCards) {
            return 13;
        }
    },
    {
        "CardNumber": 46,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "Azure": 2,
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {
            return 10;
        }
    },
    {
        "CardNumber": 47,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Pineapple": 1,
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Yellow, CardColor.Red
                ]).length * 2;
        }
    },
    {
        "CardNumber": 48,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 3;
        }
    },
    {
        "CardNumber": 49,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "Azure": 2,
            "Pineapple": 1
        },
        GetPoints: function (playedCards) {
            return 12;
        }
    },
    {
        "CardNumber": 50,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {
            "Pineapple": 2
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Green
                ]).length * 4;
        }
    },
    {
        "CardNumber": 51,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {
            "Azure": 4
        },
        GetPoints: function (playedCards) {
            return 14;
        }
    },
    {
        "CardNumber": 52,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Azure": 3,
        },
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).GoatHead * 4;
        }
    },
    {
        "CardNumber": 53,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {
            "Pineapple": 2,
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Red
                ]).length * 4;
        }
    },
    {
        "CardNumber": 54,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {
            "Pineapple": 2,
        },
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length * 4;
        }
    },
    {
        "CardNumber": 55,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [
            "Azure"
        ],
        "PointCost": {
            "GoatHead": 1,
            "Pineapple": 2,
        },
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 3;
        }
    },
    {
        "CardNumber": 56,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {
            "GoatHead": 2,
            "Azure": 1,
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Blue
                ]).length * 4;
        }
    },
    {
        "CardNumber": 57,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Pineapple": 3,
        },
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 4;
        }
    },
    {
        "CardNumber": 58,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "GoatHead": 3,
        },
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length * 3;
        }
    },
    {
        "CardNumber": 59,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "GoatHead": 3,
            "Azure": 1
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Yellow, CardColor.Red
                ]).length * 3;
        }
    },
    {
        "CardNumber": 60,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "GoatHead": 2,
            "Azure": 2
        },
        GetPoints: function (playedCards) {
            return 16;
        }
    },
    {
        "CardNumber": 61,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {
            "GoatHead": 4
        },
        GetPoints: function (playedCards) {
            return 17;
        }
    },
    {
        "CardNumber": 62,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "Pineapple": 3,
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Yellow, CardColor.Blue
                ]) * 3;
        }
    },
    {
        "CardNumber": 63,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "GoatHead": 2,
            "Pineapple": 1
        },
        GetPoints: function (playedCards) {
            return 15;
        }
    },
    {
        "CardNumber": 64,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "Azure": 2,
            "Pineapple": 2
        },
        GetPoints: function (playedCards) {
            return 18;
        }
    },
    {
        "CardNumber": 65,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "Pineapple": 3
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards,
                [CardColor.Yellow, CardColor.Green
                ]) * 3;
        }
    },
    {
        "CardNumber": 66,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Azure": 4
        },
        GetPoints: function (playedCards) {
            return 20;
        }
    },
    {
        "CardNumber": 67,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [],
        "PointCost": {
            "GoatHead": 2,
            "Pineapple": 2
        },
        GetPoints: function (playedCards) {
            return 19;
        }
    },
    {
        "CardNumber": 68,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [],
        "PointCost": {
            "Azure": 5
        },
        GetPoints: function (playedCards) {
            return 24;
        }
    }
]