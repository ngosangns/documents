# Design Pattern là gì?
Design Pattern ban đầu đơn giản là một khái niệm kiến trúc do Christopher Alexander gây dựng. Lần đầu tiên được ứng dụng vào phần mềm vào năm 1987 bởi Kent Beck and Ward Cunningham. Hai ông trình bày ý tưởng của mình trong một hội nghị. Sau đó Design Pattern trở thành khái niệm phổ biến và tiếp tuc phát triển cho đến ngày nay. Design Pattern lần đầu tiên được tổng hợp thành cuốn sách hoàn chỉnh vào năm 1995 trong cuốn `Design Patterns: Elements of Reusable Object-Oriented Software`.
Trong phát triển phần mềm, Design Pattern là giải pháp thiết kế mã để tái sử dụng chúng. Design Pattern được sử dụng mạnh mẽ nhất trong OOP qua Object và Class. Có rất nhiều Design Pattern, theo tổng kết của Gang of Four, hiện tại có hơn 250 mẫu đang được sử dụng trong phát triển phần mềm, tuy nhiên bạn không cần sử dụng hết 250 mẫu này, một lập trình viên giỏi Desgin Pattern chỉ cần sử dụng thành thạo khoảng 23 mẫu.

*Lưu ý: Design Pattern không phải thuật toán, không phải một component.*

| Creational | Structure | Behavioral |
| --- | --- | --- |
| Abstract factory | Adapter | Chain of responsibility |
| Builder | Bridge | Command |
| Factory | Composite | Interpreter |
| Prototype | Decorator | Iterator |
| Singleton | Facade | Mediator |
| Flyweight | Memento | Memento |
| | Proxy | Observer |
| | | Strategy |
| | | Template Method |
| | | Visitor |

# I. Creational Pattern
## 1. Singleton
> Tạo ra 1 instance từ 1 class sử dụng cho toàn hệ thống và đảm bảo không có instance thứ 2 được tạo ra. Sử dụng khi muốn chạy 1 chương trình con độc lập để kiểm tra và xử lí cho toàn hệ thống
```javascript
public class Singleton {
    private constructor() {} // Private constructor để các class khác không thể tạo instance mới
    
    // Cách này là cách đơn giản nhất nhưng nhược điểm là instance tạo ra nhưng có thể không được sử dụng
    // private static instance: Singleton = new Singleton();
    // public static getInstance() : Singleton {
    //     return Singleton.instance;
    // }

    // Cách viết này chỉ khởi tạo instance khi có class gọi đến
    private static instance: Singleton;
    public static getInstance() : Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // Method
    public helloWorld() {
        console.log("Hello World");
    }
}
Singleton.getInstance().helloWorld(); // Kết quả: "Hello World"
```
*Do javascript chỉ có đơn luồng nên không cần quan tâm đến vấn đề 2 class gọi đến instance cùng lúc (tạo ra 2 instance cùng lúc)*

## 2. Factory
>Quản lý và trả về các đối tượng theo yêu cầu, giúp cho việc khởi tạo đổi tượng một cách linh hoạt hơn. Thường áp dụng để khởi tạo các đối tượng từ các class tương tự nhau (thường là implement từ 1 interface).

##### Chức năng:
- Tạo ra 1 cách mới trong việc khởi tạo Object
- Che giấu xử lý logic của việc khởi tạo (Trong trường hợp bạn đang muốn viết 1 thư viện để người khác sử dụng)
- Giảm sự phụ thuộc: Nếu có class nào extend class CarFactory để sử dụng thì khi thêm xe mới vào chỉ sửa từ phần class CarFactory trở lên thôi

Ví dụ: Một xưởng sản xuất xe muốn trưng bày cho khách, nhưng có nhiều loại xe khác nhau, vì vậy xưởng phải lấy hết trong kho mỗi hãng 1 chiếc nhưng chỉ đưa cho khách hàng xem 1 loại xe mà khách hàng cần, gây nên tốn tài nguyên không cần thiết.

- Tạo ra các mẫu xe:
```javascript
interface Car {
    viewCar(): void;
}
class Honda implements Car {
    viewCar() {
        console.log("Honda-chan");
    }
}
class Nexus implements Car {
    viewCar() {
        console.log("Nexus-chan");
    }
}
class Toyota implements Car {
    viewCar() {
        console.log("Toyota-chan");
    }
}
```
- **Cách bình thường**: Chuẩn bị toàn bộ xe mỗi loại 1 chiếc
```javascript
class CarFactory {
    public honda : Honda = new Honda();
    public nexus : Nexus = new Nexus();
    public toyota : Toyota = new Toyota();
}
var viewCar = new CarFactory();
car.honda.viewCar(); // Kết quả "Honda-chan"
```
- **Factory pattern**: Chỉ chuẩn bị loại xe mà khách yêu cầu
```javascript
class CarFactory {
    public car!: Car;
    constructor(carType : string) {
        switch(carType) {
            case "HONDA": {
                this.car = new Honda();
                break;
            }
            case "NEXUS": {
                this.car = new Nexus();
                break;
            }
            case "TOYOTA": {
                this.car = new Toyota();
            }
        }
    }
}
var car = new CarFactory("TOYOTA");
car.car.viewCar();
```
## 3. Abstract Factory
> Abstract Factory cung cấp một đối tượng bằng cách ẩn đi những sự phức tạp đằng sau nó, có nghĩa là chúng ta có một số lớp phức tạp nào đó mà được sử dụng theo từng ngữ cãnh cụ thể chúng có thể có một số chức năng, thuộc tính thống nhất theo một mô hình nào đó, có thể là một số lớp cấu trúc từ một lớp abstract, chúng ta sẽ kết hợp chúng lại để xử lý trong một lớp, mà ở đó mọi công việc xử lý được diễn ra và chỉ trả về những cái cần thiết, điều này giúp mô hình chặt chẽ và dễ dàng để sử dụng.

Sử dụng: Khá thường xuyên
##### Cấu trúc:
![](./images/abstract_factory_structure.png)
- Trước tiên ta định nghĩa sản phẩm ta muốn tạo ra là gì
```javascript
interface AbstractProductA {
    functionA(): string;
}
interface AbstractProductB {
    functionB(): string;
}
```
- Tạo ra một định nghĩa về nhà máy sản xuất sản phẩm A và B
```javascript
interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}
```
- Tạo ra 2 nhà máy sản xuất 2 loại sản phẩm A và B nhưng khác phiên bản (nhà máy 1 sản xuất phiên bản 1, nhà máy 2 sản xuất phiên bản 2).
- Nhưng trước khi xây nhà máy ta cần tạo ra một mẫu (class) cho sản phẩm muốn sản xuất đã, để nhà máy ta tạo ra biết rằng ta muốn tạo ra sản phẩm như thế nào
```javascript
class ConcreteProductA1 implements AbstractProductA {
    functionA(): string {
        return "The result of the product A1.";
    }
}
class ConcreteProductA2 implements AbstractProductA {
    functionA(): string {
        return "The result of the product A2.";
    }
}
class ConcreteProductB1 implements AbstractProductB {
    functionB(): string {
        return "The result of the product B1.";
    }
}

class ConcreteProductB2 implements AbstractProductB {
    functionB(): string {
        return "The result of the product B2.";
    }
}
```
- Ta bắt đầu xây nhà máy sản xuất
```javascript
class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}
class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}
```
- Client sử dụng
```javascript
function clientCode(factory: AbstractFactory) {
    let product_a = factory.createProductA();
    let product_b = factory.createProductB();

    console.log(product_b.functionB());
}

console.log("Client: Testing client code with the first factory type");
clientCode(new ConcreteFactory1());
console.log("Client: Testing the same client code with the second factory type");
clientCode(new ConcreteFactory2());
```
- Output
```
Client: Testing client code with the first factory type
The result of the product B1.
Client: Testing the same client code with the second factory type
The result of the product B2.
```
Rút ra:
- Muốn tạo ra sản phẩm gì cần phải định nghĩa nó trước
- Muốn xây nhà máy sản xuất sản phẩm thì cần phải định nghĩa và tạo mẫu sản phẩm rồi mới đến định nghĩa và tạo ra nhà máy
- Bản chất là việc tạo ra nhiều lớp, định nghĩa và kết hợp chúng để giảm sự phụ thuộc và dễ bảo trì, nâng cấp. Nếu muốn thêm một sản phẩm mới thì chỉ việc thêm code chứ không sửa code.
## 4. Factory Method
>Factory Method là một mẫu thiết kế sáng tạo giúp giải quyết vấn đề tạo ra các đối tượng sản phẩm mà không cần chỉ định các lớp cụ thể của chúng.
- Pattern này được sinh ra nhằm mục đích khởi tạo đối tượng mà bản thân muốn che giấu class nào được khởi tạo.
- Factory Method định nghĩa một phương thức, nên được sử dụng để tạo các đối tượng thay vì gọi hàm dựng trực tiếp (toán tử new). Các lớp con có thể ghi đè phương thức này để thay đổi lớp đối tượng sẽ được tạo.

##### Cấu trúc: 
![](./images/method_factory_structure.png)
*Trên hình ta thấy interface **Product** được trỏ đến nhiều nhất, do đó ta bắt đầu định nghĩa từ đây.*
*Trên hình ta chia ra làm 2 phần (trên và dưới). Phía trên ta xem như hợp đồng mà 2 sếp kí kết với nhau, còn phía dưới là nhân viên 2 bên giao tiếp với nhau nhờ các điều khoản hợp tác trong bản hợp đồng.*
- Định nghĩa Product
```javascript
interface Product {
    doStuff() : void;
}
```
- Tạo ra mẫu sản phẩm từ định nghĩa Product
```javascript
class ConcreteProduct1 implements Product {
    doStuff() {
        return "Result of the ConcreteProduct1";
    }
}
```
- Định nghĩa Creator
```javascript
abstract class Creator {
    public abstract factoryMethod() : Product;
    someOperation() {
        // Call the factory method to create a Product object.
        let product : Product = this.factoryMethod();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.doStuff()}`;
    }
}
```
- Tạo ra một instance của Creator
```javascript
class ConcreteCreator1 extends Creator {
    public factoryMethod() {
        return new ConcreteProduct1();
    }
}
```
- Client sử dụng
```javascript
function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}
console.log("App: Launched with the ConcreteCreator1.\n");
clientCode(new ConcreteCreator1());
```
- Output
```
App: Launched with the ConcreteCreator1.
The same creator's code has just worked with Result of the ConcreteProduct1
```
### Phân biệt Abstract Factory và Factory Method
#### Giống nhau
- Đều là factory pattern
- Đều dùng để giảm sự phụ thuộc giữa chương trình với những cài đặt cụ thể (với 2 cách làm riêng)
- Đều đóng gói (encapsulate) quá trình tạo ra đối tượng để giúp chương trình độc lập và giảm phụ thuộc với những kiểu cụ thể

#### Khác nhau

Factory Method | Factory Abstract
--- | ---
Dùng các lớp để tạo ra products | Dùng các đối tượng để tạo ra products
Tạo ra các products, objects nhờ vào sự kế thừa (inheritance) nghĩa là nếu muốn tạo ra các đối tượng bằng cách Factory Method, người ta cần phải extend một lớp và override lại hàm tạo Factory Method, rồi Factory Method sẽ tạo ra 1 object | Tạo ra các products, objects nhờ vào sự kết hợp các đối tượng
Ý tưởng của Factory Method Pattern, là sẽ sử dụng các lớp con để sinh ra 1 đối tượng mong muốn. Bằng cách đó, người dùng sẽ chỉ cần biết đến lớp trừu tượng như gia cầm, và các lớp con cụ thể sẽ lo về các kiểu gà, kiểu vịt, kiểu ngan. Vì vậy, nói theo cách khác, nó giúp chương trình độc lập với các kiểu (type) cụ thể đó | Ý tưởng cũng giống giống vậy nhưng làm theo một cách khác : tạo ra một kiểu trừu tượng (abstract type) để dùng vào việc tạo ra một nhóm những products khác. Khi đó, những lớp con của kiểu trừu tượng sẽ xác định cách tạo ra các products này. Để áp dụng được ý tưởng này, phải tạo ra một instance của một trong các lớp con trên (instance này là 1 factory) và đưa nó vào chỗ cần thiết trong code. Vì thế, giống như Factory Method, những nơi sử dụng factory của Abstract Factory sẽ hoàn toàn độc lập với những produtcts cụ thể. Một lợi ích nữa của cách này là các products tương tự nhau đã được nhóm lại. Vậy nên khi cần bổ sung thêm một product nữa vào nhóm các products mà Abstract Factory có thể tạo ra, người dùng phải đi đổi tất cả các lớp con (các lớp con ở đây là các factories). Người dùng rất không thích Abstract Factory ở điểm này
Khi muốn bổ sung thêm một product nữa vào nhóm các products chỉ cần một method | Có khả năng tạo ra nhiều kiểu products khác nhau
Factory Method dùng hàm Factory Method để tạo ra product cụ thể mà người dùng muốn, họ sẽ không biết cái gì được tạo ra, mà chỉ cần gọi hàm | Abstract Factory thường sử dụng nhiều hàm Factory Method theo cách của Factory Method để tạo các đối tượng bên trong những factories của chính nó. Những lớp factory con thường dùng các Factory Method để tạo các products tương ứng. Trong trường hợp này, các Factory Method được dùng thuần túy để tạo ra các products