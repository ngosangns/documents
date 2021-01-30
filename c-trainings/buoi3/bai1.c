#include <stdio.h>
#include <stdlib.h>

typedef struct data {
	int number;
	struct data *next;
} data;

int main() {
	data *pnode=(data*)malloc(sizeof(data)); pnode->next=NULL;
	data *first=pnode;
	int number, total=0; char trigger_key=(char)0;

	printf("Nhap data (VD: 2 4 6 8 ...): ");
	do {
		scanf("%d%c", &number, &trigger_key);
		pnode->number=number;
		pnode->next=(data*)malloc(sizeof(data));
		pnode=pnode->next;
		pnode->next=NULL;
		total++;
	} while((int)trigger_key!=10); // Neu nhan enter thi break

	printf("Data theo chieu thuan: ");
	for(pnode=first; pnode->next!=NULL; pnode=pnode->next) printf("%d ", pnode->number);

	printf("\nData theo chieu nghich: ");
	// Tao 1 mang, in cac node vao mang theo chieu nguoc lai
	int arr_data[total], index=total-1;
	for(pnode=first; pnode->next!=NULL; pnode=pnode->next) {
		arr_data[index] = pnode->number;
		index--;
	}
	// In mang
	for(index=0; index<total; index++) printf("%d ", arr_data[index]);
	return 0;
}
