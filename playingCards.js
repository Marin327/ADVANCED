function cards(face, suit) {

    const faces = [
        '2', 
        '3', 
        '4', 
        '5', 
        '6', 
        '7', 
        '8', 
        '9', 
        '10', 
        'J', 
        'Q', 
        'K', 
        'A'
    ];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
};
    if(faces.includes(face) == false) {
        throw new TypeError('Invalid face');
    }else if(suit in suits) {
        throw new TypeError('Invalid suit');
    }
    const result = {
        face,
        suit,
        toString() {
            return this.face + this.suits[this.suit];
        }
    }
    return result
}
const cards = [
    cards('A', 'S')
];
console.log(cards.join('\n'));

cards('1', 'C');
//
console.log("---------");
//
function solve(face, suit) {
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


        if (faces.indexOf(face) == -1) throw Error(`Invalid face ${face}!`);
        if (!suits.hasOwnProperty(suit)) throw Error(`Invalid suit ${suit}!`);

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
}
solve('A', 'S')
//
console.log("-------");
//

function cardFactory (f, s) {
    const faces = {
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 'J', Q: 'Q', K: 'K', A: 'A',
    }
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663', }
    const setter = (c, e) => {
        if (! c[e]) throw new Error()
        return c[e]
    }
    let [face, suit] = [setter(faces, f), setter(suits, s)]

    const card = { face, suit, toString: () => `${face}${suit}` }

    Object.defineProperties(card, {
        face: {
            get () {return face},
            set: (f) => setter(faces, f)
        }, suit: {
            get () {return suit},
            set: (s) => setter(suits, s)
        },

    })

    return card
}