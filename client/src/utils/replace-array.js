const replaceArray = (string, find, replace) => {
  for (let i = 0; i < find.length; i++) {
    string = string.replace(find[i], replace[i]);
  }

  return string;
}

export default replaceArray;