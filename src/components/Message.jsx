import Taro from '@tarojs/taro'
const Message = {
    success: function() {
        Taro.hideToast()
        Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
    },
    loading: function() {
        Taro.hideToast()
        Taro.showLoading()
    },
    error: function() {
        Taro.hideToast()
        Taro.showToast({
            title: '失败',
            icon: 'error',
            // image: '',
            duration: 2000
        })
    },
}
export default Message