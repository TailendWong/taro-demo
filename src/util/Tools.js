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

export {
    jumpTo,
    httpGet
}