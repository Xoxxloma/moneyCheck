export const toCurrency = (price) => {
  return new Intl.NumberFormat("ru-RU", {
    currency: "usd",
    style: "currency",
  }).format(price);
};