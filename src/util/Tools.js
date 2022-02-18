import Taro from '@tarojs/taro'
import storage from './Storage'

var tools = {
    jumpTo(url) {
        Taro.navigateTo({url:url})
    },
    
    httpGet(url) {
        return Taro.request({
            url: url,
            header: {
            'content-type': 'application/json'
            }
        })
    },
    
    alert(msg, title, cb) {
        Taro.showModal({
            title: title || '',
            showCancel: false,
            content: msg || '',
            success: function (res) {
                if (res.confirm) {
                    cb && cb()
                } else if (res.cancel) {
                  
                }
            }
        })
    },
    setOpenid: function(openid) {
        storage.setSessionStorage('openid',openid)
    },
    
    getOpenid: function() {
        return storage.getSessionStorage('openid')
    },

    login() {
        Taro.login({
            success: function (res) {
              if (res.code) {
                  console.log(res,'===========')
                //发起网络请求
                Taro.request({
                  url: 'http://localhost:20017/user/login',
                  data: {
                    code: res.code
                  }
                }).then(r => {
                  console.log('----------',r);
                  tools.setOpenid(r.data)
                })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
    },
    
    getUserInfo() {
        return Taro.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
              this.setState({
                userInfo: res.userInfo,
              })
            }
          })
    }

}


export default tools