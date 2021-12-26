// debounce를 실행하려면 export를 삭제해야 함
export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const run = debounce((val) => console.log(val), 100);
console.log(run);
run('a');
run('b');
run('2');
