const Generator=require('yeoman-generator');
module.exports=class extends Generator{
  //prompting方法采用命令行交互的方式询问用户问题
  prompting(){
    return this.prompt([
      {
      type:'input',
      name:'name',
      message:'Your project name',
      default:this.appname
      }
    ])
    .then(answers=>{
      //拿到用户输入的数据
      this.answers=answers;
    })
  }
  writing(){
    //把每一个文件都通过模板转换到目标路径  模板文件相对路径
    const templates=[
      '.babelrc','.editorconfig','.eslintignore','.eslintrc.js','.gitignore','.postcssrc.js','index.html','package-lock.json','package.json','README.md',
      'build/build.js','build/check-versions.js','build/logo.png','build/utils.js','build/vue-loader.conf.js','build/webpack.base.conf.js','build/webpack.dev.conf.js','build/webpack.prod.conf.js',
      'config/dev.env.js','config/index.js','config/prod.env.js','config/test.env.js',
      'src/assets/logo.png','src/components/HelloWorld.vue','src/router/index.js','src/App.vue','src/main.js',
      'static/.gitkeep',
      'test/e2e/custom-assertions/elementCount.js', 'test/e2e/specs/test.js', 'test/e2e/nightwatch.conf.js', 'test/e2e/runner.js', 'test/unit/specs/HelloWorld.spec.js', 'test/unit/.eslintrc', 'test/unit/jest.conf.js', 'test/unit/setup.js'
    ]
    templates.forEach(item => {
      //item=>每个文件路径 将每个路径对应的模板生成到目标文件
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    });
  }
}