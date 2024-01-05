const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

// webpack은 구성옵션을 제공해서 정리해줘야함(javascript)
// 디테일하게 세세하게 사용할 수 있으므로 규모있는 프로젝트에서 사용(node.js)

module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',
    //결과(번들)를 반환하는 설정
    output: {
        // path: path.resolve(__dirname,'dist'),
        // filename: 'main.js',
        clean: true
    },
    //css
    module: {
        rules: [
            {
                test:/\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 실행
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [{
                from: 'static'
            }]
        })
    ],
    devServer: {
        host: 'localhost'
    }
}
