"use strict";
class BaseComponent {
    constructor(mediator) {
        this.mediator = mediator;
    }
    update(mediator) {
        this.mediator = mediator;
    }
}
class Component1 extends BaseComponent {
    constructor(mediator) {
        super(mediator);
    }
    update(mediator) {
        super.update(mediator);
    }
    doA() {
        var _a;
        console.log("Component 1 does A.");
        (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.notify("A");
    }
    doB() {
        var _a;
        console.log("Component 1 does B.\n");
        (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.notify("B");
    }
}
class Component2 extends BaseComponent {
    constructor(mediator) {
        super(mediator);
    }
    update(mediator) {
        super.update(mediator);
    }
    doC() {
        var _a;
        console.log("Component 1 does C");
        (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.notify("C");
    }
    doD() {
        var _a;
        console.log("Component 1 does D");
        (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.notify("D");
    }
}
class ConcreteMediator {
    constructor(...components) {
        for (let component of components) {
            component.update(this);
        }
    }
    updateMediator(component) {
        component.update(this);
    }
    notify(event) {
        console.log(`Mediator reacts on ${event}`);
    }
}
let component1 = new Component1();
let component2 = new Component2();
let mediator = new ConcreteMediator(component1, component2);
component1.doA();
console.log('\n');
component2.doC();
