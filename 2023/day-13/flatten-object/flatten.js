const response = {
  name: "Manu",
  age: 21,
  characteristics: {
    height: "6 feet",
  },
  techStack: {
    language: "Javascript",
    framework: {
      name: "Nextjs",
      version: "12",
    },
  },
};

// response = {
//     age: 21,
//     characteristics.height: "6 feet",
//     name: "Manu",
//     techStack.framework.name: "Nextjs",
//     techStack.framework.version: "12",
//     techStack.language: "Javascript"
// }

function flatten(obj) {
  const result = {};

  for (const [parentKey, parentValue] of Object.entries(obj)) {
    if (typeof parentValue === "object" && !Array.isArray(parentValue)) {
      for (const [childKey, childValue] of Object.entries(
        flatten(parentValue)
      )) {
        result[`${parentKey}.${childKey}`] = childValue;
      }
    } else {
      result[parentKey] = parentValue;
    }
  }

  return result;
}

console.log(flatten(response));
