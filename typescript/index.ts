interface Target {
    request(): string;
}

class Adaptee {
    specificRequest() : string {
        return ".eetpadA eht fo roivaheb laicepS";
    }
}

class Adapter implements Target {
    constructor(private obj: Adaptee) { }
    request(){
        return "Adapter: (TRANSLATED) "+this.obj.specificRequest().split("").reverse().join("");
    }
}

function clientCode(target: Target) {
    console.log(target.request());
}
let adaptee = new Adaptee();
console.log("Client: The Adaptee class has a weird interface. See, I don't understand it");
console.log("Adaptee: "+adaptee.specificRequest());

console.log("Client: But I can work with it via the Adapter");
let adapter = new Adapter(adaptee);
clientCode(adapter);