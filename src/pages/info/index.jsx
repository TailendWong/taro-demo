import BaseComponent from '../../components/BaseComponent'
import { AtForm , AtInput, AtButton,AtList,AtListItem,AtToast ,AtFloatLayout,AtTextarea  } from "taro-ui"
import { View,Text,Picker } from '@tarojs/components'
import './index.scss'

export default class Index extends BaseComponent {

    constructor() {
        super();
        this.state = {
            value: '',
            form: {},
            selector: ['男','女'],
            floatShow: false
          }
    }
    handleChange (key, value,event) {
        console.log(key , '=' , value);
        this.setState({
            form: Object.assign({},this.state.form,{[key]:value})
        })
    }
    onSubmit (event) {
        console.log('submit',this.state.form)
        this.setState({floatShow: true})
    }
    onReset (event) {
        this.setState({
            form: {},
        })
    }
    render() {

        return <View className='info'>
            <AtForm>
                <AtInput 
                title='姓名' 
                type='text' 
                placeholder='请输入姓名' 
                value={this.state.form.name} 
                onChange={this.handleChange.bind(this,'name')} 
                />
                 <Picker className='form-picker' mode='selector' range={this.state.selector} onChange={e => this.handleChange('sex',this.state.selector[e.detail.value])}>
                    <AtList>
                    <AtListItem
                        style
                        className={this.state.form.sex?'selected':''}
                        title='性别'
                        extraText={this.state.form.sex || '请选择性别'}
                    />
                    </AtList>
                </Picker>
                <AtList>
                    <AtListItem
                        style
                        title='个性签名'
                    > 
                    </AtListItem>
                </AtList>
                <AtTextarea
                    value={this.state.form.signature}
                    onChange={this.handleChange.bind(this,'signature')}
                    maxLength={200}
                    placeholder='介绍一下自己，让大家了解和关注你~'
                />
                        
                
                {/* <AtInput 
                title='个性签名' 
                type='text' 
                placeholder='请输入个性签名' 
                value={this.state.form.signature} 
                onChange={this.handleChange.bind(this,'signature')} 
                /> */}
                <View className='form-actions'>
                    <AtButton type='primary' onClick={this.onSubmit.bind(this)}>提交</AtButton>
                    <AtButton onClick={this.onReset.bind(this)}>重置</AtButton>
                </View>
            </AtForm>
            <AtFloatLayout isOpened={this.state.floatShow} title="填写的内容是" onClose={() => this.setState({floatShow: false})}>
                <View>姓名：{this.state.form.name}</View>
                <View>性别：{this.state.form.sex}</View>
                <View>个性签名：{this.state.form.signature}</View>
            </AtFloatLayout>
        </View>
    }

}