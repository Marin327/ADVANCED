// function solve() {
//     class Balloon {
//         constructor(color, hasWeight) {
//             this.color = color;
//             this.hasWeight = hasWeight;
//         }
//     }

//     class PartyBalloon extends Balloon {
//         constructor(color, hasWeight, ribbonColor, ribbonLength) {
//             super(color, hasWeight);
//             this._ribbon = {color: ribbonColor, length: ribbonLength}
//         }

//         get ribbon() {
//             return this._ribbon;
//         }
//     }

//     class BirthdayBalloon extends PartyBalloon {
//         constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
//             super(color, hasWeight, ribbonColor, ribbonLength);
//             this._text = text;
//         }

//         get text(){
//             return this._text;
//         }
//     }

//     return {
//         Balloon,
//         PartyBalloon,
//         BirthdayBalloon
//     }
// }


// let classes = solve();
// let testBalloon = new classes.Balloon("yellow", 20.5);
// let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
// let ribbon = testPartyBalloon.ribbon;
// console.log(testBalloon);
// console.log(testPartyBalloon);
// console.log(ribbon);

// //
// console.log("--------");

// //
// function solve() {
//     class Balloon {
//         constructor(color, hasWeight) {
//             this.color = color;
//             this.hasWeight = hasWeight;
//         }
//     }

//     class PartyBalloon extends Balloon {
//         constructor(color, hasWeight, ribbonColor, ribbonLength) {
//             super(color, hasWeight);
//             this._ribbon = {color: ribbonColor, length: ribbonLength}
//         }

//         get ribbon() {
//             return this._ribbon;
//         }
//     }

//     class BirthdayBalloon extends PartyBalloon {
//         constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
//             super(color, hasWeight, ribbonColor, ribbonLength);
//             this._text = text;
//         }

//         get text(){
//             return this._text;
//         }
//     }

//     return {
//         Balloon,
//         PartyBalloon,
//         BirthdayBalloon
//     }
// }


// let classes = solve();
// let testBalloon = new classes.Balloon("yellow", 20.5);
// let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
// let ribbon = testPartyBalloon.ribbon;
// console.log(testBalloon);
// console.log(testPartyBalloon);
// console.log(ribbon);

//
//console.log("---------------");

//

function solve() {

    class Balloon {
        constructor(ballonColor, gasWeight) {
            this.color = ballonColor;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(ballonColor, gasWeight, ribbonColor, ribbonLength) {
            super(ballonColor, gasWeight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(ballonColor, gasWeight, ribbonColor, ribbonLength, text) {
            super(ballonColor, gasWeight, ribbonColor, ribbonLength)
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}
let balloons = solve();
let testBalloon = new balloons.Balloon("pink", 20.5)
console.log(testBalloon);
let testPartyBalloon = new balloons.PartyBalloon('red', 55.5, 'blue', 5)
console.table(testPartyBalloon);
let testbirthdayBalloon = new balloons.BirthdayBalloon('gold', 35.55, 'white', 9, 'hello')
console.table(testbirthdayBalloon);