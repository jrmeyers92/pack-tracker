export const lbToOz = (lb) => {
  return lb * 16;
};

export const kgToOz = (kg) => {
  return kg * 35.27396;
};

export const gramToOz = (gram) => {
  return gram / 28.34952;
};

export const ozToLbAndOz = (oz) => {
  let newOZ = oz % 16;
  let lbs = (oz - newOZ) / 16;
  return `${lbs} lbs ${newOZ.toFixed(1)} oz`;
};

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

export const calculateCatagoryWeight = (arr) => {
  let weight = 0;
  arr.forEach((item) => {
    if (item.weight) {
      if (item.unitOfMeasure == "g") {
        weight += gramToOz(parseInt(item.weight * item.qty));
      } else if (item.unitOfMeasure == "kg") {
        weight += kgToOz(parseInt(item.weight * item.qty));
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

export const calculateTotalWeight = (arr) => {
  let weight = 0;
  arr.forEach((catagory) => {
    catagory.items.forEach((item) => {
      if (item.weight) {
        if (item.unitOfMeasure == "g") {
          weight += gramToOz(parseInt(item.weight * item.qty));
        } else if (item.unitOfMeasure == "kg") {
          weight += kgToOz(parseInt(item.weight * item.qty));
        } else if (item.unitOfMeasure == "lb") {
          weight += lbToOz(parseInt(item.weight * item.qty));
        } else {
          weight += parseInt(item.weight * item.qty);
        }
      }
    });
  });

  weight = Math.round(weight * 100) / 100;

  return weight;
};
