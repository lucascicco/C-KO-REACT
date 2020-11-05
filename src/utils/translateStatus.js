export default (status) => {
  switch (status) {
    case 'open':
      return 'Aberto';
    case 'closed':
      return 'Pausado';
    case 'soldout':
      return 'Esgotado';
    case 'deleted':
      return 'Deletado';
    default:
      return 'Status inválido';
  }
};
