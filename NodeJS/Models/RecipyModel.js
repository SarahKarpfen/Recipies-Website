//יצירת אימפורט עבור שימוש במסד הנתונים
import mongoose from "mongoose" 


//יצירת מודל מתכון. המודל יכיל את שדות המתכון ואת סוג המשתנה שהם מכילים
let recipyModel=mongoose.Schema({
    Name: String,
    Picture: String,
    Level: String,
    MakeTime: String,
    Type: String,
    Ingredients: [],
    OwnerPassword: String
})  

//יצירת מופע של מתכון
//הפרמטרים שבסוגריים: "recipyUrl"-שם הקישור שבחרתי, recipyModel-שם המודל שיצרתי למעלה, "Recipies"-שם הטבלה במסד הנתונים
let recipy=mongoose.model("recipyUrl", recipyModel, "Recipies")

//יצוא המתכון
export default recipy