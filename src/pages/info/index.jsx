import BaseComponent from '../../components/BaseComponent'
import { AtForm , AtInput, AtButton,AtList,AtListItem,AtActionSheet ,AtFloatLayout,AtTextarea,AtActionSheetItem  } from "taro-ui"
import { View,Text,Picker,Input } from '@tarojs/components'
import './index.scss'
import InputListItem from '../../components/InputListItem';
import PickerListItem from '../../components/PickerListItem';

export default class Index extends BaseComponent {

    constructor() {
        super();
        this.state = {
            value: '',
            form: {},
            selector: ['男','女'],
            multiSelector: [['大号', '中号', '小号'], ['红色', '白色']],
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
    onClose() {
        this.setState({namePop: false})
    }
    
    onCloseSignPop() {
        this.setState({signPop: false})
    }
    render() {
        const mulitSelectorValues = this.state.form.area
        return <View className='info'>
            <AtList hasBorder={false}>
                <InputListItem
                    title='姓名'
                    extraText={'设置姓名'} 
                    maxlength={20}
                    placeholder='请输入姓名'
                    value={this.state.form.name}
                    rule='限制4-20个字符，可由中英文、数字、“_”、“-”组成'
                    onChange={v => this.handleChange('name',v)}
                ></InputListItem>
                <PickerListItem
                    title='性别'
                    extraText={this.state.form.sex || '请选择性别'}
                    mode='selector' 
                    range={this.state.selector} 
                    onChange={v => this.handleChange('sex',v)}
                ></PickerListItem>

                <PickerListItem
                    title='规格'
                    extraText={this.state.form.sku || '请选择规格'}
                    mode='multiSelector' 
                    range={this.state.multiSelector}
                    onChange={v => this.handleChange('sku',v)}
                ></PickerListItem>

                <PickerListItem
                    title='生日'
                    extraText={this.state.form.birthday || '请选择生日'}
                    mode='date' 
                    onChange={v => this.handleChange('birthday',v)}
                ></PickerListItem>

                <InputListItem
                    inputType='textarea'
                    title='个性签名'
                    extraText={'设置签名'} 
                    maxlength={200}
                    placeholder='介绍一下自己，让大家了解和关注你~'
                    value={this.state.form.signature}
                    onChange={v => this.handleChange('signature',v)}
                ></InputListItem>

            </AtList>

            {/* <AtForm>
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
                        
                
                
                <View className='form-actions'>
                    <AtButton type='primary' onClick={this.onSubmit.bind(this)}>提交</AtButton>
                    <AtButton onClick={this.onReset.bind(this)}>重置</AtButton>
                </View>
            </AtForm>
            <AtFloatLayout isOpened={this.state.floatShow} title="填写的内容是" onClose={() => this.setState({floatShow: false})}>
                <View>姓名：{this.state.form.name}</View>
                <View>性别：{this.state.form.sex}</View>
                <View>个性签名：{this.state.form.signature}</View>
            </AtFloatLayout> */}
        </View>
    }

}