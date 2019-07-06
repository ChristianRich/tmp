import HttpError from '../errors/http-error'

export const SORT_METHOD_LOW = 'low' // Low to high price
export const SORT_METHOD_HIGH = 'high' // High to Low Price
export const SORT_METHOD_ASC = 'ascending' // A - Z sort on the name
export const SORT_METHOD_DESC = 'descending' // Z - A sort on the name
export const SORT_METHOD_RECOMMENDED = 'recommended' // Shopper history popularity

export default class WooliesService {
  constructor({ wooliesRepo }) {
    this.wooliesRepo = wooliesRepo
  }

  async sortProducts(sortOption) {
    if (!sortOption) {
      throw new HttpError(400, 'sortOption required')
    }

    const products = await this.wooliesRepo.getProducts()

    if (sortOption === SORT_METHOD_LOW) {
      return products.sort((a, b) => a.price - b.price)
    } else if (sortOption === SORT_METHOD_HIGH) {
      return products.sort((a, b) => b.price - a.price)
    } else if (sortOption === SORT_METHOD_ASC) {
      return products.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    } else if (sortOption === SORT_METHOD_DESC) {
      return products.sort((a, b) => {
        if (a.name < b.name) return 1
        if (a.name > b.name) return -1
        return 0
      })
    } else if (sortOption === SORT_METHOD_RECOMMENDED) {
      // eslint-disable-next-line
      const shopperHistory = await this.wooliesRepo.getShopperHistory()
      return products
    } else {
      throw new HttpError(400, `Invalid sort method ${sortOption}`)
    }
  }
}

/**

This will call your api looking for a range of different sorting options at your base url /sort
Your Api needs to call the "products" resource to get a list of available productt

This endpoint will need to accept a query string parameter called "sortOption" 
which will take in the following strings 
- "Low" - Low to High Price 
- "High" - High to Low Price 
- "Ascending" - A - Z sort on the Name 
- "Descending" - Z - A sort on the Name 
- "Recommended" - this will call the "shopperHistory" resource to get a list of customers orders and needs to return based on popularity,
Your response will be in the same data structure as the "products" response (only sorted correctly)

*/
