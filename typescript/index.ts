class Taxi {
    constructor(private name: string) { }
    getName(): String {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    toString(): String {
        return `Taxi [name = ${this.name}]`
    }
}

class TaxiPool {
    private readonly EXPIRED_TIME_IN_MILISECOND: number = 1200;
    private readonly NUMBER_OF_TAXI: number = 4;
    private available: Array<Taxi | undefined> = new Array<Taxi | undefined>();
    private inUse: Array<Taxi | undefined> = new Array<Taxi | undefined>();
    private count: number = 0;
    private waiting: boolean = false;

    getTaxi(): Taxi | undefined {
        if (this.available.length > 0) {
            let taxi: Taxi | undefined = this.available.shift();
            this.inUse.push(taxi);
            return taxi;
        }
        if (this.count == this.NUMBER_OF_TAXI) {
            this.waitingUntilTaxiAvailable();
            return this.getTaxi();
        }
        this.sleep(2000);
        let taxi: Taxi = this.createTaxi();
        this.inUse.push(taxi);
        return taxi;
    }
    release(taxi: Taxi) {
        this.inUse.splice(this.inUse.indexOf(taxi), 1);
        this.available.push(taxi);
        console.log(taxi.getName + " is free");
    }
    createTaxi(): Taxi {
        this.count++;
        let taxi: Taxi = new Taxi("Taxi " + this.count);
        console.log(taxi.getName() + " is created");
        return taxi;
    }
    waitingUntilTaxiAvailable(): void {
        if (this.waiting) {

        }
    }
    sleep(ms: any) : Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}