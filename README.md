# **Employee Management App**

A simple employee management app built with **React + Context API** and **Local Storage** for state persistence.

## ** Features**

- **User Authentication** – Sign up & log in
- **Manage Employees** – Add employees to a logged-in Customer
- **Persistent Storage** – Uses **Local Storage** to save data
- **Global State Management** – Powered by **React Context API**
- **React Router** – Supports navigation between pages

---

## **📦 Installation**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/employee-management-app.git
cd employee-management-app
```

### **2️⃣ Install Dependencies**

```bash
npm install
# OR
yarn install
```

### **3️⃣ Start the Development Server**

```bash
npm run dev
# OR
yarn dev
```

📂 Project Structure

```bash
/quantaco
│── /src
│ │── /components
│ │ ├── EmployeeForm.tsx
│ │ ├── EmployeeList.tsx
│ │ ├── Header.tsx
│ │ ├── Login.tsx
│ │ ├── SignUp.tsx
│ │── /context
│ │ ├── CustomerContext.tsx # Manages global state using Context API
│ │── /pages
│ │ ├── Dashboard.tsx
│ │── /utils
│ │ ├── utils.ts # Local Storage helpers
│ │ ├── storageKeys.ts
│ │── App.tsx
│ │── main.tsx
│── index.html
│── README.md
│── package.json
│── tsconfig.json
│── vite.config.ts
```
