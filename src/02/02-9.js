const qs = 'banana=10&apple=20&orange=30';

function parse(qs) {
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; // key = 'banana'
    var value = parts[1]; // value = '10'
    result[key] = value; // result = {banana: '10'}
  }
  return result;
}

function parse(qs) {
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }
  return result;
}

function parse(qs) {
  const chunks = qs.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const parts = chunks[i].split('=');
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });
  return result;
}

function parse(qs) {
  const chunks = qs.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });
  return result;
}

function parse(qs) {
  const chunks = qs.split('&');
  const result = chunks.map((chunk) => {
    const [key, value1] = chunk.split('=');
    return { key: key, value: value };
  });
}

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function parse(qs) {
  const chunks = qs.split('&');
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}
