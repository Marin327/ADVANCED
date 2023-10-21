class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.players = {};
        //this.invitedPlayers = [];
    }

    get invitedPlayers() {
        return Object.values(this.players);
    }


    newAdditions(footballPlayers) {
        footballPlayers.forEach(player => {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            if (!this.players.hasOwnProperty(name)) {
                this.players[name] = {name, age, playerValue};
            } else {
                if (this.players[name].playerValue < playerValue) {
                    this.players[name].playerValue = playerValue;
                }
            }
        });

        return 'You successfully invite ' + Object.keys(this.players).join(', ') + '.';
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        offer = Number(offer);
        if (!this.players.hasOwnProperty(name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        let priceDifference = this.players[name].playerValue - offer;
        if (priceDifference > 0) {
            throw new Error(`The manager\'s offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        this.players[name].playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        if (!this.players.hasOwnProperty(name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (this.players[name].age < age) {
            const ageDifference = age - this.players[name].age ;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }

        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        const result = ['Players list:'];
        this.invitedPlayers.forEach(pl=>result.push(`Player ${pl.name}-${pl.playerValue}`));
        return result.join('\n');
    }
}

