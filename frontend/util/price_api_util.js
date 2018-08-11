export const getLastPrice = () => (
  $.ajax({
    method: 'GET',
    url: `api/prices/1`
  })
);


export const getPrices = (duration) => (
  $.ajax({
    method: 'GET',
    url: `api/prices/`,
    duration
  })
);
