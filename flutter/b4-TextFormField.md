# Bài 4: TextFormFeild
Chức năng: Tạo ra một input nhận giá trị
Cú pháp:
```
TextEdittingController _controller = new TextEdittingController();
GlobalKey<FormState> _textFormKey = GlobalKey<FormState>();

Form(
    key: _textFormKey, // Định danh form
    child: TextFormFeild(
        controller: _controller, // Sử dụng controller để lấy + quản lí giá trị
        style: TextStyle, // Trang trí text
        maxLines: Numbers, // Số dòng tối đa hiển thị
        textAlign: TextAlign, // Hướng của text
        cursorColor: Colors, // Thay đổi màu con trỏ
        decoration: InputDecoration(
            prefixIcon: Icon, // Icon phía trước
            suffixIcon: Icon, // Icon phía sau
            labelText: String, // Nhãn của input
            hintText: String, // Placeholder của input
            hintStyle: TextStyle, // Trang trí cho placeholder
            errorText: String, // Text báo lỗi
            focusedBorder: OutlineInputBorder // Trang chí border khi focus vào
            ...
        ), // Trang trí input
        validator: (value) => {
            if(value.isEmpty) {
                return "Not null";
            }
            retrurn null;
        }, // Validate giá trị input
    )
) // Để sử dụng _controller và _textFormKey ta cần bọc TextFormFeild trong một Form

RaisedButton(

)
```