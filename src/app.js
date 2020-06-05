module.exports = {
  pages: [{
      path: "pages/index",
      config: {
        "navigationBarTitleText": "dabing design"
      }
    },
    {
      path: "pages/list",
      config: {
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/counter"
    },
    {
      path: "packageA/logs",
      subPackage: true,
    }
  ],
  window: {
    backgroundTextStyle: 'dark',
    backgroundColor: '#fff',
    navigationBarBackgroundColor: '#F2F2F2',
    navigationBarTitleText: 'chat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#fff',
    backgroundColor: '#333',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index',
        text: '首页',
        iconPath: 'static/assets/index.png',
        selectedIconPath: 'static/assets/index_active.png'
      },
      {
        pagePath: 'pages/counter',
        text: '联系我们',
        iconPath: 'static/assets/tel.png',
        selectedIconPath: 'static/assets/tel_active.png'
      }
    ]
  },
  usingComponents: {
    "van-tag": "/static/vant/tag/index",
    "van-button": "/static/vant/button/index",
  }
}
