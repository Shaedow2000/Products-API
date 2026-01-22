type methods = 'GET' | 'DELETE' | 'POST' | 'PATCH';

const response = ( status: number, method: methods, data: object ): object => {
  return {
    'status': status,
    'method': method,
    'data': {
      'product': data
    }
  }
}

export { response }
