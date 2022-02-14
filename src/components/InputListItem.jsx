import { PureComponent } from 'react'
import { AtInput,AtTextarea, AtButton,AtList,AtListItem ,AtFloatLayout } from "taro-ui"
import { View } from '@tarojs/components'
import './InputListItem.scss'

export default class InputListItem extends PureComponent {

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    state={
        popShow: false,
        stash: '',
    }

    onClose() {
        this.setState({popShow: false})
    }

    render() {
        let {title,value,extraText,placeholder,rule,maxlength,inputType} = this.props
        return <View>
            <AtListItem
                arrow='right'
                title={title}
                extraText={value || extraText}
                onClick={() => this.setState({popShow: true})}
            >
                
            </AtListItem>
            <AtFloatLayout isOpened={this.state.popShow} title={title} onClose={() => this.onClose()}>
                <View className='tg-float-layout'>
                    <View>
                        {inputType === 'textarea' ? <AtTextarea
                            value={this.state.stash}
                            onChange={v => this.setState({stash:v})} 
                            maxlength={maxlength || undefined}
                            placeholder={placeholder || undefined}
                        /> : <AtInput
                            name='name'
                            type='text'
                            clear={true}
                            maxlength={maxlength || undefined}
                            placeholder={placeholder || undefined}
                            value={this.state.stash}
                            onChange={v => this.setState({stash:v})} 
                        />}
                        {rule ? <View className='tg-input-rule-desc'>{rule}</View> : ''}
                    </View>
                    <View className='at-row footer' >
                        <AtButton className='at-col-5' size='small' circle={true} onClick={() => {this.onClose();this.state.stash = value}}>取消</AtButton>
                        <AtButton className='at-col-5' size='small' type='primary' circle={true} onClick={() => {this.onClose();this.props.onChange(this.state.stash)}}>确认</AtButton>
                    </View>
                </View>
            </AtFloatLayout>
        </View>
    }
}
