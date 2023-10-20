describe("Lottery", function() {
    describe("buyLotteryTicket", function() {
      it("should throw an error for invalid input", function() {
        expect(function() {
          lottery.buyLotteryTicket(0, 1, true);
        }).to.throw("Invalid input!");
  
        expect(function() {
          lottery.buyLotteryTicket(10, 0, true);
        }).to.throw("Invalid input!");
  
        expect(function() {
          lottery.buyLotteryTicket(10, 1, "buy");
        }).to.throw("Invalid input!");
      });
  
      it("should throw an error if buy is false", function() {
        expect(function() {
          lottery.buyLotteryTicket(10, 1, false);
        }).to.throw("Unable to buy lottery ticket!");
      });
  
      it("should return the correct message for valid input", function() {
        const result = lottery.buyLotteryTicket(10, 2, true);
        expect(result).to.equal("You bought 2 tickets for 20$.");
      });
    });
  
    describe("checkTicket", function() {
      it("should throw an error for invalid input", function() {
        expect(function() {
          lottery.checkTicket([1, 2, 3, 4, 5]);
        }).to.throw("Invalid input!");
  
        expect(function() {
          lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]);
        }).to.throw("Invalid input!");
      });
  
      it("should return the correct message for winning numbers", function() {
        const result1 = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
        expect(result1).to.equal("You win the JACKPOT!!!");
  
        const result2 = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 8]);
        expect(result2).to.equal("Congratulations you win, check your reward!");
      });
    });
  
    describe("secondChance", function() {
      it("should throw an error for invalid input", function() {
        expect(function() {
          lottery.secondChance("ticketID", [1, 2, 3]);
        }).to.throw("Invalid input!");
  
        expect(function() {
          lottery.secondChance(1, "secondChanceWinningIDs");
        }).to.throw("Invalid input!");
      });
  
      it("should return the correct message for winning ticket", function() {
        const result1 = lottery.secondChance(1, [1, 2, 3]);
        expect(result1).to.equal("You win our second chance prize!");
  
        const result2 = lottery.secondChance(1, [2, 3, 4]);
        expect(result2).to.equal("Sorry, your ticket didn't win!");
      });
    });
  });
  