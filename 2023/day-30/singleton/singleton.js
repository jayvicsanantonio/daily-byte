let instance;

class GlobalMap {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = new Map();
  }

  getInstance() {
    return instance;
  }
}

const singletonGlobalMap = Object.freeze(new GlobalMap());

export default singletonGlobalMap;
