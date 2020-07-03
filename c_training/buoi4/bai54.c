#include <stdio.h>
#include <stdlib.h>

int main() {
	long int n, n1, n2, n5;
	scanf("%ld", &n); n/=10000;
	for(int i=0; i<=n; i++) {
		n1=n-i; n2=0; n5=0;
		if((n-n1)>0) {
			n5=(n-n1)/5;
			if((n-n1-n5*5)%2!=0) {
				if(n5>0) {
					n5=0; n2=(n-n1)/2;
				}
				else n2=0;
			}
			else n2=(n-n1-n5*5)/2;
		}
		if(n2>0 or n5>0 or n-n1==0) {
			printf("CO %ld TO 10000 DONG, CO %ld TO 20000 DONG, CO %ld TO 50000 DONG\n", n1, n2, n5);
			if(n5>0 and n5%2==0) {
				n5=0; n2=(n-n1)/2;
				printf("CO %ld TO 10000 DONG, CO %ld TO 20000 DONG, CO %ld TO 50000 DONG\n", n1, n2, n5);
			}
		}		
	}
	return 0;
}