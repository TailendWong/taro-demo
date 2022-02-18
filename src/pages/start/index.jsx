import BaseComponent from '../../components/BaseComponent'
import { AtGrid,AtButton,AtToast } from "taro-ui"
import { View,Text,Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import Tools from '../../util/Tools'
import Taro from '@tarojs/taro'
import storage from '../../util/Storage'

export default class Index extends BaseComponent {

    state = {
      current: 0,
      duration: 500,
      interval: 3000,
      isCircular: true,
      verticalIsCircular: true,
      isAutoplay: true,
      verticalIsAutoplay: false,
      hasIndicatorDots: true,
      verticalHasIndicatorDots: true,
      open: false,
    }

    onGridClick(item,index) {
      console.log(item,index)
      if (item.url) {
        Tools.jumpTo(item.url)
      } else if (item.dyflag) {
      
        let tmplIds = ['MsXfMZhiJ4KvGM2kaR3luizI5PnMuaOtKqqCPpFYr9Y']

        if(storage.getSessionStorage('userInfo')) {
          Taro.requestSubscribeMessage({
            tmplIds: tmplIds,
            success: function (res) { 
              console.log("res",res);
              if("reject" === res[tmplIds[0]]) {
                Tools.alert('拒绝订阅')
                return
              }

              let userInfo = storage.getSessionStorage('userInfo');

              Taro.request({
                url: 'http://localhost:20017/user/push',
                data: {
                  name: userInfo && userInfo.nickName,
                },
                header: {
                  'content-type': 'application/json',
                  'wxopenid': Tools.getOpenid(),
                },
                success: res => Tools.alert('订阅成功！')
              })
              
            }
          
          })
        } else {
          Tools.alert('请先登录！','',() => {
            // Tools.jumpTo('/pages/login/index')
            Taro.getUserProfile({
              desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
              success: (res) => {
                let userInfo = res.userInfo;
                storage.setSessionStorage('userInfo',userInfo)
                Tools.alert('登录成功！')
              },
              fail: (res) => Tools.alert('登录失败！')
            })
          })
        }
        
        
      } else {
        this.setState({open: true})
      }
      
    }

    componentDidMount() {
      Tools.login()
    }

    render() {
      const { current, isAutoplay, duration, isCircular, interval, hasIndicatorDots, verticalIsCircular, verticalHasIndicatorDots, verticalIsAutoplay } = this.state
        return <View>
            <AtToast isOpened={this.state.open} text="敬请期待..."></AtToast>
            <Swiper
                slideMult='10'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                current={current}
                duration={duration}
                interval={interval}
                circular={isCircular}
                autoplay={isAutoplay}
                indicatorDots={hasIndicatorDots}
                preMargin='20'>
                <SwiperItem>
                  <View className='demo-text-1'></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2'></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-3'></View>
                </SwiperItem>
            </Swiper>
            <View className='welcome'>
              <View className='hello'>张三，您好！</View>
            </View>
            <AtGrid columnNum={4} hasBorder={false} onClick={this.onGridClick.bind(this)}
            data={
            [
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/5F/rBEEDl4FzcCAZQlzAAADb39X560062.png',
                 value: '推荐'
               },
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/70/rBEEDl8O1seAMyOaAAACo74YwZk611.png',
                 value: '教师团'
               },
              //  {
              //    image: 'http://test.fs.rchvip.cn:80/group1/M00/00/70/rBEEDl8OWw-AA-yCAAADm-neipc849.png',
              //    value: '直播课'
              //  },
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/70/rBEEDl8OWzyASIUIAAADr5zWR-E357.png',
                 value: '学习通知',
                 dyflag: 1
               },
              //  {
              //    image: 'http://test.fs.rchvip.cn:80/group1/M00/00/5F/rBEEDl4FzjSAdT6YAAADKBlsT5U935.png',
              //    value: '广场'
              //  },
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/70/rBEEDl8OWmeAexlKAAADKfcuDbY891.png',
                 value: '个人信息',
                 url: '/pages/info/index'
               }
             ]
           } />
        </View>
    }

}