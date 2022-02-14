export default {
  pages: [
    'pages/start/index',
    'pages/grid/index',
    'pages/index/index',
    'pages/knowledge/index',
    'pages/mine/index',
    'pages/agree/index',
    'pages/camera/camera',
    'pages/map/map',
    'pages/info/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    backgroundColor: '#fff',
    selectedColor: '#dc0032',
    list: [
      {
        pagePath: 'pages/start/index',
        text: '首页',
        iconPath: 'asset/component/view.png',
        selectedIconPath: 'asset/component/view_red.png'
      },
      {
        pagePath: 'pages/knowledge/index',
        text: '知识',
        iconPath: 'asset/component/form.png',
        selectedIconPath: 'asset/component/form.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'asset/component/nav.png',
        selectedIconPath: 'asset/component/nav_red.png'
      }
    ]
  }
}
