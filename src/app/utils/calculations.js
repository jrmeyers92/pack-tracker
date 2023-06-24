export const calculatePrice = (arr) => {
  let cost = 0;

  arr.forEach((item) => {
    if (!isNaN(parseInt(item.price))) {
      cost += parseInt(item.price * item.qty);
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
        weight += gramToOz(parseInt(item.weight * item.qty));
      } else if (item.unitOfMeasure == "kg") {
        weight += kgToOz(parseInt(item.weigh * item.qty));
      } else if (item.unitOfMeasure == "lb") {
        weight += lbToOz(parseInt(item.weight * item.qty));
      } else {
        weight += parseInt(item.weight * item.qty);
      }
    }
  });

  weight = Math.round(weight * 100) / 100;

  return weight;
};
