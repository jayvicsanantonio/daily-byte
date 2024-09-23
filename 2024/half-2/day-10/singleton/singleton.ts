let instance: Map<string, any> | null = null;

class Singleton {
  getInstance() {
    if (instance === null) {
      instance = new Map();
    }
    return instance;
  }
}

const singleton = Object.freeze(new Singleton());
export default singleton;
