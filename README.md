# 🔍 Search Algorithm Visualization

A beautifully animated visualization of three core search algorithms — **Linear Search**, **Binary Search**, and **Exponential Search** — built with **React**, **p5.js**, and **Vite**. This project demonstrates how different search strategies perform over a sorted array using step-by-step canvas animations and visual feedback.

---

## 📽️ Demo Video

🎥 [Click here to watch the demo](https://youtu.be/fCTfzyRfFYg?si=3_sbH6WkoR79hK8J)

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


```plaintext
LinearSearch(array, target):
    for i from 0 to length(array) - 1:
        if array[i] == target:
            return i  // Found at index i
    return -1  // Not found
```

- **Input Size (`n`)**: Number of elements in the array
- **Basic Operation**: `if (values[i] === target)`
- **Depends on Input Size?** ✅ Yes
- **Recurrence Relation**:  
  `T(n) = T(n - 1) + 1`, with `T(1) = 1`
- **Solved**:  
  `T(n) = n` → **Time Complexity:** `O(n)`

---

### 🔹 Binary Search – Divide & Conquer

```
BinarySearch(array, target):
    low ← 0
    high ← length(array) - 1

    while low ≤ high:
        mid ← floor((low + high) / 2)

        if array[mid] == target:
            return mid  // Found

        else if array[mid] < target:
            low ← mid + 1

        else:
            high ← mid - 1

    return -1  // Not found
```

- **Input Size (`n`)**: Number of elements in the array
- **Basic Operation**: Compare target with `values[mid]`
- **Depends on Input Size?** ✅ Yes
- **Recurrence Relation**:  
  `T(n) = T(n / 2) + 1`, with `T(1) = 1`
- **Solved**:  
  `T(n) = O(log n)`

---

### 🔹 Exponential Search – Hybrid (Exponential + Binary)

```
ExponentialSearch(array, target):
    if array[0] == target:
        return 0

    // Phase 1: Find range for binary search
    bound ← 1
    while bound < length(array) and array[bound] < target:
        bound ← bound × 2

    // Phase 2: Binary search within [bound/2, min(bound, n-1)]
    low ← floor(bound / 2)
    high ← min(bound, length(array) - 1)

    while low ≤ high:
        mid ← floor((low + high) / 2)

        if array[mid] == target:
            return mid

        else if array[mid] < target:
            low ← mid + 1

        else:
            high ← mid - 1

    return -1  // Not found
```

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

