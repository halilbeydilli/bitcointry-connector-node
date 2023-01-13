'use strict'


const Account = superclass => class extends superclass {


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
  getBalance (symbol, options = {}) {    
    return this.signRequest(
      'GET',
      '/api/v1/account/balance',
      Object.assign(options, {
        symbol: (symbol?.toUpperCase()) || '',
      })
    )
  }


}

module.exports = Account
