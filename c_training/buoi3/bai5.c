#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 99
struct HocSinh {
    char hoten[MAX];
    int namsinh;
    float toan, van, anh, trungbinh;
};
void addhs(int stt, char *hoten, int *namsinh, float *toan, float *van, float *anh, float *trungbinh) {
	printf("\nNhap ho ten, nam sinh, diem Toan, Van, Anh hoc sinh %d\n", stt);
	printf("VD: Quang Sang, 2000, 4, 5, 6: ");
	for(int q=0; q<MAX; q++) {
		scanf("%c", &hoten[q]);
		if((int)hoten[q]==10) q--;
		if((int)hoten[q]==44) {hoten[q]=' '; break;}
	}
	scanf("%d, %f, %f, %f", namsinh, toan, van, anh);
	*trungbinh=(*toan+*van+*anh)/3;
	printf("Done!\n");
}
void printds(int stt, char *hoten, int namsinh, float toan, float van, float anh, float trungbinh) {
	if(stt==1) printf("%s|%-15s|%s|%-5s|%-5s|%-5s|%s\n", "STT", "Ho ten", "Nam sinh", "Toan", "Van", "Anh", "Trung binh");
	printf("%-3d|%-15s|%-8d|%-5.2f|%-5.2f|%-5.2f|%-10.2f\n", stt, hoten, namsinh, toan, van, anh, trungbinh);
}
void doicho_f(float *n1, float *n2) { *n1+=*n2; *n2=*n1-*n2; *n1-=*n2; }
void doicho_i(int *n1, int *n2) { *n1+=*n2; *n2=*n1-*n2; *n1-=*n2; }
void doicho_s(char *s1, char *s2) {
	char tmp;
	for(int i=0; i<MAX; i++) {
		tmp=s1[i];
		s1[i]=s2[i];
		s2[i]=tmp;
	}
}
int main() {
	int chucnang=7, slhs=0;
	struct HocSinh hocsinh[MAX];
	while(chucnang) {
		printf("1. Tao danh sach hoc sinh\n");
		printf("2. In danh sach hoc sinh\n");
		printf("3. Them 1 hoc sinh\n");
		printf("4. Xoa 1 hoc sinh theo so thu tu\n");
		printf("5. Sap xep cac hoc sinh theo diem\n");
		printf("6. Sap xep cac hoc sinh theo ten\n");
		printf("0. Thoat chuong trinh\n");
		printf("Nhap so chuc nang: "); scanf("%d", &chucnang);
		switch(chucnang) {
			case 1: {
				printf("Nhap so luong hoc sinh: "); scanf("%d", &slhs); if(slhs>MAX) return 0;
				for(int i=0; i<slhs; i++)
					addhs(i+1, hocsinh[i].hoten, &hocsinh[i].namsinh, &hocsinh[i].toan, &hocsinh[i].van, &hocsinh[i].anh, &hocsinh[i].trungbinh);
				break;
			}
			case 2: {
				for(int i=0; i<slhs; i++) {
					if(hocsinh[i].hoten) {} else break;
					printds(i+1, hocsinh[i].hoten, hocsinh[i].namsinh, hocsinh[i].toan, hocsinh[i].van, hocsinh[i].anh, hocsinh[i].trungbinh);
				} break;
			}
			case 3: {
				slhs++;
				addhs(slhs, hocsinh[slhs-1].hoten, &hocsinh[slhs-1].namsinh, &hocsinh[slhs-1].toan, &hocsinh[slhs-1].van, &hocsinh[slhs-1].anh, &hocsinh[slhs-1].trungbinh);
				break;
			}
			case 4: {
				int del_stt;
				printf("Nhap stt can xoa: "); scanf("%d", &del_stt);
				if(del_stt>slhs) {printf("STT khong ton tai.\n"); continue;}
				for(int i=del_stt-1; i<slhs; i++) {
					for(int q=0; q<MAX; q++) hocsinh[i].hoten[q]=hocsinh[i+1].hoten[q];
					hocsinh[i].namsinh=hocsinh[i+1].namsinh;
					hocsinh[i].toan=hocsinh[i+1].toan;
					hocsinh[i].van=hocsinh[i+1].van;
					hocsinh[i].anh=hocsinh[i+1].anh;
					hocsinh[i].trungbinh=hocsinh[i+1].trungbinh;
				}
				slhs--;
				printf("Done!\n");
				break;
			}
			case 5: {
				int check=0;
				for(int i=0; i<slhs-1; i++) {
					if(hocsinh[i].trungbinh<hocsinh[i+1].trungbinh) {
						doicho_s(hocsinh[i].hoten, hocsinh[i+1].hoten);
						doicho_i(&hocsinh[i].namsinh, &hocsinh[i+1].namsinh);
						doicho_f(&hocsinh[i].toan, &hocsinh[i+1].toan);
						doicho_f(&hocsinh[i].van, &hocsinh[i+1].van);
						doicho_f(&hocsinh[i].anh, &hocsinh[i+1].anh);
						doicho_f(&hocsinh[i].trungbinh, &hocsinh[i+1].trungbinh);
						check++;
					}
					if(i==slhs-2) if(check!=0) {check=0; i=-1;}
				}
				printf("Done!\n");
				break;
			}
			case 6: {
				int check=0;
				for(int i=0; i<slhs-1; i++) {
					if(strcmp(hocsinh[i].hoten, hocsinh[i+1].hoten)>0) {
						doicho_s(hocsinh[i].hoten, hocsinh[i+1].hoten);
						doicho_i(&hocsinh[i].namsinh, &hocsinh[i+1].namsinh);
						doicho_f(&hocsinh[i].toan, &hocsinh[i+1].toan);
						doicho_f(&hocsinh[i].van, &hocsinh[i+1].van);
						doicho_f(&hocsinh[i].anh, &hocsinh[i+1].anh);
						doicho_f(&hocsinh[i].trungbinh, &hocsinh[i+1].trungbinh);
						check++;
					}
					if(i==slhs-2) if(check!=0) {check=0; i=-1;}
				}
				printf("Done!\n");
				break;
			}
			case 0: printf("\nThoat chuong trinh...\n");
			default: return 0;
		}
		printf("\n----------------\n");
	}
	return 0;
}
