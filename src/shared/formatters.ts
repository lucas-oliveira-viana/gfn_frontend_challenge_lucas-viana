export const formatNumberToBRLCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value));

export const formatBRLCurrencyToNumber = (currency: string) => {
  const symbolRemoved = currency.replace("R$", "").trim();
  const [value, decimal] = symbolRemoved.split(",");
  return `${value.replaceAll(".", "")}.${decimal?.substring(0, 2) || 0}`;
};
