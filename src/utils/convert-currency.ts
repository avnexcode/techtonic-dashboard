type CurrencyType = "IDR" | "USD" | "EUR" | "JPY" | "CNY";

type CurrencyOptions = {
  type?: CurrencyType;
  withSymbol?: boolean;
  withDecimal?: boolean;
  decimalDigits?: number;
  compact?: boolean;
};

/**
 * Memformat angka menjadi format mata uang
 * @param amount - Jumlah dalam bentuk string atau number
 * @param options - Opsi formatting
 * @returns String dalam format mata uang
 */
export const convertCurrency = (
  amount: string | number,
  options: CurrencyOptions = {},
): string => {
  const {
    type = "IDR",
    withSymbol = true,
    withDecimal = false,
    decimalDigits = 0,
    compact = false,
  } = options;

  try {
    // Konversi input ke number
    let value =
      typeof amount === "string"
        ? parseFloat(amount.replace(/[^\d.-]/g, ""))
        : amount;

    // Validasi
    if (isNaN(value)) {
      throw new Error("Invalid number input");
    }

    // Konfigurasi format untuk tiap mata uang
    const currencyConfig = {
      IDR: { symbol: "Rp", position: "front" },
      USD: { symbol: "$", position: "front" },
      EUR: { symbol: "€", position: "front" },
      JPY: { symbol: "¥", position: "front" },
      CNY: { symbol: "¥", position: "front" },
    };

    // Format number sesuai locale
    let formattedNumber: string;

    if (compact && Math.abs(value) >= 1000) {
      // Format compact untuk angka besar
      const tiers = [
        { threshold: 1e12, suffix: "T" },
        { threshold: 1e9, suffix: "B" },
        { threshold: 1e6, suffix: "M" },
        { threshold: 1e3, suffix: "K" },
      ];

      const tier = tiers.find((t) => Math.abs(value) >= t.threshold);

      if (tier) {
        value = value / tier.threshold;
        formattedNumber = value.toFixed(1) + tier.suffix;
      } else {
        formattedNumber = value.toFixed(decimalDigits);
      }
    } else {
      // Format normal
      formattedNumber = withDecimal
        ? value.toFixed(decimalDigits)
        : Math.round(value).toString();

      // Tambahkan separator ribuan
      formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Tambahkan symbol mata uang jika diminta
    if (withSymbol) {
      const { symbol, position } = currencyConfig[type];
      return position === "front"
        ? `${symbol} ${formattedNumber}`
        : `${formattedNumber} ${symbol}`;
    }

    return formattedNumber;
  } catch (error) {
    console.error("Error formatting currency:", error);
    return "Invalid amount";
  }
};

// Contoh penggunaan:
const amount = 1234567.89;

// Format dasar
console.log(convertCurrency(amount)); // "Rp 1,234,568"
console.log(convertCurrency(amount, { type: "USD" })); // "$ 1,234,568"

// Dengan decimal
console.log(
  convertCurrency(amount, {
    withDecimal: true,
    decimalDigits: 2,
  }),
); // "Rp 1,234,567.89"

// Format compact
console.log(
  convertCurrency(amount, {
    compact: true,
  }),
); // "Rp 1.2M"

// Tanpa symbol
console.log(
  convertCurrency(amount, {
    withSymbol: false,
  }),
); // "1,234,568"

// Kombinasi opsi
console.log(
  convertCurrency(amount, {
    type: "EUR",
    withDecimal: true,
    decimalDigits: 2,
    compact: false,
  }),
); // "€ 1,234,567.89"

// Dengan input string
console.log(convertCurrency("1234567.89")); // "Rp 1,234,568"
console.log(convertCurrency("1,234,567.89")); // "Rp 1,234,568"
