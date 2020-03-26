"use strict";
class Flyweight {
    constructor(model, processor) {
        this.model = model;
        this.processor = processor;
    }
    operation(memory, tag) {
        return `Computer: Model = ${this.model}, Proccessor = ${this.processor}, Memory = ${memory}, Tag = ${tag}`;
    }
}
class FlyWeightFactory {
    constructor() {
        // Quản lí các flyweight
        this.cache = {};
    }
    getFlyweight(model, processor) {
        if (!this.cache[model + processor]) {
            this.cache[model + processor] =
                new Flyweight(model, processor);
        }
        return this.cache[model + processor];
    }
    count() {
        var count = 0;
        for (var f in this.cache)
            count++;
        return count;
    }
}
class Context {
    constructor(flyweight, memory, // Unique state
    tag // Unique state
    ) {
        this.flyweight = flyweight;
        this.memory = memory;
        this.tag = tag;
    }
    operation() {
        return this.flyweight.operation(this.memory, this.tag);
    }
}
// Container
class Client {
    constructor() {
        this.flyweightFactory = new FlyWeightFactory();
        this.contexts = new Array();
        this.countContext = 0;
    }
    add(model, processor, memory, tag) {
        this.contexts.push(new Context(this.flyweightFactory.getFlyweight(model, processor), memory, tag));
        this.countContext++;
    }
    getContext(model, processor, memory, tag) {
        return this.flyweightFactory.getFlyweight(model, processor).operation(memory, tag);
    }
    getCountContext() {
        return this.countContext;
    }
}
var computers = new Client();
computers.add("Studio XPS", "Intel", 5, "Y755P");
computers.add("Studio XPS", "Intel", 6, "X997T");
computers.add("Studio XPS", "Intel", 2, "U8U80");
computers.add("Studio XPS", "Intel", 2, "NT777");
computers.add("Studio XPS", "Intel", 2, "0J88A");
computers.add("Envy", "Intel", 4, "CNU883701");
computers.add("Envy", "Intel", 2, "TXU003283");
console.log("Computer counting: " + computers.getCountContext());
console.log("Flyweight counting: " + computers.flyweightFactory.count());
console.log("Before changes: ");
for (let [k, v] of computers.contexts.entries()) {
    console.log(`(${k + 1}) => ` + v.operation());
}
computers.flyweightFactory.getFlyweight("Studio XPS", "Intel").processor = "AMD";
console.log("After changes: ");
for (let [k, v] of computers.contexts.entries()) {
    console.log(`(${k + 1}) => ` + v.operation());
}
