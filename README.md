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
```
git clone https://github.com/harshbatra01/School-management-api.git
cd School-management-api
```
2️⃣ Install Dependencies

```
npm install
```

3️⃣ Create a .env File
Create a .env file in the project root and add:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db
PORT=5001
```

4️⃣ Start the Server
```
npx nodemon server.js
```
Your API will run on:
```
http://localhost:5001
```

📌 API Endpoints
1️⃣ Add a School
📌 Endpoint:

```
POST /api/addSchool
```

📌 Request Body (JSON):

```
{
    "name": "Greenwood High",
    "address": "123 Street, City",
    "latitude": 28.7041,
    "longitude": 77.1025
}
```

📌 Response:

```
{
    "message": "School added successfully"
}
```

2️⃣ List Schools by Proximity
📌 Endpoint:

```
GET /api/listSchools?latitude=28.7041&longitude=77.1025
```

📌 Response Example:

```
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
```
