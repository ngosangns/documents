// class CustomerPrototype {
//     constructor(public proto: any) { }
//     clone() {
//         var customer: Customer = new Customer(
//             this.proto.first, 
//             this.proto.last, 
//             this.proto.status
//         );
//         return customer;
//     };
// }

// class Customer {
//     constructor(
//         public first: string, 
//         public last: string, 
//         public status: string
//     ) { }
//     say() {
//         console.log(
//             `name: ${this.first} ${this.last}, status: ${this.status}`
//         );
//     }
// }

// let proto = new Customer("n/a", "n/a", "pending");
// let prototype = new CustomerPrototype(proto);

// let customer = prototype.clone();
// customer.say();

class Warrior {
    public hp: number = 100;
    constructor(public name: string) { }
    bash(target: any) {
        target.hp -= 10;
    }
    slash(target: any) {
        target.hp /= 2;
    }
}
const harryPotter = new Warrior('Harry Potter');
const ngan = new Warrior('Ngan');
const snake = new Warrior('Snake');

console.log(
    harryPotter.bash === ngan.bash, // false
    snake.bash === ngan.bash // false
)