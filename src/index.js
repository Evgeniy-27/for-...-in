export const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export function orderByProps(obj, [key1, key2]) {
  const result = [];
  result.push({ key: key1, value: obj[key1] },
              { key: key2, value: obj[key2] });

  const arrSort = [];
  Object.keys(obj).forEach((elem) => {
    if (elem !== key1 && elem !== key2) {
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