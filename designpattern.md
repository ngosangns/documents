# Design Pattern là gì?
Design Pattern ban đầu đơn giản là một khái niệm kiến trúc do Christopher Alexander gây dựng. Lần đầu tiên được ứng dụng vào phần mềm vào năm 1987 bởi Kent Beck and Ward Cunningham. Hai ông trình bày ý tưởng của mình trong một hội nghị. Sau đó Design Pattern trở thành khái niệm phổ biến và tiếp tuc phát triển cho đến ngày nay. Design Pattern lần đầu tiên được tổng hợp thành cuốn sách hoàn chỉnh vào năm 1995 trong cuốn `Design Patterns: Elements of Reusable Object-Oriented Software`.
Trong phát triển phần mềm, Design Pattern là giải pháp thiết kế mã để tái sử dụng chúng. Design Pattern được sử dụng mạnh mẽ nhất trong OOP qua Object và Class. Có rất nhiều Design Pattern, theo tổng kết của Gang of Four, hiện tại có hơn 250 mẫu đang được sử dụng trong phát triển phần mềm, tuy nhiên bạn không cần sử dụng hết 250 mẫu này, một lập trình viên giỏi Desgin Pattern chỉ cần sử dụng thành thạo khoảng 35 mẫu.

*Lưu ý: Design Pattern không phải thuật toán, không phải một component.*

| Creational | Structure | Behavioral |
| --- | --- | --- |
| Singleton | Adapter/ Wrapper | Chain of responsibility |
| Factory | Bridge | Command |
| Method Factory | Composite | Interpreter |
| Abstract Factory | Decorator | Iterator |
| Builder | Facade | Mediator |
| Object Pool | Proxy | Memento |
| Prototype | Flyweight | Observer |
| | Registry | Strategy |
| | Data Mapper | Template Method |
| | Dependency Injection | Visitor |
| | Fluent Interface | Null Object |
| | Delegation | Specification |
| | | State |
| | | Repository |
| | | Entity-Attribute-Value (EAV) |

*Trong document này mình sử dụng **Typescript** làm ngôn ngữ ví dụ*
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
## 3. Factory Method
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
class ConcreteProduct2 implements Product {
    doStuff() {
        return "Result of the ConcreteProduct2";
    }
}
```
- Định nghĩa Creator
```javascript
abstract class Creator {
    public abstract createProduct() : Product;
    someOperation() {
        // Call the factory method to create a Product object.
        let product : Product = this.createProduct();
        // Now, use the product.
        return `Creator: The same creator's code has just worked with ${product.doStuff()}`;
    }
}
```
- Tạo ra một instance của Creator
```javascript
class ConcreteCreator1 extends Creator {
    public createProduct() {
        return new ConcreteProduct1();
    }
}
class ConcreteCreator2 extends Creator {
    public createProduct() {
        return new ConcreteProduct2();
    }
}
```
- Client sử dụng
```javascript
function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}
console.log("App: Launched with the ConcreteCreator2\n");
clientCode(new ConcreteCreator2());
```
- Output
```
App: Launched with the ConcreteCreator2
The same creator's code has just worked with Result of the ConcreteProduct2
```

## 4. Abstract Factory
> Abstract Factory cung cấp một đối tượng bằng cách ẩn đi những sự phức tạp đằng sau nó, có nghĩa là chúng ta có một số lớp phức tạp nào đó mà được sử dụng theo từng ngữ cãnh cụ thể chúng có thể có một số chức năng, thuộc tính thống nhất theo một mô hình nào đó, có thể là một số lớp cấu trúc từ một lớp abstract, chúng ta sẽ kết hợp chúng lại để xử lý trong một lớp, mà ở đó mọi công việc xử lý được diễn ra và chỉ trả về những cái cần thiết, điều này giúp mô hình chặt chẽ và dễ dàng để sử dụng.

Mức độ sử dụng: Khá thường xuyên
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

### Phân biệt Abstract Factory và Factory Method
#### Giống nhau
- Đều là **Factory Pattern**
- Đều dùng để giảm sự phụ thuộc giữa chương trình với những cài đặt cụ thể
- Đều đóng gói (encapsulate) quá trình tạo ra đối tượng để giúp chương trình độc lập và giảm phụ thuộc với những kiểu cụ thể

#### Khác nhau
##### Factory Method
- Dùng các lớp để tạo ra products.
- Tạo ra các products, objects nhờ vào sự kế thừa (inheritance) nghĩa là nếu muốn tạo ra các đối tượng bằng cách Factory Method, người ta cần phải extend một lớp và override lại hàm tạo Factory Method, rồi Factory Method sẽ tạo ra 1 object
- Ý tưởng của Factory Method Pattern, là sẽ sử dụng các lớp con để sinh ra 1 đối tượng mong muốn. Bằng cách đó, người dùng sẽ chỉ cần biết đến lớp trừu tượng như gia cầm, và các lớp con cụ thể sẽ lo về các kiểu gà, kiểu vịt, kiểu ngan. Vì vậy, nói theo cách khác, nó giúp chương trình độc lập với các kiểu (type) cụ thể đó.
- Khi muốn bổ sung thêm một product nữa vào nhóm các products chỉ cần một method.
- Factory Method dùng hàm Factory Method để tạo ra product cụ thể mà người dùng muốn, họ sẽ không biết cái gì được tạo ra, mà chỉ cần gọi hàm.

##### Abstract Factory
- Dùng các đối tượng để tạo ra products.
- Tạo ra các products, objects nhờ vào sự kết hợp các đối tượng.
- Tạo ra một kiểu trừu tượng (abstract type) để dùng vào việc tạo ra một nhóm những products khác. Khi đó, những lớp con của kiểu trừu tượng sẽ xác định cách tạo ra các products này. Để áp dụng được ý tưởng này, phải tạo ra một instance của một trong các lớp con trên (instance này là 1 factory) và đưa nó vào chỗ cần thiết trong code. Vì thế, giống như Factory Method, những nơi sử dụng factory của Abstract Factory sẽ hoàn toàn độc lập với những products cụ thể. Một lợi ích nữa của cách này là các products tương tự nhau đã được nhóm lại. Vậy nên khi cần bổ sung thêm một product nữa vào nhóm các products mà Abstract Factory có thể tạo ra, người dùng phải đi đổi tất cả các lớp con (các lớp con ở đây là các factories). Người dùng rất không thích Abstract Factory ở điểm này.
- Có khả năng tạo ra nhiều kiểu products khác nhau.
- Abstract Factory thường sử dụng nhiều hàm Factory Method theo cách của Factory Method để tạo các đối tượng bên trong những factories của chính nó. Những lớp factory con thường dùng các Factory Method để tạo các products tương ứng. Trong trường hợp này, các Factory Method được dùng thuần túy để tạo ra các products.

#### Vậy khi nào nên dùng Abstract Factory, khi nào nên dùng Factory Method?
- **Abstract Factory**: sử dụng khi nào cần cùng một lúc tạo ra nhiều loại products, và khi muốn chắc chắn những nơi sử dụng sẽ không cần biết đến những lớp cụ thể khi cần làm việc này.

- **Factory Method**: dùng khi cần tạo ra một kiểu product nào đó thôi, sử dụng để làm cho chương trình độc lập với những lớp cụ thể mà ta cần tạo 1 đối tượng, hoặc khi không biết sau này sẽ cần đến những lớp con nào nữa. Khi cần sử dụng Factory Method, hãy tạo tạo ra subclass (1 factory implement 1 kiểu abstract) và implement Factory Method.

*Nguồn: quyển sách Head First – Design Pattern*

## 5. Builder
>Builder pattern được tạo ra để xây dựng một đôi tượng phức tạp bằng cách sử dụng các đối tượng đơn giản và sử dụng tiếp cận từng bước, việc xây dựng các đối tượng đôc lập với các đối tượng khác

- Mẫu thiết kế này cho phép lập trình viên tạo ra những đối tượng phức tạp nhưng chỉ cần thông qua các câu lệnh đơn giản để tác động nên các thuộc tính của nó.
- Muốn thay đổi thiết kế cho việc lồng nhau của các hàm khởi tạo (Telescoping Constructor Pattern). Vấn đề này phát sinh khi lập trình viên làm việc với một lớp mà có chứa rất nhiều các thuộc tính và cần phải tạo ra nhiều hàm khởi tạo với số lượng các thuộc tính tăng dần.
- Cần tạo ra một đối tượng phức tạp, một đối tượng mà thuật toán để tạo tạo lập các thuộc tính là độc lập đối với các thuộc tính khác.

### Ưu điểm
- Cung cấp thêm một cách khởi tạo đối tượng
- Hỗ trợ, loại bớt việc phải viết nhiều constructor

### Hạn chế
- Phải tạo builder cho từng class khác nhau.

Mức độ sử dụng: Thường xuyên

### **Builder Pattern** sẽ gồm có 4 thành phần chính
- **Product**: Đại diện cho đối tượng cần tạo, đối tượng này phức tạp, có nhiều thuộc tính
- **Builder**: Là abstract class hoặc interface khai báo phương thức tạo đối tượng
- **ConcreteBuilder**: Kế thừa Builder và cài đặt chi tiết cách tạo ra đối tượng. Nó sẽ xác định và nắm giữ các thể hiện mà nó tạo ra, đồng thời nó cũng cung cấp phương thức để trả các các thể hiện mà nó đã tạo ra trước đó
- **Director**: Là nơi sẽ gọi tới Builder để tạo ra đối tượng
### Cấu trúc
![](./images/builder_structure.png)

*Trên hình ta thấy **interface Builder** được trỏ đến nhiều nhất, do đó ta bắt đầu từ đây. Nhưng trước đó cần phải khai báo định nghĩa Product. Vì muốn xây dựng builder của sản phẩm thì ta phải biết về định nghĩa sản phẩm đó đã.*
- Định nghĩa danh sách sản phẩm
```javascript
class Product {
    constructor(
        private partA: string, 
        private partB: string, 
        private partC: string
    ) { }
    show() : string {
        return `This product has 3 parts: ${this.partA}, ${this.partB} and ${this.partC}`;
    }
}
```
- Định nghĩa **Builder**
```javascript
abstract class Builder {
    abstract BuildPartA(content: string): Builder;
    abstract BuildPartB(content: string): Builder;
    abstract BuildPartC(content: string): Builder;
    abstract GetResult(): Product;
}
```
- Tạo ra 2 mẫu bullder dùng để tạo 2 loại sản phẩm khác nhau
```javascript
class ConcreteBuilder1 extends Builder {
    private partA! : string;
    private partB! : string;
    private partC! : string;
    BuildPartA(content: string) : Builder {
        this.partA = content;
        return this;
    }
    BuildPartB(content: string) : Builder {
        this.partB = content;
        return this;
    }
    BuildPartC(content: string) : Builder {
        this.partC = content;
        return this;
    }
    GetResult() : Product {
        return new Product(this.partA, this.partB, this.partC);
    }
}
```
- Tạo ra **Director** sử dụng Builder
```javascript
class Director {
    private product! : Product;
    constructor(private builder : Builder) {
        this.product = this.builder.GetResult();
    }
    showProduct() {
        return this.product.show();
    }
}
```
- Client sử dụng
```javascript
let b1 : Builder = new ConcreteBuilder1();
let director : Director = new Director(
    b1.BuildPartA('Ngô')
    .BuildPartB('Quang')
    .BuildPartC('Sang')
);
console.log(director.showProduct());
```
- Output
```
This product has 3 parts: Ngô, Quang and Sang
```

## 6. Multiton
> Object Pool được sử dụng để quản lý bộ nhớ đệm lưu trữ các đối tượng. Một client có quyền truy cập vào Object pool thay vì tạo ra một đối tượng mới thì chỉ cần đơn giản yêu cầu các Object pool cho một đối tượng đã có sẵn trong object pool để thay thế. Object pool thông thường hoạt động theo kiểu: Tự tạo đối tượng mới nếu mình chưa có sẵn hoặc chúng ta có thể tự tạo 1 object pool chứa hạn chế đối tượng trong đó.

### Ví dụ
Cơ chế hoạt động của Object pool tương tự như một kho văn phòng. Khi một nhân viên mới được tuyển dụng, quản lý văn phòng phải chuẩn bị một không gian làm việc cho anh ta. Nếu các thiết bị phụ tùng đã có sẵn trong kho, quản lý sẽ đến kho và lấy các thiết bị đó. Nếu không, quản lý sẽ phải đặt mua các thiết bị mới. Trong trường hợp nếu một nhân viên bị sa thải, thiết bị của anh ta được chuyển tới nhà kho, các thiết bị đó có thể sử dụng cho một nhân viên mới nào đó sau này.
Nhìn từ ví dụ thực tế trên, chúng ta có thể thấy ngay vấn đề của object pool: Thứ nhất, sử dụng object pool đồng nghĩa với việc chúng ta phải tốn thêm tài nguyên cho đối tượng object pool. Quá rõ ràng, muốn lưu trữ thiết bị thì phải có nhà kho (trong thực tế công ty lại tốn chi phí, diện tích, nhân viên quản lý nhà kho). Thứ hai, nếu đồ trong kho quá cũ đến một thời điểm nào đó sẽ không sử dụng được. Ví dụ cần 1 Iphone 7s cho nhân viên mới, trong khi đó trong kho chỉ có Nokia 1080 ...(RIP). Trong trường hợp này, chúng ta vừa tốn tài nguyên mà lại không thể sử dụng được tài nguyên đó.
Ý tưởng chung cho mô hình Connection Pool là nếu các instances của một lớp có thể được tái sử dụng, thay vì khởi tạo một instances mới khi cần, bạn có thể tái sử dụng chúng.
### Ưu điểm
- Cải thiện tốc độ

### Nhược điểm
- Có thể tạo ra rác. Do đó cần dọn dẹp trong một khoảng thời gian cài đặt trước

### Sử dụng mẫu Object Pool khi
- Các đối tượng được tạo ra một cách khá tốn kém. Ví dụ: truy vấn database ... (phân bổ chi phí)
- Bạn cần tạo một số lượng lớn các đối tượng trong thời gian ngắn (phân mảnh bộ nhớ)
### Cấu trúc
![](./images/object_pool_structure.png)

- **Reusable**: Các đối tượng có thể tái sử dụng
- **Client**: Các lớp có vai trò sử dụng các đối tượng có thể tái sử dụng được
- **ReusablePool**: Các lớp có vai trò quản lý các đối tượng có thể tái sử dụng để cung cấp cho các đối tượng Client
