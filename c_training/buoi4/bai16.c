#include <stdio.h>
#include <stdlib.h>

int main() {
	float mth, m[4], var_tmp;
	scanf("%f", &mth);
	scanf("%f %f %f %f", &m[0], &m[1], &m[2], &m[3]);
	if(m[0]<=mth and m[1]<=mth and m[2]<=mth and m[3]<=mth) {
		if((m[0]+m[1])<=mth or (m[0]+m[2])<=mth or (m[0]+m[3])<=mth or (m[1]+m[2])<=mth or (m[1]+m[3])<=mth or (m[2]+m[3])<=mth) {
			printf("Co");
		}
		else printf("Khong");
	}
	else printf("Khong");
	return 0;
}