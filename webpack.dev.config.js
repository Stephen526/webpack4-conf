const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const ExtractTextWebpackPlugin=require('extract-text-webpack-plugin')
const cssExtract = new ExtractTextWebpackPlugin({
    filename :'css/css.css',
    disable:true
})
console.log(process)
const lessExtract = new ExtractTextWebpackPlugin({
    filename :'css/less.css',
    disable:true
})
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:cssExtract.extract({
                    use:[
                        {
                            loader:'css-loader'
                        }
                    ],
                    fallback:'style-loader'
                })
            },
            {
                test:/\.less$/,
                use:lessExtract.extract({
                    use:[
                        {
                            loader:'css-loader'
                        },
                        {
                            loader:'less-loader'
                        }
                    ],
                    fallback:'style-loader'
                })
                
            }
        ]
    },
    plugins:[
        cssExtract,
        lessExtract,
        new CleanWebpackPlugin(['./dist']),
        //打包html插件
        new HtmlWebpackPlugin({
            title: 'My App',
            template:'./src/index.html',
            //hash:true,
            minify:{
                removeAttributeQuotes:true,
                //collapseWhitespace:true
            }
          }),
          new webpack.HotModuleReplacementPlugin()
    ],
    mode:'development',
    resolve:{},
    devServer:{
        contentBase:'./dist',
        port:3000,
        compress:true,//服务端压缩
        open:true,//自动打开浏览器
        hot:true
    }
}