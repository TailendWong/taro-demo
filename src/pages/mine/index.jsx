import BaseComponent from '../../components/BaseComponent'
import Taro from '@tarojs/taro';
import { AtList, AtListItem,AtAvatar } from "taro-ui"
import { View } from '@tarojs/components'
import Tools from '../../util/Tools';
import './index.scss'


export default class Index extends BaseComponent {

    constructor() {
        super();
    }

    scanCode() {
        Taro.scanCode({
            onlyFromCamera: true,
            success: (res) => {
              console.log(res)
              Tools.alert(res.result, '识别结果')
            },
            fail: (res) => {
                console.log(res)
                Tools.alert('二维码识别失败')
            }
        })
    }

    render() {
        let dtr = new Date().toLocaleDateString();
        let str = dtr > '2022/2/14';
        return <View className='mine'>
            <View className='header'>
                <View>
                    <AtAvatar circle text='张三'></AtAvatar>
                    <View className='name'>张三</View>
                </View>
            </View>
            <AtList>
                <AtListItem title='个人信息' arrow='right' onClick={() => Tools.jumpTo('/pages/info/index')} />
                <AtListItem title='通用' extraText='地区、音效等' arrow='right' onClick={() => Tools.jumpTo('/pages/camera/camera')} />
                <AtListItem title='设置' arrow='right' onClick={() => Tools.jumpTo('/pages/map/map')}/>
                <AtListItem title='扫一扫' arrow='right' onClick={() => this.scanCode()}/>
    
            </AtList>
            <View style={{marginTop: 50}}>
                <AtList>
                    <AtListItem title='隐私协议' arrow='right' onClick={() => Tools.jumpTo('/pages/agree/index')} />
                    <AtListItem title='版本号' extraText='1.0.3'onClick={() => Tools.alert(dtr + ',' + str)}/>
                </AtList>
            </View>
        
        </View>
    }

}