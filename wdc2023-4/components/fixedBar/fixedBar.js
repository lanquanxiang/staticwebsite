layui.use(function(){
    var util = layui.util;
    // 自定义固定条
    util.fixbar({
      bars: [{ // 定义可显示的 bar 列表信息 -- v2.8.0 新增
        type: '攀大官网',
        icon: 'layui-icon-website'
      }, {
        type: '攀大微博',
        icon: 'layui-icon-login-weibo'
      }, { 
        type: '攀大抖音',
        icon: 'layui-icon-heart-fill',
        style: 'background-color: #FF5722;'
      },
      // {
      //   type: '切换主题',
      //   icon: 'layui-icon-light',
      //   style: 'background-color: #FF5722;'
      // }
    ],
      // bar1: true,
      // bar2: true,
      // default: false, // 是否显示默认的 bar 列表 --  v2.8.0 新增
      bgcolor: '#F08080', // bar 的默认背景色
      // css: {border-radius: 20px;},
      // target: '#target-test', // 插入 fixbar 节点的目标元素选择器
      duration: 300, // top bar 等动画时长（毫秒）
      on: { // 任意事件 --  v2.8.0 新增
        mouseenter: function(type){
          layer.tips(type, this, {
            tips: 4, 
            fixed: true
          });
        },
        mouseleave: function(type){
          layer.closeAll('tips');
        }
      },
      // 点击事件
      click: function(type){
       if(type == '攀大官网'){
        window.location.href = 'https://www.pzhu.cn/'
       }
       if(type == '攀大微博'){
        window.location.href = 'https://www.weibo.com/panzhihuauniversity'
       }
       if(type == '攀大抖音'){
        window.location.href = 'https://www.douyin.com/user/MS4wLjABAAAAxOZHZi6L_UqlvzwUV4pQWO_-cIX1pqVBNVkpeZPj7nU'
       }
      }
    });
  });