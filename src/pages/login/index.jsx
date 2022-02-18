import BaseComponent from '../../components/BaseComponent'

import { View,Text } from '@tarojs/components'
import './index.scss'
import Tools from '../../util/Tools'

export default class Index extends BaseComponent {

    state = {
     
    }

    onGridClick(item,index) {
      Tools.alert('请先登录！','',() => {
        Tools.jumpTo('/pages/login/index')
      })
      Taro.requestSubscribeMessage({
        tmplIds: ['MsXfMZhiJ4KvGM2kaR3luizI5PnMuaOtKqqCPpFYr9Y'],
        success: function (res) { 
          Taro.request({
            url: 'http://localhost:20017/goods/notice',
            data: {
              code: res.code,
            }
          }).then(r => console.log('dfa',r))
        }
      })
      Tools.alert('订阅')
      
    }

    componentDidMount() {
    }

    render() {
        return <View>
            登录
        </View>
    }

}