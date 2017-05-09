module.exports = {
  projects: [
    {
      name: 'index',
      name_cn: '项目列表',
      HtmlWebpackPlugin: {
        filename: 'index.html',
        template: 'src/templates/index.html',
        inject: true,
        chunks: ['projectList']
      },
      entry: ['projectList']
    },
    {
      name: 'test1',
      name_cn: 'test1',
      HtmlWebpackPlugin: {
        filename: 'test1.html',
        template: 'src/templates/test1.html',
        title: 'test1',
        inject: true,
        chunks: ['test1']
      },
      entry: ['test1']
    },
    {
      name: 'test2',
      name_cn: 'test2',
      HtmlWebpackPlugin: {
        filename: 'test2.html',
        template: 'src/templates/test2.html',
        title: 'test2',
        inject: true,
        chunks: ['test2']
      },
      entry: ['test2']
    },
    {
      name: 'app',
      name_cn: 'app',
      HtmlWebpackPlugin: {
        filename: 'app.html',
        template: 'src/templates/app.html',
        title: 'app',
        inject: true,
        chunks: ['app']
      },
      entry: ['app']
    },
    {
      name: 'liting',
      name_cn: 'liting',
      HtmlWebpackPlugin: {
        filename: 'liting.html',
        template: 'src/templates/liting.html',
        title: 'liting',
        inject: true,
        chunks: ['liting']
      },
      entry: ['liting']
    },
    {
      name: 'demox',
      name_cn: 'demox',
      HtmlWebpackPlugin: {
        filename: 'demox.html',
        template: 'src/templates/demox.html',
        title: 'demox',
        inject: true,
        chunks: ['demox']
      },
      entry: ['demox']
    }
  ]
}
