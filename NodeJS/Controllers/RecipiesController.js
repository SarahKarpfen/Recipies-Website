//יצירת אימפורט עבור ניתוב לפונקציות שונות בעמוד
import express from "express"

//טעינת מודל המתכון עבור ביצוע פעולות שונות: שליפה, עדכון מחיקה וכדו
import RecipyModel from '../Models/RecipyModel.js'

//המאפשר ניתוב לפונקציות שונות בעמוד express יצירת מופע מסוג 
let router=express.Router()


//פעולות:
//1. שליפות:
//שליפת כל המתכונים:
router.get('/ShowRecipies', async(req, res)=>{

    let data=await RecipyModel.find({}) //שליפת הנתונים
    res.json(data) //שליחת הנתונים

})

//שליפת מתכון ספציפי על-פי קוד (-זה שהמונגו יוצר באופן אוטומטי)
router.get('/ShowSpecificRecipyByCode/:id', async(req, res)=>{

    //שמירה במשתנה את הקוד שהתקבל
    let code=req.params.id

    //שליפה במשנה את המתכון שקודו תואם לזה שהתקבל, ושמירתו במשתנה
    let Recipy=await RecipyModel.findOne({_id: code}) 

    res.json(Recipy) //שליחת המתכון

})



//2. הוספה:
// npm i body-parser :על-מנת שנתוני המתכון החדש יכנסו לטבלת המתכונים, יש לבצע התקנה: 
//שימוש בהתקנה הנ"ל-נעשה למעלה:
import bodyParser from 'body-parser'
router.use(bodyParser())

//פונקציית ההוספה:
router.post('/AddRecipy', async(req, res)=>{

    let newRecipy=req.body //שליפת נתוני המתכון החדש בצורה מאובטחת
    let y=await RecipyModel.create(newRecipy) //הוספה

})




//יצוא הקונטרולר
export default router