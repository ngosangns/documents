
interface Shipper {
    delivery(): string;
}

class RailShipper implements Shipper {
    delivery() {
        return `Package is delivering by train`;
    }
}

class BusShipper implements Shipper {
    delivery() {
        return `Package is delivering by bus`;
    }
}

class PlaneShipper implements Shipper {
    delivery() {
        return `Package is delivering by plane`;
    }
}

class ShipperHandler implements Shipper {
    private shipper!: Shipper;
    constructor(type: string) {
        this.shipper = eval(`new ${type}Shipper();`);
    }
    delivery() {
        return this.shipper.delivery()
    }
}

let shipper: Shipper = new ShipperHandler('Bus');
console.log(shipper.delivery());