class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (
      !model ||
      typeof model !== 'string' ||
      !storage ||
      typeof storage !== 'number' ||
      storage <= 0 ||
      !price ||
      typeof price !== 'number' ||
      price <= 0 ||
      !condition ||
      typeof condition !== 'string'
    ) {
      throw new Error('Invalid smartphone!');
    }

    const roundedPrice = price.toFixed(2);
    const newSmartphone = {
      model,
      storage,
      price: roundedPrice,
      condition
    };

    this.availableSmartphones.push(newSmartphone);

    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${roundedPrice}$`;
  }

  sellSmartphone(model, desiredStorage) {
    const smartphoneIndex = this.availableSmartphones.findIndex(
      (smartphone) => smartphone.model === model
    );

    if (smartphoneIndex === -1) {
      throw new Error(`${model} was not found!`);
    }

    const smartphone = this.availableSmartphones[smartphoneIndex];

    if (smartphone.storage >= desiredStorage) {
      var soldPrice = smartphone.price;
    } else {
      if (smartphone.storage - desiredStorage <= 128) {
        var priceReduction = 0.1;
      } else {
        var priceReduction = 0.2;
      }
      var soldPrice = (smartphone.price - smartphone.price * priceReduction).toFixed(2);
    }

    this.availableSmartphones.splice(smartphoneIndex, 1);
    this.soldSmartphones.push({
      model: smartphone.model,
      storage: smartphone.storage,
      soldPrice: soldPrice
    });

    this.revenue += parseFloat(soldPrice);

    return `${model} was sold for ${soldPrice}$`;
  }

  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      throw new Error('There are no available smartphones!');
    }

    let upgradedPhones = '';

    for (let i = 0; i < this.availableSmartphones.length; i++) {
      const smartphone = this.availableSmartphones[i];
      smartphone.storage *= 2;
      smartphone.price = smartphone.price.toFixed(2);

      upgradedPhones += `${smartphone.model} / ${smartphone.storage} GB / ${smartphone.condition} condition / ${smartphone.price}$\n`;
    }

    return 'Upgraded Smartphones:\n' + upgradedPhones.trim();
  }

  salesJournal(criteria) {
    const sortedSoldSmartphones = [...this.soldSmartphones];

    if (criteria === 'storage') {
      sortedSoldSmartphones.sort((a, b) => b.storage - a.storage);
    } else if (criteria === 'model') {
      sortedSoldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error('Invalid criteria!');
    }

    let journal = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${sortedSoldSmartphones.length} smartphones sold:\n`;

    for (const smartphone of sortedSoldSmartphones) {
      journal += `${smartphone.model} / ${smartphone.storage} GB / ${smartphone.soldPrice}$\n`;
    }

    return journal.trim();
  }
}
