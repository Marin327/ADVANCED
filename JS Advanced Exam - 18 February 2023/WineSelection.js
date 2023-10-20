class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space < 1) {
            throw new Error("Not enough space in the cellar.");
        }

        this.wines.push({
            wineName: wineName,
            wineType: wineType,
            price: price,
            paid: false
        });

        this.space--;

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let wine = this.wines.find(w => w.wineName === wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for ${price}$.`;
    }

    openBottle(wineName) {
        let index = this.wines.findIndex(w => w.wineName === wineName);

        if (index === -1) {
            throw new Error("The wine you're looking for is not found.");
        }

        let wine = this.wines[index];

        if (!wine.paid) {
            throw new Error(`${wineName} needs to be paid before opening the bottle.`);
        }

        this.wines.splice(index, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let emptySlots = this.space;
            let hasPaid = this.wines.filter(w => w.paid).length;
            let notPaid = this.wines.length - hasPaid;

            let output = [];
            output.push(`You have space for ${emptySlots} bottles more.`);
            output.push(`You paid ${this.bill}$ for the wine.`);

            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            sortedWines.forEach(wine => {
                let status = wine.paid ? "Has Paid" : "Not Paid";
                output.push(`${wine.wineName} > ${wine.wineType} - ${status}.`);
            });

            return output.join('\n');
        }

        let selectedWines = this.wines.filter(w => w.wineType === wineType);

        if (selectedWines.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        let output = [];

        selectedWines.forEach(wine => {
            let status = wine.paid ? "Has Paid" : "Not Paid";
            output.push(`${wine.wineName} > ${wine.wineType} - ${status}.`);
        });

        return output.join('\n');
    }
}