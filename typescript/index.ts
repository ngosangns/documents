interface IPizza {
    doPizza(): string;
}

class TomatoPizza implements IPizza {
    doPizza(): string {
        return "I am a Tomato Pizza";
    }
}
class ChickenPizza implements IPizza {
    doPizza(): string {
        return "I am a Chicken Pizza";
    }
}

abstract class PizzaDecorator implements IPizza {
    constructor(protected mPizza: IPizza) { }

    getPizza(): IPizza {
        return this.mPizza;
    }

    setPizza(mPizza: IPizza): void {
        this.mPizza = mPizza;
    }

    abstract doPizza(): string;
}

class CheeseDecorator extends PizzaDecorator {
    constructor(pizza: IPizza) {
        super(pizza);
    }

    doPizza(): string {
        let type: string = this.mPizza.doPizza();
        return type + this.addCheese();
    }

    // This is additional functionality
    // It adds cheese to an existing pizza
    addCheese(): string {
        return " + Cheese";
    }
}
class PepperDecorator extends PizzaDecorator {
    constructor(pizza: IPizza) {
        super(pizza);
    }

    doPizza(): string {
        let type: string = this.mPizza.doPizza();
        return type + this.addPepper();
    }

    // This is additional functionality
    // It adds cheese to an existing pizza
    addPepper(): string {
        return " + Pepper";
    }
}

let tomato : IPizza = new TomatoPizza();
let chicken : IPizza = new ChickenPizza();

console.log(tomato.doPizza());
console.log(chicken.doPizza());

// Use Decorator pattern to extend existing pizza dynamically
// Add pepper to tomato-pizza
let pepperDecorator : PepperDecorator = new PepperDecorator(tomato);
console.log(pepperDecorator.doPizza());

// Add cheese to tomato-pizza
let cheeseDecorator : CheeseDecorator = new CheeseDecorator(tomato);
console.log(cheeseDecorator.doPizza());

// Add cheese and pepper to tomato-pizza
// We combine functionalities together easily.
let cheeseDecorator2 : CheeseDecorator = new CheeseDecorator(pepperDecorator);
console.log(cheeseDecorator2.doPizza());