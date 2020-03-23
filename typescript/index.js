"use strict";
class TomatoPizza {
    doPizza() {
        return "I am a Tomato Pizza";
    }
}
class ChickenPizza {
    doPizza() {
        return "I am a Chicken Pizza";
    }
}
class PizzaDecorator {
    constructor(mPizza) {
        this.mPizza = mPizza;
    }
    getPizza() {
        return this.mPizza;
    }
    setPizza(mPizza) {
        this.mPizza = mPizza;
    }
}
class CheeseDecorator extends PizzaDecorator {
    constructor(pizza) {
        super(pizza);
    }
    doPizza() {
        let type = this.mPizza.doPizza();
        return type + this.addCheese();
    }
    // This is additional functionality
    // It adds cheese to an existing pizza
    addCheese() {
        return " + Cheese";
    }
}
class PepperDecorator extends PizzaDecorator {
    constructor(pizza) {
        super(pizza);
    }
    doPizza() {
        let type = this.mPizza.doPizza();
        return type + this.addPepper();
    }
    // This is additional functionality
    // It adds cheese to an existing pizza
    addPepper() {
        return " + Pepper";
    }
}
let tomato = new TomatoPizza();
let chicken = new ChickenPizza();
console.log(tomato.doPizza());
console.log(chicken.doPizza());
// Use Decorator pattern to extend existing pizza dynamically
// Add pepper to tomato-pizza
let pepperDecorator = new PepperDecorator(tomato);
console.log(pepperDecorator.doPizza());
// Add cheese to tomato-pizza
let cheeseDecorator = new CheeseDecorator(tomato);
console.log(cheeseDecorator.doPizza());
// Add cheese and pepper to tomato-pizza
// We combine functionalities together easily.
let cheeseDecorator2 = new CheeseDecorator(pepperDecorator);
console.log(cheeseDecorator2.doPizza());
