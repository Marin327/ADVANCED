class InventoryManager {
    constructor(capacity) {
      this.capacity = capacity;
      this.items = [];
      this.outOfStock = [];
    }
  
    addItem(itemName, quantity) {
      if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
      }
  
      if (this.items.length >= this.capacity) {
        throw new Error("The inventory is already full.");
      }
  
      const existingItem = this.items.find(item => item.name === itemName);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ name: itemName, quantity });
      }
  
      return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }
  
    sellItem(itemName, quantity) {
      if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
      }
  
      const existingItem = this.items.find(item => item.name === itemName);
      if (!existingItem) {
        throw new Error(`The item ${itemName} is not available in the inventory.`);
      }
  
      if (existingItem.quantity < quantity) {
        throw new Error(`Not enough ${itemName}(s) in stock.`);
      }
  
      existingItem.quantity -= quantity;
  
      if (existingItem.quantity === 0) {
        this.items = this.items.filter(item => item.name !== itemName);
        this.outOfStock.push(itemName);
      }
  
      return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }
  
    restockItem(itemName, quantity) {
      if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
      }
  
      const existingItem = this.items.find(item => item.name === itemName);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ name: itemName, quantity });
      }
  
      if (this.outOfStock.includes(itemName)) {
        this.outOfStock = this.outOfStock.filter(item => item !== itemName);
      }
  
      return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }
  
    getInventorySummary() {
      let summary = "Current Inventory:\n";
  
      for (const item of this.items) {
        summary += `${item.name}: ${item.quantity}\n`;
      }
  
      if (this.outOfStock.length > 0) {
        summary += `Out of Stock: ${this.outOfStock.join(", ")}\n`;
      }
  
      return summary.trim();
    }
  }
