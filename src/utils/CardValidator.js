export default (name, value) => {
  switch (name) {
    case 'number':
      return value
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
    case 'name':
      return value
        .replace(/\d/g, '')
        .replace(
          /`|~|!|@|#|\$|%|\^|&|\*|\(|\)|\+|=|\[|\{|\]|\}|\||\\|'|<|,|\.|>|\?|\/|""|;|:|-|"|_|\s/g,
          ''
        );
    case 'expiry':
      return value.replace(/\D/g, '').replace(/(\d{2})(\d{4})/, '$1/$2');
    case 'cvc':
      return value.replace(/\D/g, '');
    default:
      break;
  }
};
