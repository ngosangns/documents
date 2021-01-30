#include <stdio.h>
#include <stdlib.h>

int main() {
	int t, rua, tho;
	scanf("%d", &t);

	rua = t;
	// Cu moi 15s la tho lap lai quy luat cua minh
	// Do do ta chia thoi gian tho chay lam 2 phan: phan nguyen va phan du khi chia voi 15
	// Do cu 15s thi tho chay duoc 10m nen ta lay phan nguyen *2/3
	// Phan du thi kiem tra duoi 5 thi nhan voi van toc, con lai lay 10
	tho = t/15*15 * 2/3 + (t%15 < 5 ? t%15*2 : 10);

	printf("Rua chay duoc %dm\n", rua);
	printf("Tho chay duoc %dm\n", tho);

	if(rua > tho) printf("Rua thang cuoc");
	else if (!(rua - tho)) printf("Tho va rua hoa");
	else printf("Tho thang cuoc");
	
	return 0;
}
