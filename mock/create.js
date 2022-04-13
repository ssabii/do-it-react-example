const getRandomNumber = (min, max) => {
  const range = max - min + 1;
  return parseInt(Math.random() * range + min, 10);
};

const createData = (index) => {
  switch (getRandomNumber(0, 2)) {
    case 1:
      return {
        id: `DOIT${index}`,
        code: 'DOIT',
        name: '두잇코인',
        totalPrice: getRandomNumber(10000000, 800000000).toString(),
        currentPrice: getRandomNumber(20000, 25000).toString(),
        amount: getRandomNumber(1, 30).toString(),
        datetime: '2019/01/20 08:23:24',
      };
    case 2: {
      return {
        id: `ETH${index}`,
        code: 'ETH',
        name: '이더리움',
        totalPrice: getRandomNumber(10000000, 500000000).toString(),
        currentPrice: getRandomNumber(40000, 60000).toString(),
        amount: getRandomNumber(100, 1000).toString(),
        datetime: '2019/01/20 08:23:25',
      };
    }
    default: {
      return {
        id: `BTX${index}`,
        code: 'BTX',
        name: '비트코인',
        totalPrice: getRandomNumber(100000000000, 200000000000).toString(),
        currentPrice: getRandomNumber(10000000, 40000000).toString(),
        amount: getRandomNumber(0, 10).toString(),
        datetime: '2019/01/20 08:23:25',
      };
    }
  }
};

module.exports = function () {
  return {
    users: [],
    transactions: Array(100)
      .fill('')
      .map((_, index) => createData(index)),
  };
};
