#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#define max 99

typedef struct sv {
	char name[max], code[10], sex[5];
	int year;
	struct sv *next;
} sv;

sv *first=NULL;

int main() {
	sv *pnode=(sv*)malloc(sizeof(sv)); char c;
	pnode->next=NULL; first=pnode;
	do {
		printf("Ten sinh vien: "); fflush(stdin); gets(pnode->name);
		printf("Nam sinh: "); scanf("%d", &pnode->year);
		printf("Ma sinh vien: "); fflush(stdin); gets(pnode->code);
		printf("Gioi tinh: "); fflush(stdin); gets(pnode->sex);
		printf("Ban co muon nhap tiep khong? (y/n): "); fflush(stdin); c=getch();
		// Tao node moi de nhap thong tin sinh vien tiep theo (neu co)
		pnode->next=(sv*)malloc(sizeof(sv)); pnode=pnode->next; pnode->next=NULL;
		printf("\n");
	} while((int)c==121); // Neu nguoi dung nhap n (No)

	printf("\n%-20s|%-10s|%s|%-10s\n", "Ho ten", "Nam sinh", "Ma sinh vien", "Gioi tinh");
	// In thong tin
	for(pnode=first; pnode->next!=NULL; pnode=pnode->next)
		printf("%-20s|%-10d|%-12s|%-10s\n", pnode->name, pnode->year, pnode->code, pnode->sex);
	return 0;
}