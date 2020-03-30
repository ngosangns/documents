"use strict";
class ConcreteObserver {
    constructor(beforeMessage) {
        this.beforeMessage = beforeMessage;
    }
    update(message) {
        console.log(this.beforeMessage + " " + message);
    }
}
class ConcreteSubject {
    constructor() {
        this.observers = new Array();
    }
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    notifyChange(message) {
        for (let observer of this.observers) {
            observer.update(message);
        }
    }
}
let subject = new ConcreteSubject();
let observer1 = new ConcreteObserver("Message 1 updated:");
let observer2 = new ConcreteObserver("Message 2 updated:");
subject.attach(observer1);
subject.attach(observer2);
subject.notifyChange('Subject notify!');
subject.detach(observer1);
console.log("Removed Observer 1\n");
subject.notifyChange('Subject notify!');
