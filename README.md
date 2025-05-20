# gravity-assessment

This repository contains solutions to a technical assessment covering:

- ✅ Data Structures & Algorithms in JavaScript
- ✅ MongoDB Aggregation
- ✅ A complete React-based Todo App with API integration and advanced Tailwind styling

---

## 🗂 Folder Structure

```
GRAVITY-ASSESSMENT/
├── DSA/
│   ├── solution1.js
│   ├── solution2.js
│   └── test.js
│
├── MONGODB/
│   └── db.js
│
├── REACT-TODO/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── AddTodo.jsx
│   │   │   ├── Filter.jsx
│   │   │   ├── TodoApp.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoList.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
└── README.md                          # Root README file for the whole assessment

```

---

## ✅ DSA Problems

### 1. Longest Increasing Subsequence
- Efficient **O(n log n)** solution
- Fully tested with edge cases

### 2. Two Sum
- Optimal **O(n)** hash-map based implementation
- Fully tested with edge cases

---

## 📊 MongoDB Aggregation

- Aggregates total revenue and average item price
- Groups by `store` and `month`
- Uses `$unwind`, `$group`, `$project`, `$sort`

---

## 🧩 React Todo App

- Built with **React + Tailwind CSS**
- Features:
  - Add, delete, mark complete
  - Filter: All / Completed / Pending
  - Persistent via `localStorage`
  - Fetched initial todos from: [`https://dummyjson.com/todos`](https://dummyjson.com/docs/todos)
- Styled using TailwindCSS

### Run the app:

```bash
cd REACT-TODO
npm install
npm run dev
```

---

## 🧪 Run DSA Test Cases

```bash
cd DSA
node test.js
```

---

## ✍️ Author

**Omkarnath Parida**  
[GitHub](https://github.com/pomkarnath98)

---

## 🛠 Tech Stack

- JavaScript (ES6+)
- Node.js
- MongoDB
- React.js
- Tailwind CSS
