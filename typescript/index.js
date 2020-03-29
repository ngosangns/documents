"use strict";
class Light {
    constructor() {
        this.light = "light";
    }
}
class CommandOn {
    constructor(object) {
        this.object = object;
    }
    execute() {
        var _a;
        console.log(((_a = this.object) === null || _a === void 0 ? void 0 : _a.light) + ' on');
    }
}
class CommandOff {
    constructor(object) {
        this.object = object;
    }
    execute() {
        var _a;
        console.log(((_a = this.object) === null || _a === void 0 ? void 0 : _a.light) + ' off');
    }
}
class RemoteControl {
    setCommand(command) {
        this.command = command;
    }
    run() {
        var _a;
        (_a = this.command) === null || _a === void 0 ? void 0 : _a.execute();
    }
}
let remote = new RemoteControl();
let commandOff = new CommandOn(new Light());
remote.setCommand(commandOff);
remote.run();
