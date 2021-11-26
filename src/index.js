export const compose =
  (...Fns) =>
  (...x) => {
    let state = true;
    return Fns.reduceRight(
      (acc, fn) =>
        fn(
          ...(state
            ? (() => {
                state = false;
                return acc;
              })()
            : [acc])
        ),
      x
    );
  };
const stringToArr = str => str.split(' ');

const uppercaseFirstCharOfArrStr = arr =>
  arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

const arrToString = arr => arr.join(' ');

// Function invoke right to left
// left <---<---<--- right

const capitalizeString = compose(
  arrToString,
  uppercaseFirstCharOfArrStr,
  stringToArr
);

capitalizeString('capitalize the first letter of each word in a string');
