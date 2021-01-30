#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct Date {
	int day, month, year;
};

int checkNamNhuan(int year) {
	return year%400==0 ? 1 : (year%4==0 ? 1 : 0);
}

// Kiem tra input
int kiemtra(Date date) {
	int months[12]={31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
	months[1] += checkNamNhuan(date.year);
	if (date.month>0 && date.month<13 && date.day>0 && date.day<months[date.month-1]) return 1;
	else return 0;
}

// Dem so ngay tinh tu nam 0
// Sau do tinh chenh lech giua 2 thoi gian
double tinh(Date date1, Date date2) {
	int months[12]={31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
	int dayinyear1 = date1.day, dayinyear2 = date2.day; // Dem so ngay trong date
	
	// Dem so ngay trong thang cua date
	for(int i=0; i<12; i++) {
		if(i<date1.month-1) dayinyear1+=months[i];
		if(i<date2.month-1) dayinyear2+=months[i];
	}
	
	// Cong them 1 ngay neu nam hien tai la nam nhuan
	if(date1.month>2) dayinyear1+= checkNamNhuan(date1.year);
	if(date2.month>2) dayinyear2+= checkNamNhuan(date2.year);
	
	// Da xu li xong nam hien tai
	// Tiep theo xu li tu nam 0 -> nam hien tai - 1
	date1.year--;
	date2.year--;
	
	// Tinh so ngay chenh lech khi co nam nhuan
	int soNamNhuan1 = date1.year/4 - date1.year/100 + date1.year/400 + 1;
	int soNamNhuan2 = date2.year/4 - date2.year/100 + date2.year/400 + 1;
	
	// Handle truong hop nguoi dung nhap nhung nam TCN
	soNamNhuan1 *= date1.year < 0 ? -1 : 1;
	soNamNhuan2 *= date2.year < 0 ? -1 : 1;
	
	// Tinh so ngay chenh lech
	return abs(date1.year*365 + soNamNhuan1 + dayinyear1 - date2.year*365 - soNamNhuan2 - dayinyear2);
}

int main() {
	struct Date ngay1; struct Date ngay2;
	printf("Nhap dd mm yyyy date 1: "); scanf("%d %d %d", &ngay1.day, &ngay1.month, &ngay1.year);
	printf("Nhap dd mm yyyy date 2: "); scanf("%d %d %d", &ngay2.day, &ngay2.month, &ngay2.year);
	if(kiemtra(ngay1) && kiemtra(ngay2)) printf("Ket qua: %.0f", tinh(ngay1, ngay2));
	return 0;
}