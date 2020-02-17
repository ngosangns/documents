# Angular, IONIC Learning (nghiepuit)
- [Playlist](https://www.youtube.com/playlist?list=PLJ5qtRQovuENHYHqlQP5XT7zwbCA5Q5He)
- [Slide](https://github.com/nghiepuit/slide/blob/master/slide-angular4-1.pptx)

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
npm i -g @angular/cli
```
- Install **IONIC CLI and Cordova** (mobile app develope)
```
npm i -g ionic cordova
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
// Khi chạy xong Component sẽ được khai báo trong app module gần nhất (app.module.ts)
```
- Gọi Component trong file HTML:
```
<tên-Component></tên-Component>
// Tên Component lấy từ giá trị selector trong file typescript của Component
```

### 5.2 Data Binding
#### 5.2.1. Component -> View
- Interpolation (thường dùng để truyền string): `{{ value }}`
```
// Khai báo trong file .ts
// Khai báo biến
[access: public, private,...] tên-biến : kiểu-dữ-liệu = giá trị;

// VD Chèn theo kiểu Interpolation
href="{{ tên-biến }}"
```
- Property Binding (thường dùng để truyền thuộc tính custom) `[property-name] = "value"`
```
// VD Chèn theo kiểu Property Binding
[href] = "tên-biến" 
```
- Attribute Binding (thường dùng để truyền thuộc tính được hỗ trợ) `[attr.tên-thuộc-tính] = "value"`
```
// VD Chèn theo kiểu Attribute Binding
[attr.href] = "tên-biến"
// Mỗi tag trong html đều có attribute riêng trong typescript, Google để tìm hiểu thêm
```
- Class Binding (thường dùng cho class) `[class.class-name] = "condition"`
```
// VD Chèn theo kiểu Class Binding
[class.text-danger] = "true"
```
- Style Binding (thường dùng cho style) `[style.style-name] = "value"`
```
// VD Chèn theo kiểu Style Binding
[style.text-align] = "center"
[style.font-size.px] = "50" # Thêm đơn vị cho style
```

#### 5.2.2. View -> Component
- Event Binding (dùng để bắt sự kiện từ người dùng)
```
// Dùng ngoặc tròn thay vì ngoặc vuông
// Dùng để bắt sự kiện
(event) = "tên-function hoặc lệnh đơn"

// VD
(keydown) = "count = count + 1"
// VD 2
(keydown) = "function2($event)" # Đặt chính xác là $event để nhận sự kiện
```

#### 5.2.3. Two ways binding
> Thường được dùng trong form (input/select/....)

- Import thư viện và khai báo (file *app.component.ts*):
```
// Import
import { FormsModule } from '@angular/forms';

// Khai báo trong @NgModule phần imports

// Cú pháp
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

// Cú pháp có then
*ngIf="condition; then tên-block-muốn-trỏ-đến"

// Cú pháp có else
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
// i là biến đếm, f là true nếu là số chẵn, ngược lại là false
```
	- function(index, item) của trackby nhận đầu vào để xử lí và return về
	- Biến lặp có hiệu lực trong thẻ tag
- ngSwitch
	- Dùng cho mảng
	- Cú pháp
```
// Tạo biến dùng để so sánh (Binding từ typescript ra)
[ngSwitch] = "tên-biến"
// Hàm switch (Sử dụng bên trong thẻ khai báo biến ngSwitch)
*ngSwitchCase = "giá-trị"
// Giá trị mặc định
*ngSwitchDefault
```

#### 6.2.1. ngClass, ngStyle, \@Input, \@Output (Đang cập nhật)
#### 6.2.2. \@Input: Truyền dữ liệu từ cha sang con
- Tạo biến tại parent component (*file app.component.ts*)
```
export class AppComponent {
	public testVar: string = "Hello";
	...
}
```
- Đưa biến vào khi gọi component con (*file app.component.html*)
```
<app-child [tên-key]="tên-biến"></app-child>
```
- Dùng \@Input bắt giá trị tại component con
```
// Khai báo thư viện
import { Input } from '@angular/core';

// Bắt dữ liệu
@Input('tên-key') tên-biến-mới : kiểu-dữ-liệu = giá-trị-mặc-định;

```
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
// Typescript
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
// Đổ content không query
<ng-content></ng-content> # Thẻ xác định nơi mà content khai báo thêm bên trên sẽ đổ vào
// Đổ content có query
<ng-content select="x"></ng-content>
// (Trong đó x có thể là class, thẻ tag, attribute, attribute có value (query giống css))
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
- **\@ViewChild**: **Tương tự như ContentChild** nhưng khác biệt là ContentChild được tạo ra bởi người lập trình, còn ViewChild tạo ra bởi người dùng

## 8. Service: Ứng dụng DI
Viết các hàm dùng chung cho nhiều component và page dựa trên DI
- Khởi tạo (Kèm theo Injectable)
```sh
ionic g service tên-service
```
- Import
```
import { tên-export-class } from 'service-path';
```
- Khai báo trong providers
- Tạo biến trong constructor

## 9. Routing
Thực hiện nhiệm vụ chính là chuyển trang mà không cần load lại trang

### 9.1. Sử dụng
- Tại index.html có `<base href="/">`
- Cần có 1 khu vực khai báo directive `<router-outlet></router-outlet>` nơi mà các nội dung cần thay đổi
- Cần import `RouterModule, Routes` từ `@angular/router`
- Khai báo **Router Root** cho ứng dụng (trong phần imports): `RouterModule.forRoot(routerArray: Routes[])`
- Trong đó **routerArray** là 1 mảng object có kiểu **Routes** gồm các thuộc tính
	- **path**: Đường dẫn để bắt router, nếu path: "\*\*" thì component sẽ được load khi không có router nào được bắt (giống 404 error page) 
	- **component**: Component để load sau khi bắt router
- Chuyển trang khi bắt được router nào đó
	- **path**: 'path-để-bắt-router'
	- **redirectTo**: '/tên-router-muốn-chuyển-đến'
	- **pathMatch**: 'full'

### 9.2. Một số thuộc tính khác
- **routerLink**: Chuyển trang mà không load lại trang như thuộc tính href
```
<a [routerLink]="['/path']">Chuyển trang</a>
```
- **routerLinkActive**: Add class nào đó khi link được active
```
<a routerLinkActive="tên-class">Chuyển trang</a>
```
- Chuyển trang bằng **Event Binding**
	- Sử dụng **Navigate** và **Router**
	```
	// Import thư viện
	import { Router } from "@angular/router";
	...
	// Tạo biến
	constructor(public routerService : Router) {
	}
	// Sử dụng navigate
	navigate(path: string (không có "/")) {
		this.routerService.navigate([path]);
	}
	// Hoặc sử dụng navigateByUrl
	navigate(path: string (có "/")) {
		this.routerService.navigateByUrl('path');
	}
	```

### 9.3. Lấy tham số từ router
- Khai báo path trong Router Array
```
{
	path: '/product/:id'
	component: CustomComponent
}
```
- Import thư viện
```
import { ActivatedRoute } from "@angular/router";
```
- Tạo biến trong constructor
```
export class myComponent {
	constructor(public activatedRoute : ActivatedRoute) { }
}
```
- Lấy giá trị trong params
```
customFunction() {
	let id = this.activatedRoute.snapshot.params['id'];
	// Hoặc ép kiểu
	let id = (+this.activatedRoute.snapshot.params['id']);
}
```
- Lắng nghe sự thay đổi của Params
```
customFunction() {
	this.activatedRoute.params.subscribe(data => {
		let id = data.id;
	});
}
```

### 9.4. Lấy tham số từ query
- Tạo form và truyền theo kiểu queryParams
```
<input type="text" [(ngModel)] = 'name'>
<button [routerLink]="[/path] [queryParams] = "{ key1: value1, key2: value2 }"></button>
```
- Tạo form và truyền theo kiểu **Event Binding (Navigate)**
```
// Import thư viện
import { Router } from "@angular/router";
...
// Tạo biến (ngModel)
public value1 : string;
public value2 : string;
...
constructor(public routerService : Router) {
}
// Sử dụng navigate
navigate(path: string (không có "/")) {
	this.routerService.navigate([path], { queryParams: { key1: this.value1, key2: this.value2 } });
}
```
- Bắt giá trị bằng **ActivatedRoute**
```
// Import thư viện
import { ActivatedRoute } from "@angular/router";
// Tạo biến trong constructor
export class myComponent {
	constructor(public activatedRoute : ActivatedRoute) { }
}
// Lấy giá trị trong params
customFunction() {
	this.activatedRoute.params.subscribe(data => {
		let value1 = data.key1;
		let value2 = data.key2;
	});
}
```
*Lưu ý: `this.activatedRoute.params.subscribe` trả về giá trị kiểu dữ liệu `Subscription` nên phải add kiểu dữ liệu vào*
```
import { Subscription } from "rxjs/Subscription";
...
public subscription : Subscription;
...
this.subscription = this.activatedService.parent.params.subscribe(...);

// Hủy Subscription trước khi kết thúc Lifecycle
ngOnDestroy() {
	if(this.subscription)
		this.subscription.unsubscribe();
}
```

## 10. Area trong Angular
Giới hạn những trang mà các cấp user khác nhau có thể vào
### 10.1. CanActive
- Tạo Guard
```sh
ng g Guard tên-guard
```
- Là 1 service, chú ý khai báo trong providers
- Tạo biến toàn cục để lưu trữ dữ liệu người dùng
```
// Set
localStorage.setItem('key', value);
// Get
this.value1 = localStorage.getItem('key');
// Remove
localStorage.removeItem('key');
// Clear
localStorage.clear();
```
- Override giá trị trả về của Guard bằng biến toàn cục

### 10.2. CanDeactive
- Tương tự như CanActive nhưng ngược chức năng
- Override một component trong export class
```
export class AccessGuard implements CanDeactive<HomeComponent> {
	CanDeactive() : boolean {
		return false;
	}
}
```

## 11. Module
- Là một class có decorater là **\@NgModule({})**
- Bao gồm : **imports** : [], **declarations** : [], **bootstrap** : [], **providers** : [], **exports** : []
	- **declarations** : components, directives, pipes ( chú ý chỉ thuộc về duy nhất 1 angular module )
	- **import** :  module, components, directives, pipes ( nếu cần )
		- **BrowserModule** : bắt buộc import ( ngIf, ngFor thuộc CommonModule - \@angular/common ), đã imports CommonModule
	- **providers** :  services
	- **bootstrap** : nơi khai báo component chạy đầu tiên
	- **exports** : export/reexport module, components, directives, pipes. Không export một service
- Khai báo module đầu tiên ở main.ts
- Xây dựng Module dùng chung chứa các pipe ( bao gồm CommonModule ) sau đó reexport CommonModule cho các module khác sử dụng. Tránh việc import lại nhiều lần

## 12. HttpClient
Import module (file *app.component.ts*)
```
import { HttpClientModule } from "@angular/common/http";
// Khai báo vào phần import trong ngModule
```
Import thư viện trong component
```
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
```
Inject `HttpClient` vào constructor
```
constructor(public http : HttpClient) { }
```
Lệnh GET (tạo trong file service)
```
getAllTodos() : Observable<ToDo[]> {
	return this.http.get(link);
}
```
*Response trả về kiểu Observable*

Để lắng nghe sự thay đổi ta dùng subscribe
```
public subscription : Subscription;
public todo : Todo = null;
public todos : Todos[] = [];

// Subscribe
loadData() {
	this.subscription = this.todoService.getAllTodos().subscribe(
		data => {
			this.todos = data;
		}, 
		err => {
			this.todoService.handleError(error);
		});

}

// Handle error (tạo trong file service)
handleError(err) {
	if(err.error instanceof Error) {
		console.log('Client-side error: ${err.error.message}');
	}
	else {
		console.log('Server-side error: ${err.status} - ${err.error.message}');
	}
}
```
Vì subscribe mà không hủy sẽ dẫn đến tình trạng tràn bộ nhớ, nên ta phải hủy nó trước khi kết thúc component
```
ngOnDestroy() {
	this.subscription.unsubscribe();
}
```