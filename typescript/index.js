"use strict";
class LowerCaseState {
    writeName(context, name) {
        console.log(name.toLowerCase());
        context.setState(new MultipleUpperCaseState());
    }
}
class MultipleUpperCaseState {
    constructor() {
        this.count = 0;
    }
    writeName(context, name) {
        console.log(name.toUpperCase());
        /* Change state after StateMultipleUpperCase's writeName() gets invoked twice */
        if (++this.count > 1) {
            context.setState(new LowerCaseState());
        }
    }
}
class StateContext {
    constructor() {
        this.state = new LowerCaseState();
    }
    setState(newState) {
        this.state = newState;
    }
    writeName(name) {
        this.state.writeName(this, name);
    }
}
let context = new StateContext();
context.writeName("Monday");
context.writeName("Tuesday");
context.writeName("Wednesday");
context.writeName("Thursday");
context.writeName("Friday");
context.writeName("Saturday");
context.writeName("Sunday");
