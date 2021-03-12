module.exports = {
  title: '小博客',
  description: '维基百科',
  // 注入到当前二面的html <head>  标签
  head: [
    // 增加一个自定义的 favicon(网页标签的图标)
    // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
    // 即 docs/.vuepress/public/img/icon.jpg
    ['link', { rel: 'icon', href: '/img/icon.jpg' }], 
  ],
  base: '/blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  
  themeConfig: {
    // 顶部导航栏
    nav:[
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      { text: 'iOS', link: '/ios/' },  // http://localhost:8080/glog/ios/
      { text: '读书', link: '/books/' },
      { text: '随笔', link: '/thought/' },
      // 多项，下拉形式
      {
        text: '其他',
        items: [
          // link：指向链接也可以是外网链接
          { text: 'idechao', link: 'https://www.idechao.com' },
        ]
      }
    ],

    // 侧边栏菜单( 一个模块对应一个菜单形式 )
    sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
    sidebar: {
      // 打开FAQ主页链接时生成下面这个菜单
      '/ios/':[
        //多级菜单形式
        {
            // 菜单名
            title: '仓库名称',
            // 子菜单
            children: [
                // ['','']=>[路径,标题]
                // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                // 不以 '/' 结尾的就是指向.md文件             
                ['/ios/sourcecode/source1','ios文章1'], // '/ios/sourcecode/source1.md'文件
                ['/ios/sourcecode/source2','ios文章2'],
                ['/ios/sourcecode/source3','ios文章3']
            ]
        },
        {
            title: '输出层',
            children: [
                ['/FAQ/Console/A001','#A001_VuePress'],
                ['/FAQ/Console/A002','#A002_插件清单']
            ]
        },
        ['/ios/','百科首页'],
        ['/ios/Pool/SkillStack','技术栈'],
        ['/ios/Pool/Review','归去来']
      ],
      // 打开Thought主页链接时生成下面这个菜单
      '/thought/':[
        ['/thought/','随笔首页'],
        {
            title: '年终回顾',
            children: [
              ['/thought/YearReview/2018','2018年'],
              ['/thought/YearReview/2019','2019年']
            ]
        },
      ]
    },
  },

  
}