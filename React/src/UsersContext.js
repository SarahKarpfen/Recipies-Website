import React from "react";


const UsersContext=React.createContext({}); //יצירת הקונטקסט=יצירת מאגר המשתמשים
export const UserProvider=UsersContext.Provider; //יצירת ספק המכיל מופע (-משתמש)  מתוך המאגר שהוגדר

export default UsersContext; 