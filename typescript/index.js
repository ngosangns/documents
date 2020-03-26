"use strict";
class RailShipper {
    delivery() {
        return `Package is delivering by train`;
    }
}
class BusShipper {
    delivery() {
        return `Package is delivering by bus`;
    }
}
class PlaneShipper {
    delivery() {
        return `Package is delivering by plane`;
    }
}
class ShipperHandler {
    constructor(type) {
        this.shipper = eval(`new ${type}Shipper();`);
    }
    delivery() {
        return this.shipper.delivery();
    }
}
let shipper = new ShipperHandler('Bus');
console.log(shipper.delivery());
