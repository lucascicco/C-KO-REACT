export const EmptyObject = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);

  return nullValue || emptyValue;
};
