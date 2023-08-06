export const formatCreatedDate = (): string =>
  `${new Date().toLocaleString("en", {
    month: "long",
    day: "2-digit",
  })}, ${new Date().getFullYear()} `;

export const formatDates = (text: string): string =>
  [
    Array.from(
      new Set(text?.match(/([1-9]|[12]\d|3[01])\/([1-9]|1[0-2])\/[12]\d{3}/g))
    ),
  ]?.join(", ");