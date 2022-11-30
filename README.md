# Bitcointry connector in Nodejs



This is a lightweight library that works as a connector to [Bitcointry public API](https://bitcointry.com/tr/api/v1). It’s designed to be simple, clean, and easy to use with minimal dependencies.

## Installation

```bash
npm install @bitcointry/api
```

## Documentation

[https://github.com/bitcointryExchange/bitcointry-connector-node/](https://github.com/bitcointryExchange/bitcointry-connector-node)


## RESTful APIs

```javascript

const { Spot } = require('@bitcointry/api')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret);



client.exchangeInfo({ symbol: 'BTCUSDT' }).then((response) => console.log(response.data));

// client.ping().then((response) => console.log(response.data));
// client.time().then((response) => console.log(response.data));
// client.depth().then((response) => console.log(response.data));
// client.ticker().then((response) => console.log(response.data));
// client.tickerPrice().then((response) => console.log(response.data));
// client.bookTicker().then((response) => console.log(response.data));


//New order LIMIT and STOP LIMIT
const options = {
    quantity: 0.0005,
    price: 20279.36,
}
client.newOrder('BTCUSDT', 'SELL', 'LIMIT', options).then((response) => console.log(response.data));


//New order MARKET SELL
// const options = {
//     quantity: 0.0005
// }
// client.newOrder('BTCUSDT', 'SELL', 'MARKET', options).then((response) => console.log(response.data));


//New order BUY 
// const options = {
//     quoteOrderQty: 180.00,
// }
// client.newOrder('BTCUSDT', 'BUY', 'MARKET', options).then((response) => console.log(response.data));


//Cancel Order
// const options = {
//     orderId: 'order_id'
// }
// client.cancelOrder('BTCUSDT', options).then((response) => console.log(response.data));

//Open order list
//client.openOrders({symbol:"BTCUSDT"}).then((response) => console.log(response.data));


//allOrders list
//client.allOrders("BTCUSDT").then((response) => console.log(response.data));


//Trade history list
//client.myTrades("BTCUSDT").then((response) => console.log(response.data));
```



### Base URL

Defaults to `api.bitcointry.com`.