export const onChange_onlyText = (text, callback) => {
  if (/^[a-zA-Z ]+$/.test(text) || text === '') {
    return callback(text);
  }
  return null;
};

export const onChange_onlyNumber = (text, callback) => {
  if (/^[0-9]+$/.test(text) || text === '') {
    return callback(text);
  }
  return null;
};

export const onChange_numberComma = (text, callback) => {
  if (/^[0-9,]+$/.test(text) || text === '') {
    return callback(text);
  }
  return null;
};

export const onChange_numberWeight = (text, callback) => {
  if (/^[0-9]+$/.test(text) || text === '') {
    if (parseInt(text, 10) > 30) {
      return callback('30');
    }
    return callback(text);
  }
  return null;
};

export const onChange_onlyTextandNumber = (text, callback) => {
  if (/^[a-zA-Z0-9,. ]+$/.test(text) || text === '') {
    return callback(text);
  }
  return null;
};
