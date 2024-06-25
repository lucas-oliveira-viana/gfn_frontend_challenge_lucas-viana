export const createPaginatedArray = (items: any[], pageSize: number) => {
  const emptyArray: any[][] = [[]];

  const itemsSeparatedByPageSize = emptyArray.concat(
    chunkArray(structuredClone(items), pageSize)
  );

  const pageNumbersToArray = Array.from(
    Array(itemsSeparatedByPageSize.length).keys()
  );

  pageNumbersToArray.shift();

  return { itemsSeparatedByPageSize, pageNumbersToArray };
};

const chunkArray = (array: any[], chunkSize: number) => {
  const results = [];

  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }

  return results;
};
