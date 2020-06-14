## Thế nào là độ hiệu quả của thuật toán?
Ví dụ 2: Giả sử bạn có đoạn mã sau:
```c
for (int i = 0; i < N; i++)
	for (int j = i + 1; j < N; j++)
    	if (A[i] > A[j])
        	swap(A[i], A[j]);
```