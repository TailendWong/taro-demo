import Taro from '@tarojs/taro'

function jumpTo(url) {
    Taro.navigateTo({url:url})
}

function httpGet(url) {
    return Taro.request({
        url: url,
        header: {
        'content-type': 'application/json'
        }
    })
}

function alert(msg, title, cb) {
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
}

export {
    alert,
    jumpTo,
    httpGet
}