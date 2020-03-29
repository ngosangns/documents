class Light {
    public light: string = "light";
}

interface Command {
    execute(): any;
}

class CommandOn implements Command {
    private object?: Light;
    constructor(object?: Light) {
        this.object = object;
    }
    execute() {
        console.log(this.object?.light + ' on')
    }
}

class CommandOff implements Command {
    private object?: Light;
    constructor(object?: Light) {
        this.object = object;
    }
    execute() {
        console.log(this.object?.light + ' off')
    }
}

class RemoteControl {
    private command?: Command;
    setCommand(command: Command) {
        this.command = command
    }
    run() {
        this.command?.execute()
    }
}

let remote = new RemoteControl()
let commandOff = new CommandOn(new Light())
remote.setCommand(commandOff)
remote.run()