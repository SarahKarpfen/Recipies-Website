//יצירת אימפורט עבור שימוש במסד הנתונים
import mongoose from "mongoose"

//יצירת מודל משתמש. המודל יכיל את שדות המשתמש ואת סוג המשתנה שהם מכילים
let userModel=mongoose.Schema({
    FullName: String,
    Password: String,
    Address: String,
    PhoneNumber: String,
    // FavoritRecipies: [] 
})

//יצירת מופע של משתמש
//הפרמטרים שבסוגריים: "userUrl"-שם הקישור שבחרתי, userModel-שם המודל שיצרתי למעלה, "Users"-שם הטבלה במסד הנתונים
let user=mongoose.model("userUrl", userModel, "Users")

//יצוא המשתמש
export default user