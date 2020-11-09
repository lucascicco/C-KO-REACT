/* eslint-disable default-case */
export default ({ format, width, height, length, weight, diameter }) => {
  switch (format) {
    case 1:
      return (
        height >= 1 &&
        height <= 100 &&
        width >= 10 &&
        width <= 100 &&
        length >= 15 &&
        length <= 100 &&
        weight <= 30
      );
    case 2:
      return (
        length >= 18 &&
        length <= 100 &&
        diameter >= 5 &&
        diameter <= 91 &&
        weight <= 30
      );
    case 3:
      return (
        length >= 16 &&
        length <= 60 &&
        width >= 11 &&
        width <= 60 &&
        weight <= 1
      );
    default:
      return false;
  }
};
