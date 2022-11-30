'use strict'

const { validateRequiredParameters } = require('../helpers/validation')

const Market = superclass => class extends superclass {

  ping () {
    return this.publicRequest('GET', '/api/v1/ping')
  }
  
  time () {
    return this.publicRequest('GET', '/api/v1/time')
  }

  exchangeInfo (options = {}) {
    if (Object.prototype.hasOwnProperty.call(options, 'symbol')) {
      options.symbol = options.symbol.toUpperCase()
    }
    return this.publicRequest(
      'GET',
      '/api/v1/exchangeInfo',
      options
    )
  }

  depth (symbol, options = {}) {
    validateRequiredParameters({ symbol })

    return this.publicRequest(
      'GET',
      '/api/v1/depth',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  trades (symbol, options = {}) {
    validateRequiredParameters({ symbol })

    return this.publicRequest(
      'GET',
      '/api/v1/trades',
      Object.assign(options, {
        symbol: symbol.toUpperCase()
      })
    )
  }

  klines (symbol, interval, options = {}) {
    validateRequiredParameters({ symbol, interval })
    return this.publicRequest(
      'GET',
      '/api/v1/klines',
      Object.assign(options, {
        symbol: symbol.toUpperCase(),
        interval
      })
    )
  }

  avgPrice (symbol) {
    validateRequiredParameters({ symbol })

    return this.publicRequest(
      'GET',
      '/api/v1/avgPrice', { symbol: symbol.toUpperCase() }
    )
  }

  ticker (symbol = '') {
    return this.publicRequest(
      'GET',
      '/api/v1/ticker', { symbol: symbol.toUpperCase() }
    )
  }

  tickerPrice (symbol = '', symbols = []) {
    symbols = symbols.map(symbol => symbol.toUpperCase())

    return this.publicRequest(
      'GET',
      '/api/v1/ticker/price', { symbol: symbol.toUpperCase(), symbols }
    )
  }

  bookTicker (symbol = '', symbols = []) {
    symbols = symbols.map(symbol => symbol.toUpperCase())

    return this.publicRequest(
      'GET',
      '/api/v1/ticker/bookTicker', { symbol: symbol.toUpperCase(), symbols }
    )
  }
}

module.exports = Market
