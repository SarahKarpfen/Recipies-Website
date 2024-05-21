import axios from "axios";

//שמירה במשתנה את כתובת הניתוב הבסיסית לטבלת המתכונים
const url='http://localhost:8080/Recipies/'


//החזרת ניתוב הפונקציה הניגשת לשרת ושולפת ממנו את המתכונים
export const getAllRecipies=()=>{

    return axios.get(`${url}ShowRecipies`)
}


//id החזרת ניתוב הפונקציה הניגשת לשרת ושולפת ממנו את מתכון מסויים-עפ"י 
export const getRecipyByID=(id)=>{

    return axios.get(`${url}ShowSpecificRecipyByCode/${id}`)
}


//החזרת ניתוב הפונקציה המוסיפה למסד הנתונים מתכון חדש
export const addRecipy=(newRecipy)=>{

   return axios.post(`${url}AddRecipy`, newRecipy)
}