📁 1. README.md
markdown
Copy
Edit
# Rest-API-project

This is a simple **User API backend** built using **Node.js and Express.js**, created as part of my **Celebal Technologies Internship**.

## 🧩 Features

- RESTful API structure
- Basic CRUD operations
- JSON-based user data handling
- Organized folder structure
- Easy to extend

## 📁 Project Structure

user-api/
├── DATA/ # Contains mock database or JSON data
├── server.js # Entry point of the application
├── package.json # Project dependencies
├── .gitignore # Ignored files (like node_modules)

bash
Copy
Edit

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Chetanya2005/Rest-API-project.git
cd Rest-API-project
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the server
bash
Copy
Edit
node server.js
Server will run on: http://localhost:3000

📡 API Endpoints (Example)
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id	Get user by ID
POST	/users	Create new user
PUT	/users/:id	Update existing user
DELETE	/users/:id	Delete user by ID

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Made with ❤️ by Chetanya Upadhyay
