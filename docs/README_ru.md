# 📝 Online Notes

<div>
  <img src="https://img.shields.io/badge/Node.js-v18.19.1-brightgreen" alt="Node.js version" style="margin-right: 8px"/>
  <img src="https://img.shields.io/badge/Express-v5.1.0-000000" alt="Express version" style="margin-right: 8px"/>
  <img src="https://img.shields.io/badge/MongoDB-v8.14.1-4DB33D" alt="Mongoose version" style="margin-right: 8px"/>
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License"/>
</div>

---

## 🚀 О проекте

Это backend-часть проекта **Online Notes** - сервиса для создания, редактирования, удаления и закрепления заметок.  
Реализованы функции:

- Регистрация и авторизация пользователей 🔐
- Управление заметками: создание, редактирование, удаление, закрепление 📋
- REST API на базе **Node.js** и **Express**
- Логирование запросов через **Morgan**
- Подключение к базе данных **MongoDB** через **Mongoose**

> ⚠️ **Важно:** Этот проект создан с учебной и демонстрационной целью. В нём отсутствуют полноценные меры безопасности для хранения и защиты конфиденциальных данных.  
> **Не используйте этот backend для хранения ценной или личной информации!**  
> Для продакшен-приложений рекомендуется реализовать дополнительные уровни защиты, шифрование, валидацию и аудит безопасности.

---

## ⚙️ Технологии

- [Node.js v18.19.1](https://nodejs.org/en/)
- [Express v5.1.0](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose v8.14.1](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) - для хеширования паролей
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - для JWT аутентификации
- [Morgan](https://www.npmjs.com/package/morgan) - логирование запросов
- [dotenv](https://www.npmjs.com/package/dotenv) - управление переменными окружения
- [cors](https://www.npmjs.com/package/cors) - настройка CORS

---

## 📦 Установка

1. Клонируйте репозиторий:

```bash
git clone <URL_репозитория>
cd backend
```


2. Установите зависимости:

```bash
npm install
```
 
3. Создайте файл `.env` в корневой папке проекта и добавьте в него следующие переменные:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
PORT=5000
```


- `MONGO_URI` - строка подключения к MongoDB (смотреть, [официальная документация MongoDB](https://docs.mongodb.com/manual/reference/connection-string/))
- `JWT_SECRET` - секретный ключ для генерации JWT токенов (выберите сложную строку)
- `JWT_EXPIRE` - время жизни токена (например, `30d` - 30 дней)
- `PORT` - порт, на котором будет запущен сервер (по умолчанию 5000)

---

## 🚀 Запуск проекта

Для запуска в режиме разработки с автоматической перезагрузкой:
```bash
npm run dev
```


Сервер будет доступен по адресу: `http://localhost:5000`

---

## 📋 API

### Аутентификация и профиль пользователя (`/api/auth`)

| Метод | Путь          | Описание                     |
|-------|---------------|------------------------------|
| POST  | `/register`   | Регистрация нового пользователя |
| POST  | `/login`      | Вход пользователя            |
| GET   | `/profile`    | Получение профиля текущего пользователя |

---

### Работа с заметками (`/api/notes`)

| Метод  | Путь            | Описание                          |
|--------|-----------------|----------------------------------|
| GET    | `/`             | Получить список заметок           |
| POST   | `/`             | Создать новую заметку             |
| GET    | `/:id`          | Получить заметку по ID            |
| PUT    | `/:id`          | Обновить заметку по ID            |
| DELETE | `/:id`          | Удалить заметку по ID             |
| PATCH  | `/:id/pin`      | Закрепить/открепить заметку       |

---

## 🔗 Полезные ссылки

- [MongoDB Connection String Documentation](https://docs.mongodb.com/manual/reference/connection-string/)
- [Mongoose Official Docs](https://mongoosejs.com/docs/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## 🧑‍💻 Автор

**YoungTooller**

---

## 📄 Лицензия

Этот проект лицензирован под [MIT License](LICENSE) © YoungTooller
