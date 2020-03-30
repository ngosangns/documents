interface Observer {
    update(mesage: string): void
}

class ConcreteObserver implements Observer {
    constructor(private beforeMessage: string) {}
    update(message: string) {
        console.log(this.beforeMessage + " " + message)
    }
}
interface Subject {
    observers : Array<Observer>
    attach(observer: Observer) : void
    detach(observer: Observer): void
    notifyChange(message: string): void
}
class ConcreteSubject implements Subject {
    observers: Array<Observer> = new Array<Observer>()
    attach(observer: Observer): void {
        this.observers.push(observer)
    }
    detach(observer: Observer): void {
        this.observers.splice(this.observers.indexOf(observer), 1)
    }
    notifyChange(message: string): void {
        for (let observer of this.observers) {
            observer.update(message)
        }
    }
}

let subject : Subject = new ConcreteSubject()
let observer1 : Observer = new ConcreteObserver("Message 1 updated:")
let observer2 : Observer = new ConcreteObserver("Message 2 updated:")
subject.attach(observer1)
subject.attach(observer2)

subject.notifyChange('Subject notify!')
subject.detach(observer1)
console.log("Removed Observer 1\n")
subject.notifyChange('Subject notify!')