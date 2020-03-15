"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Taxi {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    toString() {
        return `Taxi [name = ${this.name}]`;
    }
}
class TaxiPool {
    constructor() {
        this.EXPIRED_TIME_IN_MILISECOND = 1200;
        this.NUMBER_OF_TAXI = 4;
        this.available = new Array();
        this.inUse = new Array();
        this.count = 0;
        this.waiting = false;
    }
    getTaxi() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.available.length > 0) {
                let taxi = this.available.shift() || new Taxi('');
                this.inUse.push(taxi);
                return Promise.resolve(taxi);
            }
            if (this.count == this.NUMBER_OF_TAXI) {
                this.waitingUntilTaxiAvailable();
                return this.getTaxi();
            }
            return yield this.createTaxi();
        });
    }
    release(taxi) {
        this.inUse.splice(this.inUse.indexOf(taxi), 1);
        this.available.push(taxi);
        console.log(taxi.getName() + " is free");
    }
    createTaxi() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sleep(200);
            this.count++;
            let taxi = new Taxi("Taxi " + this.count);
            console.log(taxi.getName() + " is created");
            return taxi;
        });
    }
    waitingUntilTaxiAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.waiting) {
                this.waiting = false;
                throw new Error("No taxi available");
            }
            this.waiting = true;
            yield this.waitingF(this.EXPIRED_TIME_IN_MILISECOND);
        });
    }
    waitingF(numberOfSecond) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sleep(numberOfSecond);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
class ClientThread {
    constructor(taxiPool) {
        this.taxiPool = taxiPool;
        this.clientNumber = Math.floor(Math.random() * 501) + 1000;
    }
    run() {
        this.takeATaxi();
    }
    takeATaxi() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("New client: " + this.clientNumber);
                let taxi;
                taxi = yield this.taxiPool.getTaxi().then(res => res);
                yield this.sleep(Math.floor(Math.random() * 501) + 1000);
                this.taxiPool.release(taxi);
                console.log("Served the client: " + this.clientNumber);
            }
            catch (e) {
                console.log(">>>Rejected the client: " + this.clientNumber);
            }
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
const NUM_OF_CLIENT = 8;
let taxiPool = new TaxiPool();
for (let i = 0; i < NUM_OF_CLIENT; i++) {
    let client = new ClientThread(taxiPool);
    client.run();
}
