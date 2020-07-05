#### Bài 52: Nhập số n là số nguyên dương. Liệt kê các ước số nguyên tố của n
Input:
```
36
```
Output:
```
2 3
```

#### Bài 50: Nhập số n là số nguyên dương. In ra các cặp số hạng là số nguyên tố của n
Input:
```
16
```

Output:
```
16 = 3 + 13
16 = 5 + 11
```

#### Bài 26: Viết chương trình nhập một số nguyên có bốn chữ số. Hãy in ra cách đọc của số nguyên này.

#### Bài 54: Máy rút tiền ATM có các tờ tiền mệnh giá 10.000, 20.000, 50.000
Hãy nhập số tiền bạn muốn rút (phải là bội số của 10.000). In ra tất cả các khả năng có thể rút tiền.

Ví dụ:
Input:
```
100000
```

Output:
```
0 to 10000, 0 to 20000, 2 to 50000
0 to 10000, 5 to 20000, 0 to 50000
1 to 10000, 2 to 20000, 1 to 50000
2 to 10000, 4 to 20000, 0 to 50000
3 to 10000, 1 to 20000, 1 to 50000
4 to 10000, 3 to 20000, 0 to 50000
5 to 10000, 0 to 20000, 1 to 50000
6 to 10000, 2 to 20000, 0 to 50000
8 to 10000, 1 to 20000, 0 to 50000
10 to 10000, 0 to 20000, 0 to 50000
```

#### *Bài 19: RUA VA THO
Trong 1 cuộc thi để được vào CLB lập trình L.A.T. của Học viện Kỹ thuật Mật mã, rùa và thỏ đều đạt được điểm tuyệt đối. Tuy nhiên CLB chỉ tuyển 1 thành viên, rùa và thỏ không ai chịu nhường ai nên đã đi đến quyết định: chạy đua để tìm người thắng cuộc.

Hãy nhập vào thời gian t là 1 số nguyên >= 0, tìm quãng đường mà thỏ và rùa đã chạy được, biết rằng:
- Vận tốc của rùa là 1m/s, liên tục không nghỉ.
- Vận tốc của thỏ là 2m/s, cứ đi được 10m thỏ sẽ nghỉ 10s.

Người nào chạy được nhiều hơn sẽ thắng, nếu bằng nhau thì kết luận hòa.

Input:
```
12
```
Output:
```
Rua chay duoc 12m
Tho chay duoc 10m
Rua thang cuoc
```

Input:
```
3
```
Output:
```
Rua chay duoc 3m
Tho chay duoc 6m
Tho thang cuoc
```

Input:
```
10
```
Output:
```
Rua chay duoc 10m
Tho chay duoc 10m
Tho va rua hoa
```

#### *Bài 21.2
Để tổ chức cho Hội khỏe Phù Đổng, nhà trường gửi 2 cặp tọa độ. Mỗi cặp tọa độ là giới hạn phần cỏ phải cắt. Phần diện tích trùng nhau sẽ tính là 1 lần cắt. Hãy tính diện tích phải cắt trên sân bóng.

Input:
- Dòng 1: Tọa độ `(x1, y1) (x2, y2)` của cặp ô vuông thứ nhất.
- Dòng 2: Tọa độ `(x3, y3) (x4, y4)` của cặp ô vuông thứ hai

*(0 <= x1, y1, x2, y2, x3, y3, x4, y4 <=10)*

Output: Diện tích cần cắt

Ví dụ:
Input:
```
2 2 5 8
3 4 8 6
```
Output:
```
24
```

#### **Bài 16 VƯỢT SÔNG
Thầy trò Đường Tăng gồm 4 người: Đường Tăng, Tôn Ngộ Không, Trư Bát Giới, Sa Tăng đi Tây Thiên thỉnh kinh. Đến ngọn núi Hoàng Phong thì 4 thầy trò gặp 1 con sông lớn. Do vừa ăn buffet ở CLB L.A.T. ở KMA nên 4 thầy trò quá no, không ai bơi được. Tình cờ Tôn Ngộ Không tìm được chiếc thuyền có 2 chỗ ngồi đỗ gần đó, trên thuyền ghi trọng tải cho phép của thuyền. Hãy cho biết liệu thầy trò Đường Tăng có thể dùng thuyền vượt sông được hay không? Biết rằng để lái được thuyền bắt buộc phải có 1 người lái và tổng trọng lượng của người trên thuyền không được vượt quá trọng tải cho phép của thuyền.

Input:
- Dòng 1: Trọng tải thuyền
- Dòng 2: Trọng lượng của từng thành viên trong nhóm thầy trò Đường Tăng.

Output:
- "CO" nếu có thể chở được
- "KHONG" nếu không thể.

Ví dụ:

Input:
```
60
22 33 44 55
```
Output:
```
CO
```

Input:
```
54
22 33 44 55
```
Output:
```
KHONG
```