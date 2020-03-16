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

# II. Structure
## 1. Adapter/ Wrapper
>Adapter Pattern là pattern giữ vai trò trung gian giữa hai lớp, chuyển đổi giao diện của một hay nhiều lớp có sẵn thành một giao diện khác, thích hợp cho lớp đang viết. Điều này cho phép các lớp có các giao diện khác nhau có thể dễ dàng giao tiếp tốt với nhau thông qua giao diện trung gian, không cần thay đổi code của lớp có sẵn cũng như lớp đang viết. Adapter Pattern còn gọi là Wrapper Pattern do cung cấp một giao diện “bọc ngoài” tương thích cho một hệ thống có sẵn, có dữ liệu và hành vi phù hợp nhưng có giao diện không tương thích với lớp đang viết

### 1.1. Adapter trong thực tế
Adapter là một khái niệm rất thông dụng trong đời sống hàng ngày. Ta thường hay bắt gặp các loại adapter như: power adapter (chuyển đổi điện áp), laptop adapter (bộ sạc của laptop) hay memory card adapter… Các adapter này có nhiệm vụ chính là làm cầu nối trung gian để giúp hai đồ vật gì đó có thể hoạt động với nhau.

Ví dụ như laptop không sử dụng nguồn điện xoay chiều 224V, nên để laptop có thể sử dụng được nguồn điện 224V cần có một adapter làm cầu nối trung gian để chuyển nguồn điện xoay chiều 224V thành nguồn điện 1 chiều 12V. Một ví dụ khác là thẻ nhớ, trên thị trường có rất nhiều loại thẻ nhớ nhưng loại thịnh hành nhất ngày nay vẫn là loại micro-SD vì tính nhỏ gọn và phổ biến của nó, vậy nếu bạn có một thẻ micro-SD và một máy ảnh sử dụng thẻ SD, làm sao để có thể cắm thẻ micro-SD này vào máy ảnh? Khi đó ta sẽ sử dụng một adapter để chuyển “bề ngoài” của thẻ micro-SD thành SD để có thể cắm vào máy ảnh.

### 1.2. Adapter trong hướng đối tượng
Một trong những mục đích của hướng đối tượng là để giúp chúng ta có thể “phản ánh” (hay ánh xạ) tốt hơn các đối tượng ngoài thực tế vào trong lập trình. Vì lẽ đó mà ngoài thực tế có adapter thì trong hướng đối tượng cũng có thể có adapter với mục đích tương tự như adapter ngoài thực tế. Lấy lại ví dụ về một thẻ micro-SD và máy ảnh, nếu ta coi vẻ bề ngoài và kích thước của thẻ nhớ là một phần “giao diện” của thẻ nhớ, thì adapter thẻ nhớ đóng vai trò là một cầu nối trung gian để chuyển đổi “giao diện” của thẻ nhớ sao cho nó có thể phù hợp với máy ảnh.

Giả sử ta có một hệ thống phần mềm (hãy tưởng tượng nó là cái máy ảnh), và có một số đối tượng (hãy tưởng tượng nó là cái thẻ micro-SD) được một số developer viết ra nhưng có giao diện không phù hợp với hệ thống này, cách tốt nhất để có thể “ráp” các đối tượng này vào được hệ thống là tạo các adapter để chuyển đổi giao diện của các đối tượng này.

Để hiểu về sơ đồ mô tả Adapter Pattern thì trước hết bạn phải hiểu về 3 khái niệm:
- **Client**: Đây là lớp sẽ sử dụng đối tượng của bạn (đối tượng mà bạn muốn chuyển đổi giao diện)
- **Adaptee**: Đây là những lớp bạn muốn lớp Client sử dụng, nhưng hiện thời giao diện của nó không phù hợp
- **Adapter**: Đây là lớp trung gian, thực hiện việc chuyển đổi giao diện cho Adaptee và kết nối Adaptee với Client

### 1.3. Phân loại adapter
- **Composition**: Cấu thành. Nghĩa là một lớp B nào đó sẽ trở thành một thành phần của lớp A (một field trong lớp A). Tuy lớp A không kế thừa lại giao diện của lớp B nhưng nó có được mọi khả năng mà lớp B có
- **Inheritance**: Kế thừa. Nghĩa là một lớp Derived sẽ kế thừa từ lớp Base và thừa hưởng tất cả những gì lớp Base có. Nhờ kế thừa mà nó giúp tăng khả năng sử dụng lại code, tăng khả năng bảo trì và nâng cấp chương trình. Và do vậy kế thừa là khái niệm trọng tâm trong hướng đối tượng. Nhưng nó có một nhược điểm, đôi khi nếu chúng ta quá lạm dụng nó, nó sẽ làm cho chương trình của chúng ta phức tạp lên nhiều, điển hình là trong lập trình game. Do vậy đôi lúc trong lập trình game người ta thường có khuynh hướng thích sử dụng composition hơn

Và ứng với hai khái niệm này sẽ cho ta hai cách để chúng ta cài đặt lớp adapter: **Object Adapter** và **Class Adapter**