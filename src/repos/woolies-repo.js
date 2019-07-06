import rp from 'request-promise-native'
import { stringify } from 'qs'
import shopperHistoryMock from '../../test/mocks/shopper-history-response'
import productsMock from '../../test/mocks/products-response'

export default class WooliesRepo {
  constructor({
    baseUrl = process.env.WOOLIES_BASE_URL ||
      'http://dev-wooliesx-recruitment.azurewebsites.net/api/resource',
    token = process.env.WOOLIES_TOKEN || 'e902399f-ae3a-4a9e-b066-61b3c7fd9aa0',
    http = rp,
  } = {}) {
    this.baseUrl = baseUrl
    this.token = token
    this.http = http
  }

  getShopperHistory() {
    return Promise.resolve(shopperHistoryMock)

    // eslint-disable-next-line
    return this.http({
      url: `${this.baseUrl}/shopperHistory?${stringify({
        token: this.token,
      })}`,
    })
  }

  getProducts() {
    return Promise.resolve(productsMock)

    // eslint-disable-next-line
    return this.http({
      url: `${this.baseUrl}/products?${stringify({
        token: this.token,
      })}`,
    })
  }
}
