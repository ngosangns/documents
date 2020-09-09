#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int main() {
	int mThuyen, mMin, mMax, m[4];
	scanf("%d", &mThuyen);
	scanf("%d %d %d %d", &m[0], &m[1], &m[2], &m[3]);

	for(int i = 0; i < 4; i++)
		if(m[i] >= mThuyen) {
			printf("Khong");
			return 0;
		}
	
	// De 4 nguoi co the qua song thi trong luong thuyen phai >= trong luong cua 2 nguoi nhe nhat
	// Chia mang lam 2 phan
	// Ap dung cong thuc tim so be nhat, lon nhat trong 2 so
	
	// Nguoi nhe nhat trong 4 nguoi
	mMin = abs(abs(m[0] - m[1]) - abs(m[2] - m[3]))/4;
	// Nguoi nhe nhi trong 4 nguoi
	mMin += abs(m[0] - m[1])/2 > abs(m[2] + m[3])/2 ? abs(m[2] + m[3])/2 : abs(m[0] - m[1])/2;

	if(mMin <= mThuyen) printf("Co");
	else printf("Khong");
	printf("\n\n%d", mMin);
	return 0;
}