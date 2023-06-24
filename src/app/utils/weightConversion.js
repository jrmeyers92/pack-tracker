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
  return `${lbs} lbs ${newOZ} oz`;
};
