import { Component } from 'react'
import { View, Text, Input, Checkbox, Label } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.css'
import Tools from '../../util/Tools'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  state={
    tasks: [],
    text: ''
  }

  addTask() {
    let text = this.state.text
    if (text) {
      this.setState({text: '',tasks: [...this.state.tasks,{text}]})
    }
  }

  toggle(i) {
    let old = this.state.tasks[i].checked;
    this.state.tasks[i].checked = !old;
    this.forceUpdate();
  }

  render () {
    return (
      <View className='index'>
        <Input type='text' placeholder='请输入任务名称' focus value={this.state.text} onInput={(e) => this.state.text = e.detail.value} />
        <AtButton type='primary' onClick={() => this.addTask()}>添加</AtButton>
        <View>
          {this.state.tasks.map((item,i) => <View>
            <Label key={i} onClick={() => this.toggle(i)}>
                <Checkbox className={item.checked?'finish':''} value={i} checked={item.checked}>{item.text}</Checkbox>
                </Label>
          </View>)}   
        </View>
        <AtButton type='primary' onClick={() => Tools.jumpTo('/pages/grid/index')}>跳转</AtButton>
      </View>

    )
  }
}
