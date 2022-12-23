module.exports = {
  "title": "YekeBlog",
  "description": "野克的博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "base": '/YekeBlog/',
  "theme": "reco",
  "themeConfig": {
    "noFoundPageByTencent": false,
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "目录",
        "icon": "reco-message",
        "items": [
          {
            "text": "关于Mac",
            "link": "/docs/Mac/"
          },
          {
            "text": "关于前端",
            "link": "/docs/前端/"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/Mac/": [
        "",
        "Mac的基本使用",
      ],
      "/docs/前端/": [
        "",
        "Vue2",
        "Vue3",
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "种类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Yeke",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017",

  },
  "markdown": {
    "lineNumbers": true
  }
}