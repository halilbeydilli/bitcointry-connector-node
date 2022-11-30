'use strict'

const { validateRequiredParameters } = require('../helpers/validation')

const Trade = superclass => class extends superclass {
 
  // newOrderTest (symbol, side, type, options = {}) {
  //   validateRequiredParameters({ symbol, side, type })

  //   return this.signRequest(
  //     'POST',
  //     '/api/v3/order/test',
  //     Object.assign(options, {
  //       symbol: symbol.toUpperCase(),
  //       side: side.toUpperCase(),
  //       type: type.toUpperCase()
  //     })
  //   )
  // }

  /**
   * New Order (TRADE)<br>
   *
   * POST /api/v3/order<br>
   *
   *
   *
   * @param {string} symbol
   * @param {string} side
   * @param {string} type
   * @param {object} [options]
   * @param {string} [options.timeInForce]
   * @param {number} [options.quantity]
   * @param {number} [options.quoteOrderQty]
   * @param {number} [options.price]
   * @param {string} [options.newClientOrderId]
   * @param {number} [options.strategyId]
   * @param {number} [options.strategytype] - The value cannot be less than 1000000.
   * @param {number} [options.stopPrice]
   * @param {number} [options.trailingDelta]
   * @param {number} [options.icebergQty]
   * @param {string} [options.newOrderRespType]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  newOrder (symbol, side, type, options = {}) {
    validateRequiredParameters({ symbol, side, type })
    
    return this.signRequest(
      'POST',
      '/api/v1/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        side: side.toUpperCase(),
        type: type.toUpperCase()
      })
    )
  }

  /**
   * Cancel Order (TRADE)<br>
   *
   * DELETE /api/v3/order<br>
   *
   * 
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param {number} [options.orderId]
   * @param {string} [options.origClientOrderId]
   * @param {string} [options.newClientOrderId]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  cancelOrder (symbol, options = {}) {
    validateRequiredParameters({ symbol })

    return this.signRequest(
      'DELETE',
      '/api/v1/order',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Cancel all Open Orders on a Symbol (TRADE)<br>
   *
   * DELETE /api/v3/openOrders<br>
   *
   * 
   * @param {string} symbol
   * @param {object} [options]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  cancelOpenOrders (symbol, options = {}) {
    validateRequiredParameters({ symbol })

    return this.signRequest(
      'DELETE',
      '/api/v3/openOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  /**
   * Current Open Orders (USER_DATA)<br>
   *
   * GET /api/v3/openOrders<br>
   *
   *
   *
   * @param {object} [options]
   * @param {string} [options.symbol]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  openOrders (options = {}) {
    return this.signRequest(
      'GET',
      '/api/v1/openOrders',
      options
    )
  }

  /**
   * All Orders (USER_DATA)<br>
   *
   * GET /api/v3/allOrders<br>
   *
   *
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param {number} [options.orderId]
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.limit]
   * @param {string} [options.recvWindow] - The value cannot be greater than 60000
   */
  allOrders (symbol, options = {}) {
    validateRequiredParameters({ symbol })
    return this.signRequest(
      'GET',
      '/api/v1/allOrders',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  

 

  /**
   * Account Information (USER_DATA)<br>
   *
   * GET /api/v3/account<br>
   *
   *
   *
   * @param {object} [options]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  account (options = {}) {
    return this.signRequest(
      'GET',
      '/api/v1/account',
      options
    )
  }

  /**
   * Account Trade List (USER_DATA)<br>
   *
   * GET /api/v3/myTrades<br>
   *
   *
   *
   * @param {string} symbol
   * @param {object} [options]
   * @param {number} [options.orderId] - This can only be used in combination with symbol.
   * @param {number} [options.startTime]
   * @param {number} [options.endTime]
   * @param {number} [options.fromId]
   * @param {number} [options.limit]
   * @param {number} [options.recvWindow] - The value cannot be greater than 60000
   */
  myTrades (symbol, options = {}) {
    validateRequiredParameters({ symbol })

    return this.signRequest(
      'GET',
      '/api/v1/myTrades',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

}

module.exports = Trade
