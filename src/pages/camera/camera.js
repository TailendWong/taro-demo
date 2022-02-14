import './camera.scss'

import React from 'react'

import { Camera, Button, View } from '@tarojs/components'

export default class PageView extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      devicePosition: 'back'
    }
  }

  handleError() {
    alert('您的浏览器不允许使用摄像头')
  }

  handleStop() {
    alert('摄像头被非正常终止')
  }

  toggleDevice = () => {
    this.setState({
      devicePosition: this.state.devicePosition == 'back' ? 'front' : 'back'
    })
  }

  render() {
    return (
      <View className='components-page'>
        
              <Button type='primary' onClick={this.toggleDevice}>开启{this.state.devicePosition == 'back' ? '前置' : '后置'}镜头</Button>
              <Camera className='cammer-content' onStop={this.handleStop} onError={this.handleError} devicePosition={this.state.devicePosition}></Camera>
        
      </View>
    )
  }
}
