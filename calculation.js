const CardColor = {
    Red: 'Red',
    Blue: 'Blue',
    Green: 'Green',
    Yellow: 'Yellow'
};

const TypeOfDay = {
    Day: 'Day',
    Night: 'Night'
};


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
        "Produces": [], "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length * 2;
        },
    },
    {
        "CardNumber": 12,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Yellow,
        "HasMap": true,
        "Produces": ["Pineapple"],
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
        "Produces": ["Pineapple"],
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
        "Produces": ["GoatHead"],
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
        "Produces": ["Azure"],
        "PointCost": { "GoatHead": 2 },
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 3;
        }
    },
    {
        "CardNumber": 18,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": ["GoatHead"],
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
        "Produces": ["Pineapple"],
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
        "PointCost": { "Azure": 1 },
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
            return getCardsByColor(playedCards, [CardColor.Yellow, CardColor.Blue]).length;
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
        "Produces": [
        ],
        "PointCost": {
            "Azure": 1,
            "GoatHead": 1
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Yellow, CardColor.Green]).length * 2;
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
            return getCardsByColor(playedCards, [CardColor.Yellow, CardColor.Blue]).length * 2;
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
            return getCardsByColor(playedCards, [CardColor.Yellow, CardColor.Red]).length * 2;
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
            return getCardsByColor(playedCards, [CardColor.Green]).length * 4;
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
            return getCardsByColor(playedCards, [CardColor.Red]).length * 4;
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
            return getCardsByColor(playedCards, [CardColor.Blue]).length * 4;
        }
    },
    {
        "CardNumber": 57,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
        ],
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
        "Produces": [
        ],
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
        "Produces": [
        ],
        "PointCost": {
            "GoatHead": 3,
            "Azure": 1
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Yellow, CardColor.Red]).length * 3;
        }
    },
    {
        "CardNumber": 60,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [
        ],
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
        "Produces": [
        ],
        "PointCost": {
            "Pineapple": 3,
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Yellow, CardColor.Blue]) * 3;
        }
    },
    {
        "CardNumber": 63,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [
        ],
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
        "Produces": [
        ],
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
        "Produces": [
        ],
        "PointCost": {
            "Pineapple": 3
        },
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Yellow, CardColor.Green]) * 3;
        }
    },
    {
        "CardNumber": 66,
        "TypeOfDay": TypeOfDay.Day,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
        ],
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
        "Produces": [
        ],
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
        "Produces": [
        ],
        "PointCost": {
            "Azure": 5
        },
        GetPoints: function (playedCards) {
            return 24;
        }
    }
]

const monumentData = [
    {
        "CardNumber": 1,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Green, CardColor.Yellow]).length;
        }
    },
    {
        "CardNumber": 2,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Green, CardColor.Blue]).length;
        }
    },
    {
        "CardNumber": 3,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Red, CardColor.Yellow]).length;
        }
    },
    {
        "CardNumber": 4,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Green, CardColor.Red]).length;
        }
    },
    {
        "CardNumber": 5,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Blue, CardColor.Yellow]).length;
        }
    },
    {
        "CardNumber": 6,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure;
        }
    },
    {
        "CardNumber": 7,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": true,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length;
        }
    },
    {
        "CardNumber": 8,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length;
        }
    },
    {
        "CardNumber": 9,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0
        }
    },
    {
        "CardNumber": 10,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).GoatHead;
        }
    },
    {
        "CardNumber": 11,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Pineapple;
        }
    },
    {
        "CardNumber": 12,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": null,
        "HasMap": false,
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
        "TypeOfDay": null,
        "CardColor": null,
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
        "CardNumber": 14,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Pineapple * 2;
        }
    },
    {
        "CardNumber": 15,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).Azure * 2;
        }
    },
    {
        "CardNumber": 16,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 17,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getResourcePool(playedCards).GoatHead * 2;
        }
    },
    {
        "CardNumber": 18,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap) * 2;
        }
    },
    {
        "CardNumber": 19,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": true,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getGroupOfFourCardColorsCount(playedCards) * 4;
        }
    },
    {
        "CardNumber": 20,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.TypeOfDay == TypeOfDay.Night);
        }
    },
    {
        "CardNumber": 21,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap);
        }
    },
    {
        "CardNumber": 22,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 5;
        }
    },
    {
        "CardNumber": 23,
        "TypeOfDay": null,
        "CardColor": null,
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
        "CardNumber": 24,
        "TypeOfDay": null,
        "CardColor": null,
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
        "CardNumber": 25,
        "TypeOfDay": null,
        "CardColor": null,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Red, CardColor.Blue]).length;
        }
    },
    {
        "CardNumber": 26,
        "TypeOfDay": null,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 27,
        "TypeOfDay": null,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 28,
        "TypeOfDay": TypeOfDay.Night,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 29,
        "TypeOfDay": null,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 30,
        "TypeOfDay": null,
        "CardColor": CardColor.Red,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Red]).length;
        }
    },
    {
        "CardNumber": 31,
        "TypeOfDay": null,
        "CardColor": CardColor.Green,
        "HasMap": true,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 32,
        "TypeOfDay": null,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 33,
        "TypeOfDay": null,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 34,
        "TypeOfDay": null,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Green]).length;
        }
    },
    {
        "CardNumber": 35,
        "TypeOfDay": null,
        "CardColor": CardColor.Green,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.TypeOfDay === TypeOfDay.Night).length;
        }
    },
    {
        "CardNumber": 36,
        "TypeOfDay": null,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "Pineapple"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 37,
        "TypeOfDay": null,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Blue]).length;
        }
    },
    {
        "CardNumber": 38,
        "TypeOfDay": null,
        "CardColor": CardColor.Blue,
        "HasMap": true,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 39,
        "TypeOfDay": null,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "GoatHead"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 40,
        "TypeOfDay": null,
        "CardColor": CardColor.Blue,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 41,
        "TypeOfDay": null,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getCardsByColor(playedCards, [CardColor.Yellow]).length;
        }
    },
    {
        "CardNumber": 42,
        "TypeOfDay": null,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
            "Azure"
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 43,
        "TypeOfDay": null,
        "CardColor": CardColor.Yellow,
        "HasMap": true,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return 0;
        }
    },
    {
        "CardNumber": 44,
        "TypeOfDay": null,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return getGroupOfFourCardColorsCount(playedCards) * 4;
        }
    },
    {
        "CardNumber": 45,
        "TypeOfDay": null,
        "CardColor": CardColor.Yellow,
        "HasMap": false,
        "Produces": [
        ],
        "PointCost": {},
        GetPoints: function (playedCards) {
            return playedCards.filter(card => card.HasMap).length;
        }
    }
]

const testData = [
    { "cards": [68, 51, 24, 30, 66, 17, 39, 50], "monuments": [10, 19, 32, 27], "result": 105 },
    { "cards": [57, 64, 12, 28, 32, 35, 37, 6], "monuments": [35, 11, 6, 29, 16], "result": 80 },
]

function testDataToInputs(testDataIndex) {
    fillInDebugNumbers(testData[testDataIndex].cards);
    fillInDebugMonuments(testData[testDataIndex].monuments);
}

function initializeInputs() {
    const inputs = document.querySelectorAll('.number-input');
    inputs.forEach((input, index) => {
        if (index !== 0) {
            input.disabled = true;
        }
    });
}

// Dummy asynchronous method to simulate getting an array of 8 numbers
function transferToCardObjects(playedCards) {

    return playedCards.map(card => cardsData.find(data => data.CardNumber === card));

}

function transferToMonumentObjects(playedMonuments) {
    return playedMonuments.map(playedMonument => monumentData.find(data => data.CardNumber === playedMonument));
}

function getResourcePool(playedCards) {

    var result = {
        Azure: 0,
        Pineapple: 0,
        GoatHead: 0
    }

    for (var i = 0; i < playedCards.length; i++) {
        var card = playedCards[i];
        for (var j = 0; j < card.Produces.length; j++) {
            result[card.Produces[j]]++;
        }
    }

    return result;
}

function getCardsByColor(cards, colors) {
    return cards.filter(card => colors.includes(card.CardColor));
}

function getGroupOfFourCardColorsCount(playedCards) {
    return Math.min(...[CardColor.Red, CardColor.Blue, CardColor.Green, CardColor.Yellow].map(color => playedCards.filter(c => c.CardColor === color).length));
}



function isPayed(playedCards, pointCost) {

    if (Object.keys(pointCost).length === 0) {
        return true;
    }

    const resourcePool = getResourcePool(playedCards);

    for (const resource in pointCost) {
        if (resourcePool[resource] < pointCost[resource]) {
            return false;
        }
    }

    return true;

}


// Calculate method
async function calculate() {
    // Disable the button while calculating
    const calculateBtn = document.querySelector('.calculate-btn');
    calculateBtn.disabled = true;
    calculateBtn.textContent = 'Calculating...';

    // Hide the delete buttons
    hideDeleteButtons();

    // Set the opacity of all input cards to 0.6
    setCardOpacity(0.6);

    const playedCards = transferToCardObjects([...document.querySelectorAll('.number-input')].map(input => parseInt(input.value))).reverse();

    const playedMonuments = transferToMonumentObjects([...document.querySelectorAll('.monument-input')].map(input => parseInt(input.value))).filter(card => card !== undefined);

    var result = [];
    var monumentResult = [];

    // Test case: 2,56,12,4,15,32,23,18

    for (var i = 0; i < playedCards.length; i++) {
        var card = playedCards[i];
        var playedCardsForCard = playedCards.slice(0, i + 1);

        playedCardsForCard = playedCardsForCard.concat(playedMonuments);

        if (isPayed(playedCardsForCard, card.PointCost)) {
            result.push(card.GetPoints(playedCardsForCard));
        } else {
            result.push(0);
        }

    }

    for (var monument of playedMonuments) {
        var playedCardsForCard = playedCards.concat(playedMonuments);

        monumentResult.push(monument.GetPoints(playedCardsForCard));

    }

    // Display the numbers starting from the back with animation
    displayResultWithAnimation(result.reverse());

    // Enable the button again
    calculateBtn.disabled = false;
    calculateBtn.textContent = 'Calculate';

    setTimeout(() => {
        displayMonumentResultWithAnimation(monumentResult);
    }, result.length * 425);

    // After all numbers are displayed, show the total points
    setTimeout(() => {
        const calculateBtn = document.querySelector('.calculate-btn');
        calculateBtn.style.display = 'none'; // Hide the calculate button
        result.push(...monumentResult)
        const total = result.reduce((acc, curr) => acc + curr, 0); // Calculate the total points
        displayTotalPoints(total);
    }, (result.length + monumentResult.length) * 500); // Show the total after the last number animation
}

// Function to hide all delete buttons
function hideDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.close-btn');
    deleteButtons.forEach(btn => {
        btn.style.display = 'none'; // Hide all delete buttons
    });
}

// Function to set the opacity of all input cards
function setCardOpacity(opacity) {
    const inputBoxes = document.querySelectorAll('.input-box');
    inputBoxes.forEach(box => {
        box.style.opacity = opacity; // Set opacity for each box
    });
}

// Function to display the results with animation (iterate backward)
function displayResultWithAnimation(numbers) {
    // Iterate numbers from the back (last to first)
    for (let i = numbers.length - 1; i >= 0; i--) {
        // Get the div for the current result
        const resultDiv = document.getElementById(`result${i + 1}`);
        resultDiv.textContent = ''; // Clear previous results if any

        // Create a div for the number with animation
        const numberDiv = document.createElement('div');
        numberDiv.className = 'result-number';
        numberDiv.id = `result-num${i + 1}`;
        numberDiv.textContent = numbers[i];

        // Append to the result div under the card
        resultDiv.appendChild(numberDiv);

        // Add the animation (using a timeout to stagger the animations)
        setTimeout(() => {
            numberDiv.classList.add('show');
            // Bring back the opacity of the card to full when number shows
            document.getElementById(`box${i + 1}`).style.opacity = 1;
        }, (numbers.length - 1 - i) * 400); // Stagger the appearance by 300ms
    }
}

function displayMonumentResultWithAnimation(numbers) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        // Get the div for the current result
        const resultDiv = document.getElementById(`result-monument-${i + 1}`);
        resultDiv.textContent = ''; // Clear previous results if any

        // Create a div for the number with animation
        const numberDiv = document.createElement('div');
        numberDiv.className = 'result-number';
        numberDiv.id = `result-num${i + 1}`;
        numberDiv.textContent = numbers[i];

        // Append to the result div under the card
        resultDiv.appendChild(numberDiv);

        // Add the animation (using a timeout to stagger the animations)
        setTimeout(() => {
            numberDiv.classList.add('show');
            // Bring back the opacity of the card to full when number shows
            document.getElementById(`monument${i + 1}`).style.opacity = 1;
        }, (numbers.length - 1 - i) * 400); // Stagger the appearance by 300ms
    }
}

// Function to display the total points
function displayTotalPoints(total) {
    const totalPointsDiv = document.getElementById('total-points');
    totalPointsDiv.innerHTML = ''; // Clear previous total if any

    const totalDiv = document.createElement('div');
    totalDiv.className = 'total-points-display';
    totalDiv.textContent = `Total Points: ${total}`;

    // Append the total points to the div
    totalPointsDiv.appendChild(totalDiv);

    // Add an animation to the total points
    setTimeout(() => {
        totalDiv.classList.add('show-total');
    }, 300); // Slight delay for the total to show
}

document.addEventListener('DOMContentLoaded', initializeInputs);
