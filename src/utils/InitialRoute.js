export default (signed, firstAccess) => {
  if (signed) {
    if (firstAccess) {
      return 'FirstAccess';
    }
    return 'App';
  }
  return 'Sign';
};
