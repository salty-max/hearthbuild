/*
 * Remove ducplicated cards from display
 * Replacing it by a count
*/


const removeDuplicates = (myArr, prop) => {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

export default removeDuplicates;