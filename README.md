# 📌 School Management API

A Node.js and Express-based API to manage school data, allowing users to **add schools** and **retrieve schools sorted by proximity**.

## 📌 Features  
✅ **Add a School** – Register schools with name, address, latitude, and longitude.  
✅ **List Schools by Proximity** – Retrieve schools sorted by distance from a given location.  
✅ **MySQL Database** – Stores school data using MySQL.  
✅ **Express.js & REST API** – Simple RESTful endpoints.  
✅ **Deployed on Render/Railway** – Accessible via a **live URL**.  

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/harshbatra01/School-management-api.git
cd School-management-api
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Create a .env File
Create a .env file in the project root and add:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
PORT=5001
4️⃣ Start the Server
sh
Copy
Edit
npx nodemon server.js
Your API will run on:

arduino
Copy
Edit
http://localhost:5001
📌 API Endpoints
1️⃣ Add a School
📌 Endpoint:

bash
Copy
Edit
POST /api/addSchool
📌 Request Body (JSON):

json
Copy
Edit
{
    "name": "Greenwood High",
    "address": "123 Street, City",
    "latitude": 28.7041,
    "longitude": 77.1025
}
📌 Response:

json
Copy
Edit
{
    "message": "School added successfully"
}
2️⃣ List Schools by Proximity
📌 Endpoint:

bash
Copy
Edit
GET /api/listSchools?latitude=28.7041&longitude=77.1025
📌 Response Example:

json
Copy
Edit
[
    {
        "id": 1,
        "name": "Greenwood High",
        "address": "123 Street, City",
        "latitude": 28.7041,
        "longitude": 77.1025,
        "distance": 0.00
    }
]
📌 Deployment (Live API)
1️⃣ Deploy on Render/Railway
Push to GitHub
Deploy to Render (https://render.com)
Add environment variables in Render
2️⃣ Live API Example (Deployed on Render)
arduino
Copy
Edit
https://school-management-api.onrender.com/api/addSchool
arduino
Copy
Edit
https://school-management-api.onrender.com/api/listSchools?latitude=28.7041&longitude=77.1025
📌 Postman Collection
Download the Postman Collection and import it into Postman to test APIs.
🔗 [Google Drive Link/Postman Share Link]

📌 Tech Stack
Backend: Node.js, Express.js
Database: MySQL
Hosting: Render/Railway
📌 Author
👨‍💻 Harsh Batra
🔗 GitHub: harshbatra01

📌 License
This project is MIT licensed – Free to use and modify.

yaml
Copy
Edit

---

### **📌 How to Add This to Your Project?**
1. **Create a `README.md` file** in your project root:
   ```sh
   touch README.md
Open it in a text editor and paste the above code.
Save the file and commit it to GitHub:
sh
Copy
Edit
git add README.md
git commit -m "Added README.md"
git push origin main
