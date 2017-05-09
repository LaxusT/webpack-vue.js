import uopConfig from './../config'

export default {
  baseURL: uopConfig.getOpt('baseURL'),
  timeout: 30000,
  method: 'post', // default
  transformRequest: [
    function (data) {
      // Do whatever you want to transform the data
          // Do whatever you want to transform the data
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }
  ],
  // transformResponse: [
  //   function (data) {
  //     // Do whatever you want to transform the data
  //     return JSON.parse(data)
  //   }
  // ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
