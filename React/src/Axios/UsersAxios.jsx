import axios from "axios";

//שמירה במשתנה את כתובת הניתוב הבסיסית לטבלת המשתמשים
const url='http://localhost:8080/Users/'

//פונקציה הניגשת לשרת ושולפת ממנו את המשתמשים
export const getAllUsers=()=>{

    debugger
    return axios.get(`${url}ShowUsers`)
}

export const ADDUSER=async(user)=>{
    debugger
    const d=await axios.post(`${url}`,user)
    debugger
    return d
    
}