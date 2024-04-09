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

## Установка пакетов тестирования:
- npm install --save-dev @testing-library/react @testing-library/jest-dom
- npm install --save-dev jest jest-environment-jsdom ts-jest @types/jest

#### Создадим конфиг jest.config.js:
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

#### Создаём файл установщик который будет экспортировать testing-library в jest: 
- название файла jest.setup.js:
import '@testing-library/jest-dom'

#### Добавляем ESLint:
- npm install --save-dev eslint-plugin-jest
- создаём в корне файл для него eslint.json:
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest/globals": true
  },
  "extends": ["plugin:react/recommended", "plugin:jest/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "jest"],
  "rules": {
    "no-underscore-dangle": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "always",
        "jsx": "always"
      }
    ]
  }
}

#### В скрипты добавляем команду для запуска тестов:
"scripts": {
    ...,
    "test": "jest"
}


#### Создаем папку spec в корне проекта для написания тестов папку так же можно назвать test что аналогично spec и  вней создадим файл нашего первого теста по названию компонента spec\App.spec.tsx
- для запуска тестов используй команду npm run test
