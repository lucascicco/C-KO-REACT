export function addCategory(categorySelected) {
  return {
    type: '@product/ADD_CATEGORY_SELECTED',
    payload: { categorySelected },
  };
}

export function removeCategory() {
  return {
    type: '@product/REMOVE_CATEGORY_SELECTED',
  };
}

export function addFilter(filter) {
  return {
    type: '@product/ADD_FILTER',
    payload: { filter },
  };
}

export function removeFilter() {
  return {
    type: '@product/REMOVE_FILTER',
  };
}

export function addSearchText(text) {
  return {
    type: '@product/ADD_SEARCHTEXT',
    payload: { text },
  };
}

export function removeSearchItem() {
  return {
    type: '@product/REMOVE_FILTER',
  };
}

export function OpenModal() {
  return {
    type: '@product/MODAL_ON',
  };
}

export function CloseModal() {
  return {
    type: '@product/MODAL_OFF',
  };
}
