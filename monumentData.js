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