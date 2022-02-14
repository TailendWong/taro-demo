import { PureComponent } from 'react'
import { AtListItem } from "taro-ui"
import { View,Picker } from '@tarojs/components'

export default class PickerListItem extends PureComponent {

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    handleValue(val) {
        if(Object.prototype.toString.call(val) === '[object Object]') {
            return val[this.props.rangeKey]
        } else {
            return val
        }
    }

    handleChange(value) {
        let {mode, range, onChange} = this.props;
    
        if(mode === 'multiSelector') {
            let values = range.map((arr,i) => this.handleValue(arr[value[i]]));
            onChange(values.join(','))
        } else if (mode === 'date'){
            onChange(value)
        } else {
            onChange(this.handleValue(range[value]))
        }
        
    }

    render() {
        let {title,value,extraText,mode,range,rangeKey,fields} = this.props
        return <View>
            <Picker mode={mode} fields={fields || undefined} range={range || undefined} rangeKey={rangeKey || undefined} onChange={e => this.handleChange(e.detail.value)}>
                <AtListItem
                    arrow='right'
                    title={title}
                    extraText={value || extraText}
                />
            </Picker>
        </View>
    }
}
