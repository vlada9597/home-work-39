# React Components Example (home-work-39)

Цей проєкт демонструє різні підходи до створення компонентів у React:

- **StatefulComponent** – функціональний компонент із `useState`.
- **StatelessComponent** – функціональний компонент, який приймає тільки пропси.
- **ClassComponent** – класовий компонент з локальним станом.

-----

## 🚀 Запуск проєкту

- Клонувати репозиторій:
  
Terminal: git clone https://github.com/vlada9597/home-work-39.git

- Встановити залежності:

Terminal: npm install

- Зібрати проєкт у папці dist:

Terminal: npm run build

- Запустити у режимі розробки:

Terminal: npm run dev

Відкрити у браузері: http://localhost:5173

-------

📊 Порівняння підходів: 

Функціональні компоненти (хуки):
Простішi у розробці.
Легко читати завдяки хукам (useState, useEffect).
Сучасний стандарт React.
Класові компоненти:
Використовуються рідше.
Мають життєвий цикл (componentDidMount, componentDidUpdate, componentWillUnmount).
Код більш "важкий" у порівнянні з хуками.

-----

🔗 Demo : https://home-work-39.netlify.app/

-------

📂 Структура
home-work-39/ 
├── src/
│   ├── components/
│   │   ├── StatefulComponent.jsx
│   │   ├── StatelessComponent.jsx
│   │   └── ClassComponent.jsx 
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
