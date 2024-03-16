export const formatNumber = (
  num: number,
  notation:
    | "standard"
    | "scientific"
    | "engineering"
    | "compact"
    | undefined = "compact"
) =>
  new Intl.NumberFormat("en", {
    notation,
    maximumFractionDigits: 1,
  }).format(num);
