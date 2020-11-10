export default (title) => {
  switch (title) {
    case 'first':
      return 'Meus produtos';
    case 'second':
      return 'Minhas vendas';
    case 'third':
      return 'Editar produto';
    default:
      return null;
  }
};
