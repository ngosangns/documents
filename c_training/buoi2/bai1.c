#include <stdio.h>
int main() {
	float a,b;
	printf("Moi ban nhap a: "); scanf("%f",&a);
	printf("Moi ban nhap b: "); scanf("%f",&b);
	if(a*b > 0 || (a*b == 0 && a+b>=0)) printf("\nCUNG DAU");
	else printf("\nKHAC DAU");
	return 0;
}