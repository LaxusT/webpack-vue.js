import _ from 'lodash'

function Config () {
  var env = 'production'
  if (__STAGE__ === 'development') {
    env = 'development'
  }
  this.constants = projectConfig[env]
}

Config.prototype.getOpt = function (name) {
  return name ? this.constants[name] : null
}
Config.prototype.setOpt = function (name, value) {
  name ? this.constants[name] = value : null
  return this
}
Config.prototype.setEnv = function (env) {
  var opts = projectConfig[env]
  if (opts) {
    _.merge(this.constants, opts)
  }
  return this
}
const projectConfig = {
  production: {
    baseURL: 'http://wx.op-fly.cn/Castrol_weChat_Interface/rest/'
  },
  development: {
    baseURL: 'http://op-fly.cn/Castrol_weChat_Interface/rest/'
    // },
    // dev: {
    //     baseURL: 'https://localhost:3000/'
    // },
  }
}

var ProxyConfig = (function () {
  var instance
  return function () {
    if (!instance) {
      instance = new Config()
    }
    return instance
  }
})()
/**
 * 微信网页授权
 */
// var Oauth2Config = {
//   appid: 'wxda9c1c03ec7bf1ae',
//   redirect_uri: 'http://op-fly.cn/index.html',
//   scope: 'snsapi_base',
//   state: '123321'
// }
// if (__STAGE__ === 'development') {
//   Oauth2Config = {
//     appid: 'wxa1cfabd68e2c785c',
//     redirect_uri: 'http://dev-uop-wx.opg.cn/uop/index.html',
//     scope: 'snsapi_base',
//     state: '123321'
//   }
// }
export default new ProxyConfig()
// export const APPID = Oauth2Config.appid
// export const REDIRECT_URI = Oauth2Config.redirect_uri
// export const SCOPE = Oauth2Config.scope
// export const STATE = Oauth2Config.state
