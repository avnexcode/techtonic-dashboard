type DateFormat =
  | "full" // 'Senin, 8 Februari 2025'
  | "medium" // '8 Feb 2025'
  | "short" // '08/02/2025'
  | "time" // '14:30'
  | "dateTime"; // '8 Feb 2025, 14:30'

const MONTHS_ID = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const MONTHS_SHORT_ID = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const DAYS_ID = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

/**
 * Memformat date menggunakan JavaScript native
 * @param date - Input date (Date object, ISO string, atau timestamp)
 * @param formatType - Tipe format yang diinginkan
 * @returns String date yang sudah diformat
 */
export const formatDate = (
  date: Date | string | number,
  formatType: DateFormat = "medium",
): string => {
  try {
    // Konversi input ke Date object
    const dateObject = new Date(date);

    // Validasi date
    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid date input");
    }

    // Ambil komponen date
    const day = dateObject.getDate();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();
    const dayName = DAYS_ID[dateObject.getDay()];
    const hours = dateObject.getHours().toString().padStart(2, "0");
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");

    // Format berdasarkan tipe yang diminta
    switch (formatType) {
      case "full":
        return `${dayName}, ${day} ${MONTHS_ID[month]} ${year}`;

      case "medium":
        return `${day} ${MONTHS_SHORT_ID[month]} ${year}`;

      case "short":
        const monthNumber = (month + 1).toString().padStart(2, "0");
        const dayNumber = day.toString().padStart(2, "0");
        return `${dayNumber}/${monthNumber}/${year}`;

      case "time":
        return `${hours}:${minutes}`;

      case "dateTime":
        return `${day} ${MONTHS_SHORT_ID[month]} ${year}, ${hours}:${minutes}`;

      default:
        return `${day} ${MONTHS_SHORT_ID[month]} ${year}`;
    }
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};

// Fungsi helper untuk menambah leading zero
// const addLeadingZero = (num: number): string => {
//   return num < 10 ? `0${num}` : num.toString();
// };

// Contoh penggunaan:
const date = new Date("2025-02-08T14:30:00");

// Format standar
console.log(formatDate(date, "full")); // "Sabtu, 8 Februari 2025"
console.log(formatDate(date, "medium")); // "8 Feb 2025"
console.log(formatDate(date, "short")); // "08/02/2025"
console.log(formatDate(date, "time")); // "14:30"
console.log(formatDate(date, "dateTime")); // "8 Feb 2025, 14:30"

// Berbagai tipe input
console.log(formatDate("2025-02-08T14:30:00")); // ISO string
console.log(formatDate(1738309800000)); // Timestamp
