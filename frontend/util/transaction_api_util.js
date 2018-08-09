export const trade = transaction => (
  $.ajax ({
    method: 'POST',
    url: 'api/transactions'
    data: { transaction }
  })
);

export const viewTrade = id => (
  $.ajax ({
    method: 'GET',
    url: `api/transactions/${id}`
  })
);
