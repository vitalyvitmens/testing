### Testing from scratch

#### Создаем проект:
- npm init
- package name: (testing)
- version: (1.0.0)
- description: Test React App from scratch.
- entry point: (index.js)
- test command: test
- git repository:
- keywords:
- author: vitalyvitmens
- license: (ISC)

#### Устанавливаем Typescript:
- npm i --save-dev typescript

- tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "allowJs": true,
    "module": "CommonJS",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "lib": ["dom", "esnext"],
    "strict": true,
    "sourceMap": true,
    "target": "esnext"
  },
  "include": ["src"],
  "exclude": ["node_modules", "coverage"]
}

#### Устанавливаем webpack и плагины:
- npm i --save-dev webpack webpack-cli webpack-dev-server css-loader html-webpack-plugin mini-css-extract-plugin ts-loader 

- webpack.config.js
const prod = process.env.NODE_ENV === 'production'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    hot: true,
    liveReload: false,
  },
}

#### Добавляем скрипты запуска:
 "scripts": {
    "start": "webpack serve --port 3000",
    "build": "NODE_ENV=production webpack"
  }

#### Создаём index.html и устанавливаем React:
- npm i react react-dom
- public\index.html && ! + Tab && <body><div id="root"></div></body> && Document меняем на Test React App from scratch.
- npm i --save-dev @types/react @types/react-dom

- src\index.tsx
import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<App />)

- src\App.tsx
export const App = () => {
  return (
    <div>App</div>
  )
}

#### Запускаем приложение:
- npm run start
- открываем в браузере по ссылке http://localhost:3000/
- убедимся что hot reload работает, для этого в src\App.tsx меняем App на Test React App from scratch

#### Добавляем гитигнор:
- .gitignore
- ложим в него node_modules

#### Инициализируем git:
- git init
