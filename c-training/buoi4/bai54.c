#include <stdio.h>
#include <stdlib.h>

int main() {
	long int n, x, y, c;
	scanf("%ld", &n);

	// Chia cho boi so de giam bo nho trong qua trinh xu ly
	n/=10000;

	for(int i=0; i<=n; i++) {
		// Giai phuong trinh 2x + 5y = n - i
		// Voi a, b khac 0
		// => y = -(2/5)x + (n-i)/5 (y thuoc N)
		c = n-i;
		for(x = 0; x <= c/2; x++) {
			y = (c - x*2)/5;
			if(2*x + 5*y == c)
				printf("CO %d TO 10000 DONG, CO %d TO 20000 DONG, CO %d TO 50000 DONG\n", i, x, y);
		}
	}
	return 0;
}