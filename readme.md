### Required
- HTML/CSS/JS basic
- ES6
- Typescript

### Installation
- [**Node.js**](https://nodejs.org/en/)
- Install **Typescript**
```
npm install -g typescript
```
- Install [**Angular CLI**](https://github.com/angular/angular-cli)
```
npm install -g @angular/cli 
```

### First App
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

### Text Editor
- [**Sublime Text**](https://www.sublimetext.com/3)
- Extensions: 
	- HTML-CSS-JS Prettify (Node.js needed)
	- Typescript (Shortcut: Ctrl + T + F)
	- Emmet (Quick creating html tag)
	- Bootstrap 4
	- Sidebar

### Component
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
