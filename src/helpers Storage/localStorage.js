const LocalStorage = {
  setItemToken(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.log("Save token error");
    }
  },
  getItemToken(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.log("get token error");
    }
  },
  removeItemToken(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log("error remove Token");
    }
  },
};

export default LocalStorage;
