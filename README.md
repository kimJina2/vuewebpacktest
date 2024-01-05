## 터미널 설치
npm run build, npm run dev <br>

npm init -y <br>
npm i -D webpack webpack-cli webpack-dev-server@next <br>
 
npm i -D html-webpack-plugin <br>
npm i -D copy-webpack-plugin <br>

npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime <br>
npm i -D babel-loader <br>

//css
npm i -D css-loader style-loader <br>
npm i -D postcss autoprefixer postcss-loader <br>

(추가 라이브러리 <br>
npm i -D sass-loader sass <br>
) <br>


* cmd로종료: netstat-a 포트확인, taskkill/f /pid(종료pid) <br>
* 터미널종료: ctrl+c개발서버종료 <br>

## 배포
netlify: https://vuewebpacktest.app

## package.json
"scripts": { <br>
"dev": "webpack-dev-server --mode development", <br>
"build": "webpack --mode production" <br>
},



## .gitignore (파일무시할 종류)



## site
1. google 검색(webpack) <br>
    - usage <br>
    https://webpack.kr/ <br>
    documentation > configuration > entry and context > entry <br>
    documentation > configuration > output > output.path/output.clean <br>
2. google 검색(배포: netlify) <br>
    - usage <br>
      https://app.netlify.com/ <br>