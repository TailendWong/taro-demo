import BaseComponent from '../../components/BaseComponent'
import { View } from '@tarojs/components'
import './index.scss'


export default class Index extends BaseComponent {

    constructor() {
        super();
    }

    render() {

        return <View>
            <View style={{textAlign: 'center'}}>
                <View>嗯？涉及隐私了吗</View>
                <View>要啥隐私协议</View>
            </View>
        </View>
    }

}