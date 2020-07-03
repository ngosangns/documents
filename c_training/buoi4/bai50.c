#include <stdio.h>
#include <stdlib.h>

int main() {
	int n;
	scanf("%d", &n);
	for(int i=1; i<=n/2; i++) {
		for(int q=1; q<=(int)(i/2); q++) {
			if(q!=1 and q<(int)(i/2) and i%q==0) break;
			if(q==(int)(i/2)) {
				for(int w=1; w<=(int)((n-i)/2); w++) {
					if(w!=1 and w<(int)((n-i)/2) and (n-i)%w==0) break;
					if(w==(int)((n-i)/2)) printf("%d = %d + %d\n", n, i, n-i);
				}
			}
		}
	}
	return 0;
}