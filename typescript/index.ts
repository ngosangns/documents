class Employee {
    private subordinates: Array<Employee>;
    constructor(
        private name: string,
        private dept: string,
        private salary: number
    ) {
        this.subordinates = new Array<Employee>();
    }

    add(e: Employee): void {
        this.subordinates.push(e);
    }

    remove(e: Employee): void {
        this.subordinates.splice(this.subordinates.indexOf(e), 1);
    }

    getChildren(): Array<Employee> {
        return this.subordinates;
    }

    toString(): string {
        return (`Employee :[ Name : ${this.name}, dept : ${this.dept}, salary : ${this.salary} ]`);
    }
}

let CEO: Employee = new Employee("John", "CEO", 30000);
let headSales : Employee = new Employee("Robert", "Head Sales", 20000);
let headMarketing : Employee = new Employee("Michel", "Head Marketing", 20000);

let clerk1 : Employee = new Employee("Laura", "Marketing", 10000);
let clerk2 : Employee = new Employee("Bob", "Marketing", 10000);

let salesExecutive1 : Employee = new Employee("Richard", "Sales", 10000);
let salesExecutive2 : Employee = new Employee("Rob", "Sales", 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

//print all employees of the organization
console.log(CEO);

for (let headEmployee of CEO.getChildren()) {
    console.log(headEmployee);
    for (let employee of headEmployee.getChildren())
        console.log(employee);
}
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
