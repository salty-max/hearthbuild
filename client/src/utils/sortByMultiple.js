import sortBy from './sortBy';

const sortByMultiple = () => {

  const props = arguments;
  return (a, b) => {
    let i = 0, result = 0, numberOfProperties = props.length;

    while (result === 0 && i < numberOfProperties) {
      result = sortBy(props[i])(a, b);
      i++;
    }
    return result;
  }
}

export default sortByMultiple;