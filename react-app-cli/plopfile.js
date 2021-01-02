//plop入口文件 需要导出一个函数
//此函数接收一个plop对象，用于创建生成器任务

module.exports=plop=>{
  plop.setGenerator('component',{
    description:'create a component',
    prompts:[
      {
        type:'input',
        name:'name',
        message:'component name',
        default:'MyComponent'
      }
    ],
    actions:[
      {
        type:'add',  //代表添加文件
        path:'src/components/{{name}}/{{name}}.js',  //生成路径
        templateFile:'plop-templates/component.hbs'  //模板路径
      },
      {
        type:'add',  //代表添加文件
        path:'src/components/{{name}}/{{name}}.css',  //生成路径
        templateFile:'plop-templates/component.css.hbs'  //模板路径
      },
      {
        type:'add',  //代表添加文件
        path:'src/components/{{name}}/{{name}}.test.js',  //生成路径
        templateFile:'plop-templates/component.test.hbs'  //模板路径
      },
    ]
  })
}
