import './map.scss'
import React from 'react'

import { CoverView,View, Map } from '@tarojs/components'

const normalCallout = {
  id: 1,
  latitude: 23.098994,
  longitude: 113.32252,
  callout: {
    content: '文本内容',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center',
  }
}

const customCallout1 = {
  id: 2,
  latitude: 23.097994,
  longitude: 113.32352,
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: 'ALWAYS',
  },
}

const customCallout2 = {
  id: 3,
  latitude: 23.096994,
  longitude: 113.32452,
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: 'ALWAYS',
  },
}

const customCallout3 = {
  id: 4,
  latitude: 23.095994,
  longitude: 113.32552,
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: 'ALWAYS',
  },
}

const customMarkers = [
  customCallout1,
  customCallout2,
  customCallout3,
]

const mapMarkers = [
  normalCallout,
  ...customMarkers
]

export default class PageView extends React.Component {
  onTap () {}
  render() {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
            <Map
                setting={{}}
                markers={mapMarkers}
                latitude={23.096994}
                longitude={113.324520}
                style={{ height: '100vh', width: '100vw' }}
              >
                <CoverView slot='callout'>
                  {
                    customMarkers.map(item => (
                      /** 自定义样式的 callout */
                      <CoverView marker-id={item.id} key={item.id} >
                        <View>导航{item.id}</View>
                      </CoverView>
                    ))
                  }
                </CoverView>
              </Map>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
