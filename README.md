# 🔍 Search Algorithm Visualization

A beautifully animated visualization of three core search algorithms — **Linear Search**, **Binary Search**, and **Exponential Search** — built with **React**, **p5.js**, and **Vite**. This project demonstrates how different search strategies perform over a sorted array using step-by-step canvas animations and visual feedback.

---

## 📽️ Demo Video

🎥 [Click here to watch the demo](https://your-video-link.com)

---

## 📸 Screenshots

| Linear Search | Binary Search | Exponential Search |
|---------------|----------------|--------------------|
| ![Linear](https://github.com/sodikjonismoilov/search-visualization/blob/main/src/assets/linear-search.png) | ![Binary](https://github.com/sodikjonismoilov/search-visualization/blob/main/src/assets/binary-search.png) | ![Exponential](https://github.com/sodikjonismoilov/search-visualization/blob/main/src/assets/exponential-search.png) |

---

## 📦 Features

- 🔢 Index labels under every element
- ✨ Live animation with `p5.js`
- 🧠 Step-by-step comparisons of different search algorithms
- 🧪 Real-time input: Try different targets
- ✅ Output messages for success/failure
- 🖼️ Footer with author details
- 🎨 Fully responsive and clean CSS

---

## 🧠 Algorithm Analysis

### 🔹 Linear Search – Brute Force

📸 ![Linear Code](./screenshots/linear-code.png)

- **Input Size (`n`)**: Number of elements in the array
- **Basic Operation**: `if (values[i] === target)`
- **Depends on Input Size?** ✅ Yes
- **Recurrence Relation**:  
  `T(n) = T(n - 1) + 1`, with `T(1) = 1`
- **Solved**:  
  `T(n) = n` → **Time Complexity:** `O(n)`

---

### 🔹 Binary Search – Divide & Conquer

📸 ![Binary Code](./screenshots/binary-code.png)

- **Input Size (`n`)**: Number of elements in the array
- **Basic Operation**: Compare target with `values[mid]`
- **Depends on Input Size?** ✅ Yes
- **Recurrence Relation**:  
  `T(n) = T(n / 2) + 1`, with `T(1) = 1`
- **Solved**:  
  `T(n) = O(log n)`

---

### 🔹 Exponential Search – Hybrid (Exponential + Binary)

📸 ![Exponential Code](./screenshots/exponential-code.png)

- **Input Size (`n`)**: Number of elements in the array  
- **Basic Operation**: Comparisons during exponential expansion and binary phase
- **Depends on Input Size?** ✅ Yes
- **Recurrence Relation**:  
  `T(i) = log i + log i = 2 log i` where `i` is the position of the target
- **Solved**:  
  `T(i) = O(log i)`

---

## ⏱️ Time Complexity Comparison

| Algorithm         | Best Case | Average Case | Worst Case | Strategy           |
|------------------|-----------|---------------|-------------|---------------------|
| Linear Search     | O(1)      | O(n/2)        | O(n)        | Brute Force         |
| Binary Search     | O(1)      | O(log n)      | O(log n)    | Divide & Conquer    |
| Exponential Search| O(1)      | O(log i)      | O(log i)    | Exponential + Binary|

---

## 🗂️ Project Structure


---

## 🛠️ Built With

- ⚛️ [React.js](https://reactjs.org/)
- 🧠 [p5.js](https://p5js.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 CSS3

---

## 📁 How to Run Locally

```bash
git clone https://github.com/sodikjonismoilov/search-visualization.git
cd search-visualization
npm install
npm run dev

