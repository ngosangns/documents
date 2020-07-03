#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int findmax(int n1, int n2, int n3, int n4) {
	if(n1>=n2 and n1>=n3 and n1>=n4) return n1;
	else findmax(n2, n3, n4, n1);
}
int main() {
	int x[7], y[7], c;
	scanf("%d %d %d %d", &x[1], &y[1], &x[2], &y[2]);
	scanf("%d %d %d %d", &x[3], &y[3], &x[4], &y[4]);
	if(x[1]<=x[2] and x[1]<=x[3] and x[1]<=x[4]) x[0]=x[1];
	else if(x[2]<=x[1] and x[2]<=x[3] and x[2]<=x[4]) x[0]=x[2];
	else if(x[3]<=x[1] and x[3]<=x[2] and x[3]<=x[4]) x[0]=x[3];
	else x[0]=x[4];
	if(x[1]>=x[2] and x[1]>=x[3] and x[1]>=x[4]) x[5]=x[1];
	else if(x[2]>=x[1] and x[2]>=x[3] and x[2]>=x[4]) x[5]=x[2];
	else if(x[3]>=x[1] and x[3]>=x[2] and x[3]>=x[4]) x[5]=x[3];
	else x[5]=x[4];
	if(y[1]<=y[2] and y[1]<=y[3] and y[1]<=y[4]) y[0]=y[1];
	else if(y[2]<=y[1] and y[2]<=y[3] and y[2]<=y[4]) y[0]=y[2];
	else if(y[3]<=y[1] and y[3]<=y[2] and y[3]<=x[4]) y[0]=y[3];
	else y[0]=y[4];
	if(y[1]>=y[2] and y[1]>=y[3] and y[1]>=y[4]) y[5]=y[1];
	else if(y[2]>=y[1] and y[2]>=y[3] and y[2]>=y[4]) y[5]=y[2];
	else if(y[3]>=y[1] and y[3]>=y[2] and y[3]>=y[4]) y[5]=y[3];
	else y[5]=y[4];
	c = (x[2]-x[1]+1)*(y[2]-y[1]+1)+(x[4]-x[3]+1)*(y[4]-y[3]+1);
	if(x[2]-x[1]+x[4]-x[3]+1<=x[5]-x[0] and y[2]-y[1]+y[4]-y[3]+1<=y[5]-y[0]) {
		printf("%d", c);
	}
	else {
		c -= (x[2]-x[1]+x[4]-x[3]-x[5]+x[0]+1)*(y[2]-y[1]+y[4]-y[3]-y[5]+y[0]+1);
		printf("%d", c);
	}
	return 0;
}
