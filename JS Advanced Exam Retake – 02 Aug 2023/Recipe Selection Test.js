describe("Tests for recipeSelection object", function() {
  describe("isTypeSuitable function", function() {
    it("should return 'This recipe is not suitable for vegetarians' if dietaryRestriction is 'Vegetarian' and type is 'Meat'", function() {
      const result = recipeSelection.isTypeSuitable("Meat", "Vegetarian");
      expect(result).to.equal("This recipe is not suitable for vegetarians");
    });

    it("should return 'This recipe is not suitable for vegans' if dietaryRestriction is 'Vegan' and type is 'Meat'", function() {
      const result = recipeSelection.isTypeSuitable("Meat", "Vegan");
      expect(result).to.equal("This recipe is not suitable for vegans");
    });

    it("should return 'This recipe is not suitable for vegans' if dietaryRestriction is 'Vegan' and type is 'Dairy'", function() {
      const result = recipeSelection.isTypeSuitable("Dairy", "Vegan");
      expect(result).to.equal("This recipe is not suitable for vegans");
    });

    it("should return 'This recipe is suitable for your dietary restriction' for any other combination of type and dietaryRestriction", function() {
      const result = recipeSelection.isTypeSuitable("Vegetables", "Pescatarian");
      expect(result).to.equal("This recipe is suitable for your dietary restriction");
    });

    it("should throw an error with message 'Invalid input' if type is not a string", function() {
      expect(() => recipeSelection.isTypeSuitable(123, "Vegetarian")).to.throw("Invalid input");
    });

    it("should throw an error with message 'Invalid input' if dietaryRestriction is not a string", function() {
      expect(() => recipeSelection.isTypeSuitable("Meat", 123)).to.throw("Invalid input");
    });
  });

  describe("isItAffordable function", function() {
    it("should return 'You don't have enough budget to afford this recipe' if remaining budget is less than 0", function() {
      const result = recipeSelection.isItAffordable(50, 30);
      expect(result).to.equal("You don't have enough budget to afford this recipe");
    });

    it("should return 'You have enough budget to afford this recipe' if remaining budget is 0 or greater", function() {
      const result = recipeSelection.isItAffordable(30, 50);
      expect(result).to.equal("You have enough budget to afford this recipe");
    });
  });
});