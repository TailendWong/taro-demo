import BaseComponent from '../../components/BaseComponent'
import { AtList, AtListItem,AtAvatar } from "taro-ui"
import { View } from '@tarojs/components'
import {jumpTo} from '../../util/Tools';
import './index.scss'


export default class Index extends BaseComponent {

    constructor() {
        super();
    }

    render() {

        return <View className='mine'>
            <View className='header'>
                <View>
                    <AtAvatar circle text='张三'></AtAvatar>
                    <View className='name'>张三</View>
                </View>
            </View>
            <AtList>
                <AtListItem title='个人信息' arrow='right' onClick={() => jumpTo('/pages/info/index')} />
                <AtListItem title='通用' extraText='地区、音效等' arrow='right' />
                <AtListItem title='设置' arrow='right' />
    
            </AtList>
            <View style={{marginTop: 50}}>
                <AtList>
                    <AtListItem title='隐私协议' arrow='right' onClick={() => jumpTo('/pages/agree/index')} />
                </AtList>
            </View>
        
        </View>
    }

}