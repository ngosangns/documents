## 1. Required
- HTML/CSS/JS basic
- ES6
- Typescript

## 2. Installation
- [**Node.js**](https://nodejs.org/en/)
- Install **Typescript**
```
npm install -g typescript
```
- Install [**Angular CLI**](https://github.com/angular/angular-cli)
```
npm install -g @angular/cli 
```

## 3. First App
- Create new app (app name: HelloWorld):
```
ng new HelloWorld
```
- Cd app, build and run app:
```
cd HelloWorld
ng serve [--o (Auto open in browser)]
ng serve [--port 3000 (Change port, default port is 4200)]
```

## 4. Text Editor
- [**Sublime Text**](https://www.sublimetext.com/3)
- Extensions: 
	- HTML-CSS-JS Prettify (Node.js needed)
	- Typescript (Shortcut: Ctrl + T + F)
	- Emmet (Quick creating html tag)
	- Bootstrap 4
	- Sidebar

## 5. Component
### 5.1. Tổng quan
- Là các khối lắp ghép trên ứng dụng, giúp tạo ra các tag html do mình tự định nghĩa
- Có class để chứa dữ liệu và các phương thức
- Import Component từ thư viện **Angular Core**:
```
import { Component } from '@angular/core';
```
- Khai báo Component (file *app.component.ts*):
```
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	})
```
- Tạo Component bằng command:
```
ng g c tên-Component
# Khi chạy xong Component sẽ được khai báo trong app module gần nhất (app.module.ts)
```
- Gọi Component trong file HTML:
```
<tên-Component></tên-Component>
# Tên Component lấy từ giá trị selector trong file typescript của Component
```

### 5.2 Data Binding
#### 5.2.1. Component -> View
- Interpolation (thường dùng để truyền string): `{{ value }}`
```
# Khai báo trong file .ts
# Khai báo biến
[access: public, private,...] tên-biến : kiểu-dữ-liệu = giá trị;

# VD Chèn theo kiểu Interpolation
href="{{ tên-biến }}"
```
- Property Binding (thường dùng để truyền thuộc tính custom) `[property-name] = "value"`
```
# VD Chèn theo kiểu Property Binding
[href] = "tên-biến" 
```
- Attribute Binding (thường dùng để truyền thuộc tính được hỗ trợ) `[attr.tên-thuộc-tính] = "value"`
```
# VD Chèn theo kiểu Attribute Binding
[attr.href] = "tên-biến"
# Mỗi tag trong html đều có attribute riêng trong typescript, Google để tìm hiểu thêm
```
- Class Binding (thường dùng cho class) `[class.class-name] = "condition"`
```
# VD Chèn theo kiểu Class Binding
[class.text-danger] = "true"
```
- Style Binding (thường dùng cho style) `[style.style-name] = "value"`
```
# VD Chèn theo kiểu Style Binding
[style.text-align] = "center"
[style.font-size.px] = "50" # Thêm đơn vị cho style
```

#### 5.2.2. View -> Component
- Event Binding (dùng để bắt sự kiện từ người dùng)
```
# Dùng ngoặc tròn thay vì ngoặc vuông
# Dùng để bắt sự kiện
(event) = "tên-function hoặc lệnh đơn"

# VD
(keydown) = "count = count + 1"
# VD 2
(keydown) = "function2($event)" # Đặt chính xác là $event để nhận sự kiện
```

#### 5.2.3. Two ways binding
> Thường được dùng trong form (input/select/....)

- Import thư viện và khai báo (file *app.component.ts*):
```
# Import
import { FormsModule } from '@angular/forms';

# Khai báo trong @NgModule phần imports

# Cú pháp
[(ngModel)] = "tên-biến-muốn-đồng-bộ"
```

## 6. Build-in Directives
Là một thành phần mở rộng của HTML, hay nói cách khác là các thuộc tính (properties) của các thẻ HTML mà Angular nó định nghĩa thêm, vì nó là của riêng Angular nên phải tuân theo các nguyên tắc của Angular

### 6.1. Directives in Angular
- Component
- Attribute Directive
- Structual Directive

### 6.2. Structual Directive
-  ngIf
	- Dùng trong thẻ tag, dùng để hiển thị hoặc không một tag nào đó 
	- Cú pháp
```
*ngIf="condition"

# Cú pháp có then
*ngIf="condition; then tên-block-muốn-trỏ-đến"

# Cú pháp có else
*ngIf="condition; else tên-block-muốn-trỏ-đến"

<ng-template #tên-block>
	tag
</ng-template>
```
	- ngIf có thể sử dụng trong ng-template
	- ng-template không hiển thị ra source html
	- Nếu sử dụng ngIf ở ng-template thì nội dung bên trong ng-template đó sẽ không hiển thị ra ngoài cho dù điều kiện đúng. Để sửa lỗi ta dùng ng-container thay thế
- ngFor
	- Dùng cho mảng
	- Cú pháp
```
*ngFor="let biến-lặp-for-each of tên-mảng[; let i = index[; let f = even[; trackby : tên-function]]]"
# i là biến đếm, f là true nếu là số chẵn, ngược lại là false
```
	- function(index, item) của trackby nhận đầu vào để xử lí và return về
	- Biến lặp có hiệu lực trong thẻ tag
- ngSwitch
	- Dùng cho mảng
	- Cú pháp
```
# Tạo biến dùng để so sánh (Binding từ typescript ra)
[ngSwitch] = "tên-biến"
# Hàm switch (Sử dụng bên trong thẻ khai báo biến ngSwitch)
*ngSwitchCase = "giá-trị"
# Giá trị mặc định
*ngSwitchDefault
```

#### 6.2.1 ngClass, ngStyle, @Input, @Output (Đang cập nhật)

## 7. Lifecycle Hook: Vòng đời của ứng dụng
### 7.1. **Constructor**: Gọi đầu tiên khi implement component
```
constructor() {
	code...
}
```
### 7.2. Lifecycle Hook
Khai báo
```
# Typescript
import { tên-hook-1(bỏ ng), tên-hook-2(bỏ ng) } from '@angular/core';
```
Một số Lifecycle Hook:

- **ngOnChanges**: Bắt sự kiện thay đổi Input và quản lí thông qua SimpleChanges (Chạy trước ngOnInit)
```
ngOnChanges(simpleChanges : SimpleChanges) {
	code...
}
```
- **ngOnInit**: Chạy sau constructor và ngOnChanges
- **ngOnDestroy**: Chạy trước khi kết thúc componennt
- **ngOnCheck**: Chạy sau mỗi lần gọi ngOnInit và ngOnChange (Mục đích kiểm tra giá trị truyền lên/xuống)

#### 7.2.1. ngContent: hỗ trợ đổ dữ liệu từ tag html của component	
##### 7.2.1.1. Tổng quan
- Gọi component
```
<my-component>
	Content
</my-component>
```
- Xác định vị trí đổ content trong component
```
# Đổ content không query
<ng-content></ng-content> # Thẻ xác định nơi mà content khai báo thêm bên trên sẽ đổ vào
# Đổ content có query
<ng-content select="x"></ng-content>
# (Trong đó x có thể là class, thẻ tag, attribute, attribute có value (query giống css))
```

##### 7.2.1.2. Một số Lifecycle Hook và thư viện cho ngContent
- **ContentChild, ElementRef**: Lấy dữ liệu từ ng-content	
	- Khai báo
	```
	import { ContentChild, ElementRef } from "@angular/core";
	```
	- Tạo đối tượng trong ng-content
	```
	<my-component>
		<h1 #tên-key>Title</h1>
	</my-component>
	```
	- Sử dụng
	```
	#ContentChild('tên-key') tên-biến : ElementRef;
	```
- **ngContentInit**: Hook được gọi 1 lần khi tạo ng-content		
- **ngContentChecked**: Hook được gọi khi có dữ liệu đổ vào ng-content	
- **ngAfterViewInit**: Hook được gọi 1 lần khi khởi tạo view	
- **ngAfterViewChecked**: Hook được gọi khi có sự thay đổi về view của ng-content	
- **@ViewChild**: **Tương tự như ContentChild** nhưng khác biệt là ContentChild được tạo ra bởi người lập trình, còn ViewChild tạo ra bởi người dùng

## 8. Service: Ứng dụng DI
