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
## 4. Class
- Không hỗ trợ hoisting khi tạo thực thể từ class
- Vẫn hỗ trợ hoisting bên trong class
```javascript
class TestClass {
    constructor() {

    }
}
```