//התקנות:
//package.json:
//יצירת קובץ עבור התקנות נוספות בהמשך
//עבור התקנה-יש לכתוב בטרמינל את הפקודה: npm init --y


//ב-package.json:
//יש להוסיף את השורה "type": "module"
//export הסיבה: ע"מ שהפרוייקט יוכל לעבוד עם


//express:
//התקנה זו מאפשרת ניתוב לפונקציות שונות בעמוד
//עבור התקנה-יש לכתוב בטרמינל את הפקודה: npm i express
import express from "express"
let app=express() //המאפשר ניתוב לפונקציות שונות בעמוד express יצירת מופע מסוג 


// dotenv:
// התקנה זו מאפשרת שימוש בכתובת הניתוב המוצפנת
// עבור התקנה-יש לכתוב בטרמינל את הפקודה: npm i dotenv
//ובו לשמור את כתובת הניתוב env יש לפתוח קובץ 
import dotenv from 'dotenv'
dotenv.config() //ע"מ שיהיה ניתן להשתמש בכתובת הניתוב המוצפנת-יש לכתוב שורה זו


//nodemon:
//עבור פקודת הרצה רגילה: npm start 
//עבור התקנה-יש לכתוב בטרמינל את הפקודה: npm i nodemon
//ב-package.json: יש להוסיף את השורה  "start": "nodemon"


//mongoose:
//עבור התחברות למסד הנתונים וביצוע פעולות עליו
//עבור התקנה-יש לכתוב בטרמינל את הפקודה: npm i mongoose
import mongoose from "mongoose"
mongoose.connect("mongodb://0.0.0.0:27017/RecipiesWebsite",{useNewUrlParser: true, useUnifiedTopology: true}) //התחברות למסד הנתונים ואבטחתו
let DB=mongoose.connection //שמירה במשתנה את מסד הנתונים
DB.on('open',()=>{console.log("DB run!!!!!!!!!!!!!!!!")}) //פתיחת מסד הנתונים


//cors:
//עבור אפשור הגישה לשרת
//עבור התקנה-יש לכתוב בטרמינל את הפקודה: npm i cors
import cors from 'cors'
app.use(cors()) //הרשאת הגישה


//שימוש בתיקיית התמונות הציבורית
app.use(express.static('Public'))

//----------------------------------------------------------------------------------


//טעינת קונטרולרים עבור שימוש בהם
import RecipiesController from './Controllers/RecipiesController.js'
app.use('/Recipies', RecipiesController)

import UsersController from './Controllers/UsersController.js'
app.use('/Users', UsersController)

//----------------------------------------------------------------------------------


//פונקציית הרצה
app.listen(process.env.PORT,()=>{console.log("run!!!!!!!!!!!!!!!!")}) 