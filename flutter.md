# IONIC
##### Giảng viên: 
- Bạch Ngọc Toàn (TEDU)
- Nguyễn Đức Hoàng (Nguyen Duc Hoang)

## 1. Cài đặt
- Android Studio
- Visual Studio Code
- Cài đặt extension **Flutter** và **Dart** cho từng IDE

## 2. Tạo project
- Clone project Flutter
```sh
git clone https://github.com/flutter/flutter.git -b stable
```
- Kiểm tra các bước cài đặt Flutter
```sh
flutter doctor
```
- Cập nhật packages
```sh
flutter packages get
```
- Kiểm tra device hoặc emulator
```sh
flutter devices
flutter emulators
```
- Khởi động device hoặc emulator
```sh
flutter emulators --launch <emulator-id>
flutter devices --launch <device-id>
```
- Chạy app
```sh
flutter run
```
Trong VSCode thì chúng ta nhấn **F5** để dùng trình debugger của VSCode (hỗ trợ auto hot reload khi save)