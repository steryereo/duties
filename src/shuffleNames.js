import shuffle from "lodash.shuffle";

function isAllDifferent(arr1, arr2) {
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === arr2[1]) return false;
  }

  return true;
}

export default function shuffleNames(originalOrder) {
  const shuffled = shuffle(originalOrder);

  // nobody can have the same duty as before
  if (!isAllDifferent(originalOrder, shuffle)) return shuffle(originalOrder);

  return shuffled;
}
