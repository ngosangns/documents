/**
 * Tạo một tham chiếu đến một instance của interface Implementation
 * Phân cấp và ủy thác tất cả các công việc thực sự cho đối tượng này
 */
class Abstraction {
    constructor(protected iA : ImplementationA) { }
    operation() : string {
        return `Abstraction - Base operation with: \n${this.iA.operation_implementation()}`;
    }
}
/**
 * Thông thường, interface Implementation chỉ cung cấp các phương thức cơ bản trong khi
 * Abstraction định nghĩa các phương thức cấp cao hơn dựa trên các phương thức cơ bản này
 */
interface ImplementationA {
    operation_implementation() : string;
}

class ConcreteAImplementationA implements ImplementationA {
    operation_implementation() : string {
        return `Concrete A of Implementation A`;
    }
}
class ConcreteBImplementationA implements ImplementationA {
    operation_implementation() : string {
        return `Concrete B of ImplementationA`;
    }
}

// Có thể mở rộng Abstraction mà không cần thay đổi lớp Implementation
class ExtendedAbstraction extends Abstraction {
    constructor(protected iA: ImplementationA) {
        super(iA);
    }
    operation() : string {
        return `ExtendedAbstraction - Extended operation with: \n${this.iA.operation_implementation()}`;
    }
}
function client_code(abstraction: Abstraction) {
    console.log(abstraction.operation());
}

// let concreteAimplementationA = new ConcreteAImplementationA();
// let abstraction = new Abstraction(concreteAimplementationA);
// client_code(abstraction);
let concreteBimplementationA = new ConcreteBImplementationA();
let extendedAbstraction = new ExtendedAbstraction(concreteBimplementationA);
client_code(extendedAbstraction);