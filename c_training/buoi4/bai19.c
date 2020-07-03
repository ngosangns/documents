#include <stdio.h>
#include <stdlib.h>

int main() {
	float t, th, ru, th_tmp;
	scanf("%f", &t);
	ru = t;
	th_tmp = t-int(t/15)*15;
	if(th_tmp >= 5) th_tmp = 10;
	else th_tmp = th_tmp*2;
	th = (int)(t/15)*10 + th_tmp;
	printf("Rua chay duoc %fm\n", ru);
	printf("Tho chay duoc %fm\n", th);
	if(th>ru) printf("Tho thang cuoc");
	else if(th==ru) printf("Tho va rua hoa");
	else printf("Rua thang cuoc");
	return 0;
}
