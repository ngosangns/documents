#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef struct HCN {
	int x1;
	int y1;
	int x2;
	int y2;
} HCN;

int c1(HCN hcn) { return abs(hcn.x1 - hcn.x2); }
int c2(HCN hcn) { return abs(hcn.y1 - hcn.y2); }
int S(HCN hcn) { return c1(hcn) * c2(hcn); }

int main() {
	HCN hcn1, hcn2, hcnP;

	scanf("%d %d %d %d", &hcn1.x1, &hcn1.y1, &hcn1.x2, &hcn1.y2);
	scanf("%d %d %d %d", &hcn2.x1, &hcn2.y1, &hcn2.x2, &hcn2.y2);
	
	// Ta tao mot hinh chu nhat ngoai tiep hcn1 va hcn2	
	hcnP.x1 = abs((hcn1.x1 + hcn2.x1) - abs(hcn1.x1 - hcn2.x1))/2;
	hcnP.y1 = abs((hcn1.y1 + hcn2.y1) - abs(hcn1.y1 - hcn2.y1))/2;
	hcnP.x2 = abs((hcn1.x2 + hcn2.x2) + abs(hcn1.x2 - hcn2.x2))/2;
	hcnP.y2 = abs((hcn1.y2 + hcn2.y2) + abs(hcn1.y2 - hcn2.y2))/2;

	// Kiem tra hcn1 va hcn2 co de len nhau khong
	// Neu de len nhau
	if(c1(hcnP) < c1(hcn1) + c1(hcn2) && c2(hcnP) < c2(hcn1) + c2(hcn2)) {
		// Tinh phan dien tich bi de len
		int hieuC1 = c1(hcn1) + c1(hcn2) - c1(hcnP);
		int hieuC2 = c2(hcn1) + c2(hcn2) - c2(hcnP);
		int hieuS = hieuC1 * hieuC2;
		// Do phan dien tich bi de len se bi tinh 2 lan neu ta cong dien tich cua hcn1 va hcn2
		// Do do ta phai tru di 1 lan phan dien tich bi de len
		printf("%d", S(hcn1) + S(hcn2) - hieuS);
	}
	// Neu khong de len nhau
	else printf("%d", S(hcn1) + S(hcn2));
	
	return 0;
}