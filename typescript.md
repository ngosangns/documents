Thầy: Bạch Ngọc Toàn - TEDU Channel
# 1. Phần mềm cần thiết
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)

# 2. Cài đặt môi trường
- Mở command line và gõ lệnh cài đặt typescript:
    ```sh
    npm i typescript -g
    ```

## 2.1. Thao tác trên Visual Studio Code
- Tạo mới thư mục
- Tạo project typescript: Mở terminal *(Ctrl + Shift + \`)* chạy lệnh:
    ```sh
    tsc --init
    ```
- Tạo một file .ts và viết code. Để build code ta nhấn tổ hợp `Ctrl + Shift + B` chọn build

## 2.2. Tạo Lite Server
- Cài đặt lite-server trong thư mục project hiện tại
    ```sh
    npm i lite-server
    ```
- Add vào file `package.json` (Không có thì tạo mới)
    ```
    {
        "scripts": {
            "dev": "lite-server"
        }
    }
    ```
- Sau khi build xong chạy lệnh `npm run dev` để chạy lite-server

# 3. Kiến thức căn bản
## 3.1. Hoisting
> Là tính năng cho phép đưa các khai báo lên đầu sau khi build ra file js.
- Hoisting áp dụng với từ khóa `var`, không áp dụng với `let` và `const`

## 3.2. Từ khóa let
> Cũng như `var` nhưng không hỗ trợ Hoisting, tồn tại trong cặp dấu bracket {} chứa nó. Khác với `var` tồn tại trong function chứa nó.

## 3.3. Từ khóa const
> Là biến read-only. Không hỗ trợ Hoisting.
```javascript
const obj = {
    name: 'John'
}

obj.name = 'Jerry'; // Cho phép
obj = {
    name: 'Jerry'
} // Không cho phép
```

## 3.4. Cách gọi Intermately Function
```javascript
let testVar = 5;
(function(x) {
    console.log(x);
})(testVar);
```
## 3.5. Kiểu dữ liệu cơ bản
Cú pháp khai báo:
```
<let/var/public/private/...> <tên biến> : <kiểu dữ liệu> = <giá trị>;
// Ví dụ:
let testVar : boolean = true;
```
Các kiểu dữ liệu cơ bản:
- ***any***: Kiểu dữ liệu động
- ***boolean***: true/false
- ***number***: Kiểu số chung
- ***string***: Kiểu chuỗi
- ***array***: Mảng
    ```javascript
    // Ví dụ
    let testArray : number[] = {5,6,7};
    let testArray2 : Array<number> = {8,9,10};
    ```
- ***enum***
    ```javascript
    // Ví dụ
    enum Color {Red = 1, Green = 2, Blue = 4};
    let c: Color = Color.Green; // Kiểu number. Kết quả: 2
    let c: string = Color[2]; // Kiểu string. Kết quả: "Green"
    ```
- ***void***: Không trả về gì, có thể nhận giá trị `null` hoặc `undefined`
    ```javascript
    function testFunc(): void {
        console.log("Hello");
    }
    ```

## 3.6. Arrow Function
> Cách viết hàm ngắn (Dành cho các hàm có một lệnh return)
```javascript
// Ví dụ
function testFunc() {
    return 10000;
}
// Có thể khai báo lại là
let testFunc = () => 10000;
```

## 3.7. Từ khóa *this*
> Là từ khóa đại diện cho object hiện tại
```javascript
var employee = {
    id: 1,
    greet: function() {
        var self = this;
        console.log(this.id); // Kết quả: 1
        console.log(self.id); // Kết quả: 1
    }
}
employee.greet();
```

## 3.8. Default parameter
> Là tham số mặc định khi khai báo trong hàm
```javascript
// Ví dụ
let testFunc = (testPar1 : number = 1, testPar2 : number = 2) => {
    console.log(testPar1+testPar2);
}
testFunc(2,5); // Kết quả: 7 (2 + 5)
testFunc(undefined,5); // Kết quả: 6 (1 + 5)

// Ta có thể tính số lượng đối số
let testFunc2 = (testPar1 : number = 1, testPar2 : number = 2) => {
    console.log(arguments.length); // Kết quả: 2
}
```

## 3.9. Rest parameter
>Nhận một lượng tham số không xác định và hỗ trợ truy xuất lượng tham số đó
```javascript
var testFunc = function(...colors: any[]) {
    for(let i in colors) {
        console.log(color[i]);
    }
}
```
*Chúng ta có thể truyền vào một mảng (Spread parameter)*
```javascript
var testFunc = function(...colors: any[]) {
    for(let i in colors) {
        console.log(color[i]);
    }
}
colorArray = ['Red', 'Green', 'Blue'];
testfunc(...colorArray);
```

## 3.10. Bóc tách Array
```javascript
var employees = ['A', 'B', 'C'];

let [em1, em2, em3] = employees;
console.log(em1+" "+em2+" "+em3); // Kết quả: A B C

let [,, em3] = employees;
console.log(em3); // Kết quả: C

// Có thể sử dụng Rest parameter
let [...ems] = employees;
console.log(em1[0]+" "+em[1]+" "+em[2]); // Kết quả: A B C
```

## 3.11. Bóc tách object
```javascript
let employee = {
    fname : "Nguyễn",
    mname : "Văn",
    lname : "A"
}
let {fname, mname, lname} = employee;
console.log(fname+" "+mname+" "+lname); // Kết quả: Nguyễn Văn A

// Chuyển đổi tên biến để code tường minh
let {fname : f, mname: m, lname: l} = employee;
console.log(f+" "+m+" "+l); // Kết quả: Nguyễn Văn A
```

## 3.12. String template
```javascript
let fname = "Nguyễn";
let mname = "Văn";
let lname = "A";

console.log(`${fname} ${mname} ${lname}`); // Kết quả: Nguyễn Văn A
```

## 3.13. For in/For of
```javascript
let testArray = ['Nguyễn', 'Văn', 'A'];
for(let i in testArray) {
    console.log(i); // Kết quả 0 1 2
}
for(let i of testArray) {
    console.log(i); // Kết quả Nguyễn Văn A
}
```
## 3.14. Tuple
> Bản chất là một mảng nhưng có ràng buộc sử dụng đúng kiểu dữ liệu theo thứ tự
- Khai báo
```javascript
let student : [string, number]
student = ["John", 20];
```
## 4. Class
- Không hỗ trợ hoisting khi tạo thực thể từ class
- Vẫn hỗ trợ hoisting bên trong class
```javascript
class TestClass {
    constructor() {

    }
}
```
## 4.1. Kế thừa Class
- Khai báo class
```javascript
class Person {
    constructor(name) {
        console.log(name);
    }
    getId() {
        return 10;
    }
}
```
- Khai báo class kế thừa
```javascript
class Employee extends Person {
    constructor(name) {
        super(name);
        console.log(name+" employee person");
    }
    getId() {
        return super.getId();
    }
}
```
- Sử dụng class kế thừa
```javascript
var emp = new Employee("John");
console.log(emp.getId())
```
*Từ khóa **super** sử dụng để chỉ class cha*
## 4.2. Truyền tham số vào biến bằng constructor
- Khai báo bình thường
```javascript
class Person {
    public name;
    constructor(name) {
        this.name = name;
    }
}
```
- Khai báo ngắn gọn
```javascript
class Person {
    constructor(public name) {}
}
```
# 5. Module
## 5.1. Import/Export
- File moduleA.js
```javascript
export let name = "John";
```
- File moduleB.js
```javascript
import {name as n} from 'moduleA.js';
console.log(name) // Kết quả: John
```
##### Import/Export default: Không cần biết tên biến trong file export là gì
- File moduleC.js 
```javascript
let name = "John";
export default name;
```
- File moduleD.js
```javascript
import {default as name1} from "moduleC.js";
console.log(name);
```
# 6. Interface
> Khai báo, kiểm tra, ràng buộc cách triển khai dữ liệu của object, class,...
- Khai báo interface cho object
```javascript
interface Person {
    fname : string,
    readonly lname : string, // readonly thể hiện thuộc tính sẽ không bị ghi đè bởi các hàm triển khai
    age? : number // Dấu ? thể hiện không yêu cầu bắt buộc
}
```
- Triển khai từ interface
```javascript
function testFunc(person : Person) {
    console.log(person.fname);
}
```
# 7. Decorator
> Là một pattern cho phép thêm các hành vi, tính chất mới vào trong object, class, function,...
- Bật tính năng **Decorator**. Thêm vào file tsconfig.json
```json
{
    "compilerOptions": {
        ...
        "experimentalDecorators": true
    }
}
```
Một số ví dụ cho Decorator
- @enumerable(trigger: boolean) : Cho phép return về kiểu số hay không
```javascript
@enumerable(false) // Không cho phép return về kiểu số
greet() {
    return "John";
}
```
- @validate : Kiểm tra lỗi, tính hợp lệ đầu vào
```javascript
@validate
greet(@required name : string) { // Bắt buộc phải truyền tham số name
    return name;
}
```
- Ví dụ **Component Decorator** trong **Angular**
```javascript
@Component({
    selector: "my-app", // Chỉ tên tag để gọi Component
    template: "<h1>Welcome to {{name}} Decorator</h1>" // Template cho Component
})
export class AppComponent {
    name : string "John";
}
```
```html
<body>
    <my-app></my-app>
</body>
```
---
Từ đoạn này sẽ là sưu tầm bên ngoài
# 8. Tips
## 8.1. Arguments
Arguments là một biến cục bộ trong function, chứa toàn bộ các tham số được truyền vào
```js
function test(firstParam, secondParam, thirdParam){
  var args = Array.apply(null, arguments);
  console.log(args);
}
test(1, 2, 3); // [1, 2, 3]
```

## 8.2. Cài đặt "this" khi gọi hàm
Từ khóa this dùng để trỏ tới chính object gọi hàm đó.
```js
var person = {
  firstName: 'Hoang',
  lastName: 'Pham',
  showName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};
//Ở đây this sẽ là object person
person.showName(); // Hoang Pham
```
Khi ta khai báo biến global và hàm global, toàn bộ các biến và hàm đó sẽ nằm trong một object có tên là *window*. Lúc này, khi ta gọi hàm *showName*, chính object window là object gọi hàm đó, *this* trỏ tới chính object *window*.
```js
var firstName = 'Hoang', lastName = 'Pham';
// 2 biến này nằm trong object window
function showName()
{
  console.log(this.firstName + ' '+ this.lastName);
}
window.showName(); // Hoang Pham. this trỏ tới object window
showName(); // Hoang Pham
```
Trong nhiều trường hợp, khi ta gọi hàm mà code (bên trong hàm có chứa *this*) bên trong các đối tượng, thì *this* bên trong hàm sẽ trỏ về đối tượng đó
```js
var person = {
  firstName: 'Hoang',
  lastName: 'Pham',
  showName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};
$('button').click(person.showName);
// showName truyền vào như callback
// Ở đây this chính là button 
// nên không thể hiện được this.firstname và this.lastname
```
Để sửa lỗi ta có thể dùng 2 cách
- Dùng **anonymous function** để gọi hàm đó (Lưu ý: Mặc định bên trong anonymous function thì từ khóa this luôn trỏ về window)
- Dùng **bind()**
```js
// Dùng anonymous function
$('button').click(function(){ person.showName() });

// Dùng bind
$('button').click(person.showName.bind(person));
// this ở đây vẫn là object person
```
Cú pháp hàm **bind()** (tương tự hàm **call()**):
```js
funcName.bind(thisName[, arg1[, arg2[,..]]])
```
Ngoài ra còn có hàm **apply()** tương tự **bind()** với cú pháp:
```js
funcName.apply(thisName[, argsArray])
```
Hàm **bind()**, **call()** và **apply()** có thể được dùng để viết **partial function** (tạo ra 1 function mới từ 1 function cũ bằng cách gán mặc định một số tham số cho function cũ đó)
**Partial function** không dùng **bind()**:
```js
function log(level, time, message) {
  console.log(level + ' - ' + time + ': ' + message);
}
function logErrToday(message) {
  log("Error", "Today", message);
}

logErrToday("Server die."); // Error - Today: Server die.

function log(level, time, message) {
  console.log(level + ' - ' + time + ': ' + message);
}
```
**Partial function** dùng **bind()**:
```js
function log(level, time, message) {
  console.log(level + ' - ' + time + ': ' + message);
}

// Không có this nên set this là null
// Set mặc định 2 tham số level và time
var logErrToday = log.bind(null, 'Error', 'Today');

// Hàm này tương ứng với log('Error', 'Today', 'Server die.')
logErrToday("Server die."); 
// Error - Today: Server die.
```
**call()** và **apply()** còn được dùng để mượn hàm (**borrowing function**)
```js
function test(firstParam, secondParam, thirdParam){
  var args = Array.apply(null, arguments);
  console.log(args);
}
test(1, 2, 3); // [1, 2, 3]
```
*arguments* là một object giống array nhưng không phải là array. *arguments* giống array vì nó có field length, có thể truy cập các giá trị nó chứa thông qua index 0,1,2. Tuy nhiên, do *arguments* không phải là array nên nó không thể gọi các hàm của *Array.prototype*. Do đó ta dùng **apply()** để chuyển object *arguments* thành Array.

Ngoài ra, **call()** và **apply()** còn được dùng để *monkey-patching* hoặc tạo *spy*. Ta có thể mở rộng chức năng của một hàm mà không cần sửa source code của hàm đó.
```js
var computer = {
  accessWeb : function(site) {
    console.log ('Go to: ' + site);
  }
};

var oldFunction = computer.accessWeb;
// Tráo function accessWeb bằng hàm mới
computer.accessWeb = function() {
  console.log('Con gà bắt đầu vào web');
  oldFunction.apply(this, arguments); // giữ nguyên hàm cũ
  console.log('Con gà đã vào web');
}

computer.accessWeb('thiend*a.com'); 
// Con gà bắt đầu vào web
// Go to: thiend*a.com
// Con gà đã vào web
```

## 8.3. Map và Set
- **Map** là cấu trúc dữ liệu cho phép ta lưu dữ liệu dưới dạng Key-Value. 
- **Set** là một mảng mà trong đó không có phần tử nào trùng nhau.
```js
// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;
```

## 8.4. Array reduce
Method **reduce()** cho phép chúng ta lặp qua tất cả các phần tử và áp dụng một function nào đó vào mỗi phần tử, function này có các tham số:
- **accumulator**: giá trị trả về từ các lần call callback trước
- **currentValue**: giá trị của phần tử hiện tại trong array
- **currentIndex**: index của phần tử hiện tại
- **array**: chính là mảng hiện tại
```js
const arr = [1, 2, 3, 4, 5];
const val = arr.reduce((acc, current) => acc * current, 1);
console.log(val); // 120
```
Ngoài ra, chúng ta còn có thể cung cấp giá trị ban đầu *initialValue* sau tham số function đầu tiên.

## 8.5 Flatten Array
Trong nhiều tình huống, chúng ta có các array, bên trong mỗi phần tử có thể là các array khác, lúc này chúng ta có nhiệm vụ làm giảm số chiều (*flatten*) đi chẳng hạn, chúng ta có thể có đoạn code xử lý sau trong Javascript.
```js
Array.prototype.concatAll = function() {
  return [].concat.apply([], this);
};
const arr = [1, [2, 3], [4, 8, 0], [5]];
const flatten = arr.concatAll();

console.log(arr, flatten);
// [1, [2, 3], [4, 8, 0], [5]]
// [1, 2, 3, 4, 8, 0, 5]
```

# 9. Bất đồng bộ 
Bất đồng bộ là một cơ chế đặc biệt trong Javascript, trong đó khi hàm xử lí đến câu lệnh bất đồng bộ, thì các câu lệnh phía sau sẽ chạy luôn mà không cần đợi câu lệnh bất đồng bộ xử lí xong. Sau đó hàm sẽ quay lại xử lí **callback** của câu lệnh bất đồng bộ.
Ví dụ: Javascript kết nối với server theo cơ chế bất đồng bộ
```js
// Truyền callback vào hàm ajax
var callback =  function(image){
  console.log(image);
};
ajax.get("gaixinh.info", callback);

// Có thể viết gọn như sau
ajax.get("gaixinh.info", function(image) {
  console.log(image);
})
```
Cách làm này có gì không ổn? Sử dụng **callback** chồng chéo sẽ làm code trở nên rối rắm, khó đọc; việc bắt *exception*, hiển thị lỗi trở cũng nên phức tạp.
```js
// Do những hàm dưới chạy bất đồng bộ, bạn không thể lấy dữ liệu lần lượt kiểu này
var xe = xin_mẹ_mua_xe(); // Chờ cả năm mới có xe
var gái = chở_gái_đi_chơi(xe); // Lấy xe chở gái đi chơi
var abcd = chở_gái_vào_hotel(y); // Đi chơi xong chở gái đi đâu đó

// Mà phải sử dụng đống callback "gớm ghiếc", tạo thành callback hell
xin_mẹ_mua_xe(function(xe) {
    chở_gái_đi_chơi(xe, function(gái) {
        chở_gái_vào_hotel(hotel, function(z) { 
            // Làm gì đó, ai biết
        });
    });
});
```
Do đó, để giải quyết vấn đề này ta sử dụng **Promise**

## 9.1. Promise
Promise có 3 trạng thái sau:
- **pending**: Hiện lời hứa chỉ là lời hứa suông, còn đang chờ người khác thực hiện
- **fulfilled**: Lời hứa đã được thực hiện
- **reject**: Bạn đã bị thất hứa, hay còn gọi là bị “xù”
```js
function hứa_cho_có() {
  return Promise((thuc_hien_loi_hua, that_hua) => {
    if (vui) {
      thuc_hien_loi_hua("Xe BMW");
    } else {
      that_hua("Xe dap");
    }
  });
}

var promise = hứa_cho_có(); 
promise
  .then((xe_bmw) => {
    console.log("Được chiếc BMW vui quá");
  })
  .catch((xe_dap) => {
    console.log("Được chiếc xe đạp ....");
  });
```
Khi lời hứa được thực hiện, **Promise** sẽ gọi **callback** trong hàm *then*. Ngược lại, khi bị thất hứa, **Promise** sẽ gọi **callback** trong hàm *catch*.

### 9.1.1. Ưu điểm của Promise
- Hỗ trợ “chaining”
- Giúp bắt lỗi dễ dàng hơn
- Xử lý bất đồng bộ

## 9.2. Promise chaining
Giá trị trả về của hàm **then** là 1 **promise** khác. Do vậy ta có thể dùng **promise** gọi liên tiếp các hàm bất đồng bộ.
```js
xin_mẹ_mua_xe
  .then(chở_gái_đi_chơi)
  .then(chở_gái_vào_hotel)
  .then(function() { /*Làm gì đó, ai biết*/ });
```
## 9.3. Promise all
Chạy cùng lúc nhiều hàm bất đồng bộ và đợi cho tất cả đều trả về kết quả
```js
// Ba hàm này phải được thực hiện "cùng lúc"
// chứ không phải "lần lượt"
var sờ_trên = new Promise((resolve, reject) => {
    resolve("Phê trên");
});
var sờ_dưới = new Promise((resolve, reject) => {
    resolve("Phê dưới");
});
var sờ_tùm_lum = new Promise((resolve, reject) => {
    resolve("Phê tùm lum chỗ");
});

// Truyền 1 array chứa toàn bộ promise vào hàm Promise.all
// Hàm này trả ra 1 promise array, tổng hợp kết quả của các promise đưa vào
Promise.all([sờ_trên, sờ_dưới, sờ_tùm_lum])
  .then(function(result) {
    console.log(result); // ["Phê trên", "Phê dưới", "Phê tùm lum chỗ"]
  }) 
```

# 10. Prototype
Là khuôn hoặc là cha của một object.
- Trong JavaScript, trừ **undefined**, toàn bộ các kiểu còn lại đều là object
- Trong JavaScript, việc kế thừa được hiện thực thông qua **prototype**. Khi ta gọi *property* hoặc *function* của một object, JavaScript sẽ tìm trong chính object đó, nếu không có thì tìm lên cha của nó. Ví dụ: Ta có thể gọi các hàm *toUpperCase*, *trim* trong String là do các hàm đó đã tồn tại trong String.prototype
- Khi ta thêm function cho prototype, toàn bộ những thằng con của nó cũng học được function tương tự
```js
var str = 'abc'; // str là string, cha nó là String.prototype
// nhân đôi chuỗi đưa vào
String.prototype.duplicate = function() { return this + this; }
console.log(str.duplicate()); // Tìm thấy hàm duplicate trong prototype
```
- *Array*, *Number* hay *String* có cha là Object, do đó chúng đều có các hàm như *constructor*, *hasOwnProperty*, *toString* thuộc về của *Object.prototype*
