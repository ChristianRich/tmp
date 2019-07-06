import rp from 'request-promise-native'
import { stringify } from 'qs'
import shopperHistoryMock from '../../test/mocks/shopper-history-response'

const BASE_URL =
  'http://dev-wooliesx-recruitment.azurewebsites.net/api/resource'

export default class WooliesService {
  constructor({ baseUrl = BASE_URL, token, http = rp } = {}) {
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
}
