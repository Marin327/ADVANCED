function solution() {
    const library = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    const sortedElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    function manager(str) {
        let [command, action, quantity] = str.split(" ");
        quantity = Number(quantity);
        if (command === 'prepare') {
            const recipe = library[action];
            for (const el in recipe) {
                if (recipe[el] * quantity > sortedElements[el]) {
                    return `Error: not enough ${el} in stock`;
                }
            }
                for (const el in recipe) {
                    sortedElements[el] -= recipe[el] * quantity;
                }
                return 'Success';
            } else if (command === "restock") {
                sortedElements[action] += quantity;
                return 'Success';
            } else if (command === "report") {
                const result = [];
                for (const el in sortedElements) {
                    result.push(`${el}=${sortedElements[el]}`);
                }
                return result.join(" ");
            }
        }
        return manager;
    }

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in

//
console.log("--------");
//

function closure() {
    const ingreds = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    const recipes = {
        apple: parseRecipeData(0, 1, 0, 2),
        lemonade: parseRecipeData(0, 10, 0, 20),
        burger: parseRecipeData(0, 5, 7, 3),
        eggs: parseRecipeData(5, 0, 1, 1),
        turkey: parseRecipeData(10, 10, 10, 10),
    }

    function parseRecipeData(protein, carbohydrate, fat, flavour) {
        return {
            protein,
            carbohydrate,
            fat,
            flavour,
        }
    }

    function restock(ingr, x) {
        ingreds[ingr] += x
        return "Success"
    }

    function prepare(required, quantity) {
        const parsedRecipe = Object.entries(required).map(x => [
            x[0],
            x[1] * quantity,
        ])

        for (let i = 0; i < parsedRecipe.length; i++) {
            const [name, amount] = parsedRecipe[i]
            if (ingreds[name] - amount < 0) {
                return `Error: not enough ${name} in stock`
            }
        }

        parsedRecipe.forEach(([name, amount]) => (ingreds[name] -= amount))
        return "Success"
    }

    const report = () =>
        Object.entries(ingreds)
            .map(([key, value]) => `${key}=${value}`)
            .join(" ")

    const actions = {
        prepare: (r, q) => prepare(recipes[r], q),
        restock,
        report,
    }

    return s => {
        const [command, a, b] = s
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)))

        return actions[command](a, b)
    }
}
//
console.log("--------");
//
function closure() {
    const ingreds = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    const recipes = {
        apple: parseRecipeData(0, 1, 0, 2),
        lemonade: parseRecipeData(0, 10, 0, 20),
        burger: parseRecipeData(0, 5, 7, 3),
        eggs: parseRecipeData(5, 0, 1, 1),
        turkey: parseRecipeData(10, 10, 10, 10),
    }

    function parseRecipeData(protein, carbohydrate, fat, flavour) {
        return {
            protein,
            carbohydrate,
            fat,
            flavour,
        }
    }

    function restock(ingr, x) {
        ingreds[ingr] += x
        return "Success"
    }

    function prepare(required, quantity) {
        const parsedRecipe = Object.entries(required).map(x => [
            x[0],
            x[1] * quantity,
        ])

        for (let i = 0; i < parsedRecipe.length; i++) {
            const [name, amount] = parsedRecipe[i]
            if (ingreds[name] - amount < 0) {
                return `Error: not enough ${name} in stock`
            }
        }

        parsedRecipe.forEach(([name, amount]) => (ingreds[name] -= amount))
        return "Success"
    }

    const report = () =>
        Object.entries(ingreds)
            .map(([key, value]) => `${key}=${value}`)
            .join(" ")

    const actions = {
        prepare: (r, q) => prepare(recipes[r], q),
        restock,
        report,
    }

    return s => {
        const [command, a, b] = s
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)))

        return actions[command](a, b)
    }
}
