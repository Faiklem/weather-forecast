## 🚀 Next.js Приложение "Прогноз погоды в Москве"

Это приложение построено на [Next.js](https://nextjs.org/) — современном React-фреймворке для серверного и клиентского рендеринга.

---

### 🌐 Демо

Развёрнутая версия доступна по адресу:  
👉 [https://weather-forecast.up.railway.app](https://weather-forecast.up.railway.app)

---

### 🔑 Тестовые данные для авторизации

- **Email:** `eve.holt@reqres.in`  
- **Пароль:** `cityslicka`

---

### 📦 Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Faiklem/weather-forecast.git
cd weather-forecast
```

2. Установите зависимости через Yarn:

```bash
yarn install
```

---

### ▶️ Запуск проекта в режиме разработки

```bash
yarn dev
```

После запуска откройте [http://localhost:3000](http://localhost:3000) в браузере.

---

### 🔧 Сборка проекта

Собрать оптимизированную production-версию:

```bash
yarn build
```

Запустить production-сервер после сборки:

```bash
yarn start
```

---

### ✅ Требования

* Node.js >= 18
* Yarn >= 1.22
* Next.js >= 13 (с App Router)

---

### 🔐 Авторизация

Проект использует `localStorage` для хранения токена. Некоторые страницы защищены от неавторизованного доступа. При наличии токена пользователь автоматически перенаправляется с `/auth` на главную страницу.
