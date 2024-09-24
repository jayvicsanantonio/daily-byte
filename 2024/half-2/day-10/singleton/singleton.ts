let globalInstance: Map<string, any> | null = null;

export default {
  getInstance() {
    if (globalInstance === null) {
      globalInstance = new Map();
    }

    return globalInstance;
  },
};
