const LocalStorage = {
  setItemToken(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.log("Save token error");
    }
  },
};

export default LocalStorage;
