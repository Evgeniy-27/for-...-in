export const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export function orderByProps(obj, [...rest]) {
  const result = [];
  rest.forEach(elem => {
    result.push({ 'key': elem, 'value': obj[elem] });
  })

  const arrSort = [];
  Object.keys(obj).forEach((elem) => {
    if (rest.includes(elem) !== true) {
      arrSort.push(elem);
    }
  });
  arrSort.sort();
  arrSort.forEach((elem) => {
    result.push({ key: elem, value: obj[elem] });
  });
  return result;
}
//console.log(orderByProps(obj, ['name', 'level']));