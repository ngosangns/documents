#include <stdio.h>
long days_from_civil(long d, long m, long y) {
    y -= m <= 2;
    long era = (y >= 0 ? y : y-399) / 400;
    long yoe = y - era * 400;      // [0, 399]
    long doy = (153*(m + (m > 2 ? -3 : 9)) + 2)/5 + d-1;  // [0, 365]
    long doe = yoe * 365 + yoe/4 - yoe/100 + doy;         // [0, 146096]
    return era * 146097 + doe - 719468;
}

long* civil_from_days(long z) {
	long result[3];
    z += 719468;
    long era = (z >= 0 ? z : z - 146096) / 146097;
    long doe = (z - era * 146097);          // [0, 146096]
    long yoe = (doe - doe/1460 + doe/36524 - doe/146096) / 365;  // [0, 399]
    long y = (yoe) + era * 400;
    long doy = doe - (365*yoe + yoe/4 - yoe/100);                // [0, 365]
    long mp = (5*doy + 2)/153;                                   // [0, 11]
    long d = doy - (153*mp+2)/5 + 1;                             // [1, 31]
    long m = mp + (mp < 10 ? 3 : -9);                            // [1, 12]
	result[0] = y + (m <= 2);
	result[1] = m;
	result[2] = d;
	return result;
}

int main() {
	long ngay, thang, nam;
	long *pre_day, *next_day;
	
	printf("Nhap ngay thang nam: ");
	scanf("%d %d %d", &ngay, &thang, &nam);
	pre_day = civil_from_days(days_from_civil(ngay,thang,nam)-1);
	printf("Ngay truoc: %d %d %d\n", pre_day[2], pre_day[1], pre_day[0]);
	next_day = civil_from_days(days_from_civil(ngay,thang,nam)+1);
	printf("Ngay sau: %d %d %d\n", next_day[2], next_day[1], next_day[0]);
	
	return 0;
}
