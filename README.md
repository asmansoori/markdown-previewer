# 📝 React Markdown Previewer

This is a **live Markdown previewer** built with **React** and styled with minimal inline CSS.  
Write Markdown on the left — see the rendered result on the right instantly!

## ✨ Features

- Real-time Markdown to HTML rendering
- Clean, split-screen layout (editor ↔ preview)
- Safe rendering using **DOMPurify**
- Lightweight and beginner-friendly

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [markdown-it](https://github.com/markdown-it/markdown-it)
- [DOMPurify](https://github.com/cure53/DOMPurify)

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/markdown-previewer.git
   cd markdown-previewer
Install dependencies:

bash
Copy
Edit
npm install
Start the app:

bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser.

📂 File Structure
bash
Copy
Edit
src/
├── Converter.js    # Main markdown preview component
├── App.js          # Imports and renders Converter
└── index.js        # React DOM rendering
📸 Preview
| Editor (Left) | Preview (Right) |
| ------------- | --------------- |
| `# Hello`     | <h1>Hello</h1>  |


Feel free to fork, modify, and improve this project!

🧑‍💻 Author
Created with ❤️ by Ahmad Salar


Let me know if you want to publish it!