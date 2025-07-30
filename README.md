# Laboratory-Exercise-2


# 📝 React Exam Application – ITS122L Laboratory Exercise 2

This is a React-based Exam Application built as part of **ITS122L - Laboratory Exercise 2**. It mimics platforms like Blackboard by showing questions in a clean, paginated format, supporting multiple question types, and providing a summary at the end.

---

## 🔧 Features

- ✅ **One Question Per Page** (Pagination)
- ✅ **Supports Multiple Choice, True/False, and Identification**
- ✅ **Auto-save answers to `localStorage`** (with recovery after refresh)
- ✅ **Timer** to track how long the user takes the exam
- ✅ **Navigation buttons**: Next, Back, and Final Submit
- ✅ **Welcome/Instruction screen** before the exam starts
- ✅ **Confirmation modal** before final submission
- ✅ **Final Score & Time Display**
- ✅ **Responsive Design** for mobile and desktop

---

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the App**
   ```bash
   npm start
   ```

3. **Visit**
   ```
   http://localhost:3000
   ```

---

## 📂 Project Structure

```
react-exam-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Exam.jsx
│   │   ├── Question.jsx
│   │   ├── Result.jsx
│   ├── data/
│   │   └── questions.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── README.md
```

---

## 🧪 Sample Data

The questions are imported from a provided `questions.json` file and contain:
- Multiple Choice
- True/False
- Identification 

---

## 👥 Contributors

- Aibryen Kyle Malutao

---

## 📌 Additional Enhancements

- ✅ Welcome Screen
- ✅ Answer Auto-Saving (`localStorage`)
- ✅ Final Confirmation Modal
- ✅ Custom Styling and Layout

---
