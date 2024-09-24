export default class Stack<T> {
  private data: Array<T> = [];

  public push(value: T): number {
    this.data.push(value);

    return this.length();
  }

  public pop(): T | undefined {
    return this.data.pop();
  }

  public peek(): T | undefined {
    return this.isEmpty() ? undefined : this.data[this.length() - 1];
  }

  public isEmpty(): boolean {
    return this.length() === 0;
  }

  public length(): number {
    return this.data.length;
  }
}
