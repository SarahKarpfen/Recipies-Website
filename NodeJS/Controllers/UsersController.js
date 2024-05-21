//יצירת אימפורט עבור ניתוב לפונקציות שונות בעמוד
import express from "express"

//המאפשר ניתוב לפונקציות שונות בעמוד express יצירת מופע מסוג 
let router=express.Router() 

//טעינת מודל המשתמש עבור ביצוע פעולות שונות: שליפה, עדכון מחיקה וכדו
import UserModel from '../Models/UserModel.js'

//עבור פונקציית ההוספה
import bodyParser from 'body-parser'
router.use(bodyParser())



//פעולות:
//1. שליפות:
//שליפת כל המשתמשים:
router.get('/ShowUsers', async(req, res)=>{

    let data=await UserModel.find({}) //שליפת המשתמשים
    res.json(data) //שליחת המשתמשים

})
router.post('/', async(req, res)=>{
    const user=req.body
    const u=await UserModel.create(user) //שליפת המשתמשים
    const data=await UserModel.find({})
    res.json(data) //שליחת המשתמשים

})
//שליפת משתמש ספציפי על-פי שם משתמש וסיסמא:
router.get('/ShowSpecificUserByNameAndPassword/ :Name/ :Password', async(req, res)=>{

    //שמירה במשתנים את שם המשתמש והסיסמא שהתקבלו
    let Name=req.params.Name
    let Password=req.params.Password

    //שליפת המשתמש ששמו וסיסמתו תואמים את אלו שהתקבלו, ושמירתו במשתנה
    let User=await UserMode.findOne({'FullName':Name, 'Password':Password})
    
    res.json(User) //שליחת המשתמש

})



//2. הוספה:
// npm i body-parser :על-מנת שנתוני המשתמש החדש יכנסו לטבלת המשתמשים, יש לבצע התקנה: 
//שימוש בהתקנה הנ"ל-נעשה למעלה:
// import UserModel from '../Models/UserModel.js'
// import bodyParser from 'body-parser'


//פונקציית ההוספה:
router.post('/AddUser', async(req, res)=>{

    let newUser=req.body //שליפת נתוני המשתמש החדש בצורה מאובטחת
    let y=await UserModel.create(newUser) //הוספה

})





//יצוא הקונטרולר
export default router