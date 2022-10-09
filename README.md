# Ticket API 🔑

API that provides a report based on the number of passwords that were created and the number of people attended.

![image](https://user-images.githubusercontent.com/48100276/194770251-44a627c9-184d-4fe3-be13-2f3cacd32d08.png)

## Summary 📒: 

- [Get Started](#get-started-) 
- [Concept](#concept-)
- [Technologies](#technologies-)
- [Routes](#routes-)
    - [POST](#post-)
    - [GET](#get-)
    - [DELETE](#delete-)
    - [PUT](#put-)


### Get started 📃:

### You need the MongoDB installed in your machine. You can download the MongoDB Community Server [here!](https://www.mongodb.com/try/download/community2)
![image](https://user-images.githubusercontent.com/48100276/194774128-fbdc1690-a4e8-45f1-975a-eb5fbd58b3ae.png)


### Now you have to install all the dependencies before start the API.

```javascript
// You can use npm or yarn, be confortble.

npm install || yarn 
```
#### * The connection URL is in `.env.development` you should rename to `.env` for the project works correctly. With all done you can just start the API using: 

```javascript
// You can use npm or yarn, be confortble.

npm start || yarn start
```



### Concept 📝: 

- This API register information for generate a complete report about the user attendance. Like a queue system. 
- In this queue will have 3 types of passwords, defined by prioritization of attendance. The types are:: 

       • Priority password
       • Exams password
       • General password

- Every password will show a specific numeration using this pattern YYMMDD-PPSQ, where: 

      YY: Year of issue
      MM: Month of issue
      DD: Day of issue
      PP: Type of priority this password have
      SQ: Number of the password by priority, restarts daily


- A report is also issued daily and mounthly, with: 

      • Quantity of passwords issued
      • Quantity of passwords attended
      • Quantity of passwords issued by priority
      • Quantity of passwords attended by priority
      • Datailed password report with number, type, date and time of the issue and attendance. Will have the information of wich
      ticket window was responsable for the attendance, if don't was attended to anyone this field will be empty.
      • Time of attendance report, because the time may change for each kind of password. 
      
### Technologies 🌎: 

- Documentation with Swagger.
- Using Node as backend.
- MongoDB as database.
- API REST with Express.

## Routes 🌐:

### POST 🟩

#### Register the report: http://localhost:8000/ticket/registerReport 

![image](https://user-images.githubusercontent.com/48100276/194772123-cbaa7f0b-d126-4f73-afff-af8724c3fa34.png)

- You can insert a json with the data. By default the schema is: 
```javascript  
 {
    reportDate: { type: String },
    numberOfGeneratedPasswords: { type: Number },
    numberOfAttendedPasswords: { type: Number },
    generatedPriorityPasswords: { type: Number },
    generatedGeneralPasswords: { type: Number },
    generatedExamsPasswords: { type: Number }
 }
``` 

### GET 🟦

#### **Return all the reports registered**: http://localhost:8000/ticket/getAllReports

![image](https://user-images.githubusercontent.com/48100276/194772412-9b43835e-5aaa-4141-9ddd-bf8b18092987.png)

- This route returns all the reports, this is an example of response: 

```javascript
  {
    "_id": "6342ff4197e6035379e92bfa",
    "reportDate": "2022/09/09",
    "numberOfGeneratedPasswords": 10,
    "numberOfAttendedPasswords": 7,
    "generatedPriorityPasswords": 3,
    "generatedGeneralPasswords": 5,
    "generatedExamsPasswords": 2,
    "__v": 0
  },
```

#### **Return the reports registered by date**: http://localhost:8000/ticket/getReportsByDate

![image](https://user-images.githubusercontent.com/48100276/194772535-81a8b136-80ff-4dec-aa64-89494783bc3f.png)

- You can use the date to find the report you want and make a search. 

### DELETE 🟥

#### **Return all the reports registered**: http://localhost:8000/ticket/deleteReport

![image](https://user-images.githubusercontent.com/48100276/194772575-586d8ca1-ea42-47db-8b45-2c0eb872ea94.png)

- You can remove a report searching it by date. This route will return a json with two informations. If the object was recognized, returning `true` or `false` for each situation and also returns if it was deleted or not, showing `0` if was't and `1` if was. 

```javascript
{
  "acknowledged": true,
  "deletedCount": 1
}
```

### PUT 🟨

#### **Return all the reports registered**: http://localhost:8000/ticket/deleteReport

![image](https://user-images.githubusercontent.com/48100276/194772727-ee9391fa-2c4b-4927-8497-0ce0ccc426b8.png)

You can update a report if you want, searching it with the date of creation and changing the information you want. 

### **[⬆ BACK TO SUMMARY](#summary-)**

