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
    private available: Array<Taxi> = new Array<Taxi>();
    private inUse: Array<Taxi> = new Array<Taxi>();
    private count: number = 0;
    private waiting: boolean = false;

    async getTaxi(): Promise<Taxi> {
        if (this.available.length > 0) {
            let taxi: Taxi = this.available.shift() || new Taxi('');
            this.inUse.push(taxi);
            return Promise.resolve(taxi);
        }
        if (this.count == this.NUMBER_OF_TAXI) {
            this.waitingUntilTaxiAvailable();
            return this.getTaxi();
        }
        return await this.createTaxi();
    }
    release(taxi: Taxi) {
        this.inUse.splice(this.inUse.indexOf(taxi), 1);
        this.available.push(taxi);
        console.log(taxi.getName() + " is free");
    }
    async createTaxi(): Promise<Taxi> {
        await this.sleep(200);
        this.count++;
        let taxi: Taxi = new Taxi("Taxi " + this.count);
        console.log(taxi.getName() + " is created");
        return taxi;
    }
    async waitingUntilTaxiAvailable(): Promise<void> {
        if (this.waiting) {
            this.waiting = false;
            throw new Error("No taxi available");
        }
        this.waiting = true;
        await this.waitingF(this.EXPIRED_TIME_IN_MILISECOND);
    }
    async waitingF(numberOfSecond: number) {
        try {
            await this.sleep(numberOfSecond);
        } catch (e) {
            throw new Error(e);
        }
    }
    sleep(ms: any): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

class ClientThread {
    private clientNumber: number = Math.floor(Math.random() * 501) + 1000;
    constructor(private taxiPool: TaxiPool) { }

    run(): void {
        this.takeATaxi();
    }

    private async takeATaxi(): Promise<void> {
        try {
            console.log("New client: " + this.clientNumber);
            let taxi: Taxi;
            taxi = await this.taxiPool.getTaxi().then(res => res);

            await this.sleep(Math.floor(Math.random() * 501) + 1000);

            this.taxiPool.release(taxi);
            console.log("Served the client: " + this.clientNumber);
        } catch (e) {
            console.log(">>>Rejected the client: " + this.clientNumber);
        }
    }

    sleep(ms: any): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
const NUM_OF_CLIENT: number = 8;
let taxiPool: TaxiPool = new TaxiPool();
for (let i = 0; i < NUM_OF_CLIENT; i++) {
    let client: ClientThread = new ClientThread(taxiPool);
    client.run();
}