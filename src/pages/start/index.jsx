import BaseComponent from '../../components/BaseComponent'
import { AtGrid,AtButton,AtToast } from "taro-ui"
import { View,Text,Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
import { jumpTo } from '../../util/Tools'

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
        jumpTo(item.url)
      } else {
        this.setState({open: true})
      }
      
    }

    render() {
      const { current, isAutoplay, duration, isCircular, interval, hasIndicatorDots, verticalIsCircular, verticalHasIndicatorDots, verticalIsAutoplay } = this.state
        return <View>
            <AtToast isOpened={this.state.open} text="开发中"></AtToast>
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
                 value: '通知'
               },
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/70/rBEEDl8O1seAMyOaAAACo74YwZk611.png',
                 value: '教师团'
               },
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/70/rBEEDl8OWw-AA-yCAAADm-neipc849.png',
                 value: '直播课'
               },
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/70/rBEEDl8OWzyASIUIAAADr5zWR-E357.png',
                 value: '统计'
               },
               {
                 image: 'http://test.fs.rchvip.cn:80/group1/M00/00/5F/rBEEDl4FzjSAdT6YAAADKBlsT5U935.png',
                 value: '讨论组'
               },
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