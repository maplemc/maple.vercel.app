export const useLocalStorage = () => {
  function getLocalStorageItem(key: string) {
    const json = localStorage.getItem(key);

    if(json == null) return json;

    return JSON.parse(json);
  }

  function setLocalStorageItem(key: string, value: any) {
    const json = JSON.stringify(value);

    localStorage.setItem(key, json);
  }

  function removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
  }

  return {
    getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem
  }
}
