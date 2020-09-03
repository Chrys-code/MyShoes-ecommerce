export function getFromStorage() {
  try {
    const valueStr = localStorage.getItem();
    if (valueStr) {
      return JSON.parse(valueStr);
    }
    return null;
  } catch (err) {
    return null;
  }
}

export function setInStorage(obj) {
  try {
    localStorage.setItem(JSON.stringify(obj));
  } catch (err) {
    console.error(err);
  }
}
