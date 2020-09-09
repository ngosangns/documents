#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
	char *words[10];
	char _0[] = "khong"; words[0] = _0;
	char _1[] = "mot"  ; words[1] = _1;
	char _2[] = "hai"  ; words[2] = _2;
	char _3[] = "ba"   ; words[3] = _3;
	char _4[] = "bon"  ; words[4] = _4;
	char _5[] = "nam"  ; words[5] = _5;
	char _6[] = "sau"  ; words[6] = _6;
	char _7[] = "bay"  ; words[7] = _7;
	char _8[] = "tam"  ; words[8] = _8;
	char _9[] = "chin" ; words[9] = _9;
	
	int n;
	scanf("%d", &n);
	
	// Hang ngan
	printf("%s ngan ", words[(int)(n/1000)]);
	// Hang tram
	if(n/100%10 || (!(n/100%10) && n/10%10))
		printf("%s tram ", words[(int)(n/100%10)]);
	// Hang chuc
	if((n/10%10) > 1)
		printf("%s muoi ", words[(int)(n/10%10)]);
	else if(n/10%10)
		printf("muoi ");
	else if(n%10)
		printf("le ");
	// Hang don vi
	if(n%10)
		printf("%s", words[(int)(n%10)]);
		
	return 0;
}
