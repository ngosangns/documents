interface State {
    writeName(context: StateContext, name: string): void;
}

class LowerCaseState implements State {
    writeName(context: StateContext, name: string) {
        console.log(name.toLowerCase());
        context.setState(new MultipleUpperCaseState());
    }
}

class MultipleUpperCaseState implements State {
    private count: number = 0;
    writeName(context: StateContext, name: string): void {
        console.log(name.toUpperCase());
        /* Change state after StateMultipleUpperCase's writeName() gets invoked twice */
        if (++this.count > 1) {
            context.setState(new LowerCaseState());
        }
    }
}

class StateContext {
    private state!: State;
    constructor() {
        this.state = new LowerCaseState();
    }
    setState(newState: State): void {
        this.state = newState;
    }
    writeName(name: string): void {
        this.state.writeName(this, name);
    }
}

let context: StateContext = new StateContext();
context.writeName("Monday");
context.writeName("Tuesday");
context.writeName("Wednesday");
context.writeName("Thursday");
context.writeName("Friday");
context.writeName("Saturday");
context.writeName("Sunday");