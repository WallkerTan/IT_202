export {};

enum weekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật",
}

console.log(typeof weekDays);

for (const day in weekDays) {
    console.log(weekDays[day as keyof typeof weekDays]);
}
