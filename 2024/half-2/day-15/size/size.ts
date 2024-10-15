export default function size<
  T extends
    | Array<any>
    | Object
    | Map<any, any>
    | Set<any>
    | string
    | null
    | undefined
>(collection: T): number {
  if (Array.isArray(collection)) {
    return collection.length;
  }

  if (typeof collection === "string") {
    return collection.length;
  }

  if (
    collection === null ||
    collection === undefined ||
    typeof collection !== "object"
  ) {
    return 0;
  }

  if (collection.constructor === Set || collection.constructor === Map) {
    return collection.size;
  }

  return Object.keys(collection).length;
}
