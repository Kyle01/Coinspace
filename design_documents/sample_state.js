{
  entities: {
    Users: {
      1: {
        id: 1,
        username: 'User1'
        portfolioId: 2
      }
      2: {
        id: 2,
        username: 'BTCguy'
        portfolioId: 3
      }
      3: {
        id: 3,
        username: 'Coinguy'
        portfolioId: 4
      }
    Portfolio: {
      1: {
        id: 1,
        userId: 4
        positions: [1,2,5]
        transactions: [15,20,44,66,104]
      }
      2: {
        id: 2,
        userId: 2
        positions: [6]
        transactions: [13,19]
      }
      3: {
        id: 3,
        userId: 3
        positions: [15,22,45]
        transactions: [45,90,122,185]
      }
      .......
    Positions: {
      1: {
        id: 1,
        portfolio: 1
        name: 'bitcoin'
        size: 2.223020120
      }
      2: {
        id: 2,
        portfolio: 1
        name: 'ethereum'
        size: 9.2230123012301
      }
      3: {
        id: 3,
        portfolio: 3
        name: 'bitcoin'
        size: 2.223020120
      }
      .......
    Transaction: {
      1: {
        id: 1,
        portfolio: 1
        name: 'bitcoin'
        size: 1.002052
        price: $13,202.24
        buy?: true
        Timestamp: 12/19/2017 4:23 PM GMT
      }
      1: {
        id: 2,
        portfolio: 1
        name: 'bitcoin'
        size: 0.2302
        price: $17,520.22
        buy?: false
        Timestamp: 1/15/2017 3:23 PM GMT
      }
      1: {
        id: 2,
        portfolio: 1
        name: 'ethereum'
        size: 4.2302023
        price: $924.50
        buy?: true
        Timestamp: 2/22/2018 5:43 PM GMT
      }
      .......
    Coins: {
      1: {
        id: 1,
        name: 'bitcoin'
        price: [$6,940, 8/1/2018 5:42 PM GMT]
        historical price: [price1, price2, .... ]
      }
      2: {
        id: 1,
        name: 'ethereum'
        price: [$420.52, 8/1/2018 5:42 PM GMT]
        historical price: [price1, price2, .... ]
      }
      3: {
        id: 1,
        name: 'litecoin'
        price: [$71.05, 8/1/2018 5:42 PM GMT]
        historical price: [price1, price2, .... ]
      }
    }
  }
  ui: {
    ....
  }
  errors: {
    ....
  }
  session: { currentUserId: 2 }
}
