#include <stdio.h>
#include <stdlib.h>

int checkPrime(int n) {
	if(n == 1 || n == 2 || n == 3) return 1;
	
	int i;
	for(i = 2; i <= (int)(n/2); i++)
		if(!(n%i)) return 0;
	return 1;
}

int main() {
	int n;
	scanf("%d", &n);
	
	for(int i=1; i<=n/2; i++)
		if(checkPrime(i) and checkPrime(n-i))
			printf("%d = %d + %d\n", n, i, n-i);
			
	return 0;
}