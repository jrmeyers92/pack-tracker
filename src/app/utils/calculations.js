export const calculatePrice = (arr) => {
  let cost = 0;

  arr.forEach((item) => {
    if (!isNaN(parseInt(item.price))) {
      cost += parseInt(item.price);
    } else {
      cost = cost;
    }
  });

  return cost;
};

export const calculateWeight = (arr) => {
  let weight = 0;
  arr.forEach((item) => {
    if (item.weight) {
      if (item.unitOfMeasure == "g") {
        weight += gramToOz(parseInt(item.weight));
      } else if (item.unitOfMeasure == "kg") {
        weight += kgToOz(parseInt(item.weight));
      } else if (item.unitOfMeasure == "lb") {
        weight += lbToOz(parseInt(item.weight));
      } else {
        weight += parseInt(item.weight);
      }
    }
  });

  weight = Math.round(weight * 100) / 100;

  return weight;
};
