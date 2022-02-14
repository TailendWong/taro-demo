import BaseComponent from '../../components/BaseComponent'
import { AtForm , AtInput, AtButton,AtList,AtListItem,AtActionSheet ,AtFloatLayout,AtTextarea,AtActionSheetItem  } from "taro-ui"
import { View,Text,Picker,Input } from '@tarojs/components'
import './index.scss'

export default class Index extends BaseComponent {

    constructor() {
        super();
        this.state = {
            value: '',
            form: {},
            selector: ['男','女'],
            multiSelector: [['饭', '粥', '粉'], ['猪肉', '牛肉']],
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
            <AtList className='tglist' hasBorder={false}>
                <View>
                    <AtListItem
                        arrow='right'
                        title='姓名'
                        extraText={this.state.form.name || '设置姓名'}
                        onClick={() => this.setState({namePop: true})}
                    >
                        
                    </AtListItem>
                    <AtFloatLayout isOpened={this.state.namePop} title="姓名" onClose={() => this.onClose()}>
                        <View className='main-layout'>
                            <View>
                                <AtInput
                                    className='single-input'
                                    name='name'
                                    type='text'
                                    clear={true}
                                    maxlength={20}
                                    placeholder='请输入姓名'
                                    value={this.state.stash}
                                    onChange={v => this.setState({stash:v})} 
                                />
                                <View className='rule-desc'>限制4-20个字符，可由中英文、数字、“_”、“-”组成</View>
                            </View>
                            <View className='at-row footer' >
                                <AtButton className='at-col-5' size='small' circle={true} onClick={() => {this.onClose();this.state.stash = this.state.form.name}}>取消</AtButton>
                                <AtButton className='at-col-5' size='small' type='primary' circle={true} onClick={() => {this.onClose();this.handleChange('name',this.state.stash)}}>确认</AtButton>
                            </View>
                        </View>
                    </AtFloatLayout>
                </View>

                <View>
                    <Picker mode='selector' range={this.state.selector} onChange={e => this.handleChange('sex',this.state.selector[e.detail.value])}>
                        <AtListItem
                            arrow='right'
                            title='性别'
                            extraText={this.state.form.sex || '请选择性别'}
                        />
                    </Picker>
                </View>   
                <View>
                    <Picker mode='multiSelector' range={this.state.multiSelector} onChange={e => this.handleChange('area',e.detail.value)}>
                        <AtListItem
                            arrow='right'
                            title='地区'
                            extraText={mulitSelectorValues?`${this.state.multiSelector[0][mulitSelectorValues[0]]}, ${this.state.multiSelector[1][mulitSelectorValues[1]]}` : '请选择地区'}
                        />
                    </Picker>
                </View>
                <View>
                    <Picker mode='date' onChange={e => this.handleChange('birthday',e.detail.value)}>
                        <AtListItem
                            arrow='right'
                            title='生日'
                            extraText={this.state.form.birthday || '请选择生日'}
                        />
                    </Picker>
                </View>

                <View>
                    <AtListItem
                        arrow='right'
                        title='个性签名'
                        extraText={this.state.form.signature || '设置签名'}
                        onClick={() => this.setState({signPop: true})}
                    > 
                    </AtListItem>
                    <AtFloatLayout isOpened={this.state.signPop} title="个性签名" onClose={() => this.onCloseSignPop()}>
                        <View className='main-layout'>
                            <View>
                                <AtTextarea
                                    value={this.state.stash1}
                                    onChange={v => this.setState({stash1:v})} 
                                    maxLength={200}
                                    placeholder='介绍一下自己，让大家了解和关注你~'
                                />
                        
                            </View>
                            <View className='at-row footer'>
                                <AtButton className='at-col-5' size='small' circle={true} onClick={() => {this.onCloseSignPop();this.state.stash1 = this.state.form.signature}}>取消</AtButton>
                                <AtButton className='at-col-5' size='small' type='primary' circle={true} onClick={() => {this.onCloseSignPop();this.handleChange('signature',this.state.stash1)}}>确认</AtButton>
                            </View>
                        </View>
                    </AtFloatLayout>
                </View>
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