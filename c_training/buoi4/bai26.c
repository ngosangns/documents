#include <stdio.h>
#include <stdlib.h>

int main() {
	int n;
	scanf("%d", &n);
	switch(n/1000) {
		case 9: {
			printf("Chin ngan ");
			break;
		}
		case 8: {
			printf("Tam ngan ");
			break;
		}
		case 7: {
			printf("Bay ngan ");
			break;
		}
		case 6: {
			printf("Sau ngan ");
			break;
		}
		case 5: {
			printf("Nam ngan ");
			break;
		}
		case 4: {
			printf("Bon ngan ");
			break;
		}
		case 3: {
			printf("Ba ngan ");
			break;
		}
		case 2: {
			printf("Hai ngan ");
			break;
		}
		case 1: {
			printf("Mot ngan ");
			break;
		}		
	}
	switch(n/100%10) {
		case 9: {
			printf("chin tram ");
			break;
		}
		case 8: {
			printf("tam tram ");
			break;
		}
		case 7: {
			printf("bay tram ");
			break;
		}
		case 6: {
			printf("sau tram ");
			break;
		}
		case 5: {
			printf("nam tram ");
			break;
		}
		case 4: {
			printf("bon tram ");
			break;
		}
		case 3: {
			printf("ba tram ");
			break;
		}
		case 2: {
			printf("hai tram ");
			break;
		}
		case 1: {
			printf("mot tram ");
			break;
		}
		case 0: {
			switch(n/10%10) {
				case 0: break;
				default: {
					printf("khong tram ");
					break;
				}
			}
			break;
		}
	}
	switch(n/10%10) {
		case 9: {
			printf("chin muoi ");
			break;
		}
		case 8: {
			printf("tam muoi ");
			break;
		}
		case 7: {
			printf("bay muoi ");
			break;
		}
		case 6: {
			printf("sau muoi ");
			break;
		}
		case 5: {
			printf("nam muoi ");
			break;
		}
		case 4: {
			printf("bon muoi ");
			break;
		}
		case 3: {
			printf("ba muoi ");
			break;
		}
		case 2: {
			printf("hai muoi ");
			break;
		}
		case 1: {
			printf("muoi ");
			break;
		}
		case 0: {
			switch(n%10) {
				case 0: break;
				default: {
					printf("le ");
					break;
				}
			}
			break;
		}				
	}
	switch(n%10) {
		case 9: {
			printf("chin");
			break;
		}
		case 8: {
			printf("tam");
			break;
		}
		case 7: {
			printf("bay");
			break;
		}
		case 6: {
			printf("sau");
			break;
		}
		case 5: {
			printf("nam");
			break;
		}
		case 4: {
			printf("bon");
			break;
		}
		case 3: {
			printf("ba");
			break;
		}
		case 2: {
			printf("hai");
			break;
		}
		case 1: {
			printf("mot");
			break;
		}
	}
	return 0;
}
