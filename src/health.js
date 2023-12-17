export default function getHealth(obj) {
  let result = '';
  if (obj.health < 15) {
    result = 'critical';
  } else if (obj.health < 51) {
    result = 'wounded';
  } else {
    result = 'healthy';
  }
  return result;
}
