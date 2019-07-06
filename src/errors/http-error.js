export default class HttpError {
  constructor(status, message) {
    return {
      message,
      status,
    }
  }
}
