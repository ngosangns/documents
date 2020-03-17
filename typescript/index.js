"use strict";
/**
 * Tạo một tham chiếu đến một instance của interface Implementation
 * Phân cấp và ủy thác tất cả các công việc thực sự cho đối tượng này
 */
class Abstraction {
    constructor(iA) {
        this.iA = iA;
    }
    operation() {
        return `Abstraction - Base operation with: \n${this.iA.operation_implementation()}`;
    }
}
class ConcreteAImplementationA {
    operation_implementation() {
        return `Concrete A of Implementation A`;
    }
}
class ConcreteBImplementationA {
    operation_implementation() {
        return `Concrete B of ImplementationA`;
    }
}
// Có thể mở rộng Abstraction mà không cần thay đổi lớp Implementation
class ExtendedAbstraction extends Abstraction {
    constructor(iA) {
        super(iA);
        this.iA = iA;
    }
    operation() {
        return `ExtendedAbstraction - Extended operation with: \n${this.iA.operation_implementation()}`;
    }
}
function client_code(abstraction) {
    console.log(abstraction.operation());
}
// let concreteAimplementationA = new ConcreteAImplementationA();
// let abstraction = new Abstraction(concreteAimplementationA);
// client_code(abstraction);
let concreteBimplementationA = new ConcreteBImplementationA();
let extendedAbstraction = new ExtendedAbstraction(concreteBimplementationA);
client_code(extendedAbstraction);
