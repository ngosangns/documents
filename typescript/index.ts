abstract class BaseComponent {
    protected mediator?: Mediator
    constructor(mediator?: Mediator) {
        this.mediator = mediator
    }
    update(mediator?: Mediator) {
        this.mediator = mediator
    }
}

class Component1 extends BaseComponent {
    constructor(mediator?: Mediator) {
        super(mediator)
    }
    update(mediator?: Mediator) {
        super.update(mediator)
    }
    doA() {
        console.log("Component 1 does A.")
        this.mediator?.notify("A")
    }
    doB() {
        console.log("Component 1 does B.\n")
        this.mediator?.notify("B")
    }
}

class Component2 extends BaseComponent {
    constructor(mediator?: Mediator) {
        super(mediator)
    }
    update(mediator?: Mediator) {
        super.update(mediator)
    }
    doC() {
        console.log("Component 1 does C")
        this.mediator?.notify("C")
    }
    doD() {
        console.log("Component 1 does D")
        this.mediator?.notify("D")
    }
}

interface Mediator {
    notify(event: String): void
}

class ConcreteMediator implements Mediator {
    constructor(...components: BaseComponent[]) {
        for(let component of components) {
            component.update(this)
        }
    }
    updateMediator(component: BaseComponent) {
        component.update(this)
    }
    notify(event: String) {
        console.log(`Mediator reacts on ${event}`)
    }
}

let component1 = new Component1()
let component2 = new Component2()
let mediator = new ConcreteMediator(component1, component2)

component1.doA()
console.log('\n')
component2.doC()