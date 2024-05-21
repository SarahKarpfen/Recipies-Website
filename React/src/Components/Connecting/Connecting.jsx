import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../UsersContext';
import { useDispatch } from 'react-redux';
import { ShowUsersInNav } from '../../Redux/action';
require('./Connecting.css')

export const Connecting=()=>{

    //:הגדרת משתנים
    const [UserDetails, SetUserDetails]=useState({}); //משתנה עבור שמירת פרטי המשתמש שהוקשו לתיבות הטקסט
    let page=useNavigate(); //משתנה המאפשר מעבר בין דפים
   
    
    //חילוץ רשימת המשתמשים מהספק ושמירתה במשתנה
    const UserList=useContext(UsersContext)
    
    let send=useDispatch()
    
    //פונקציות:

    //:פונקציה הבודקת את פרטי המשתמש שהוקשו
    //1. במידה ופרטי המשתמש שהוקשו תואמים למנהל-האתר יעביר את המשתמש לדף רשימת המשתמשים
    //2. במידה ופרטי המשתמש שהוקשו תואמים לאחד מן היוזרים הרשומים ברשימה הנ"ל-האתר יעביר את המשתמש לדף הוספת מתכון
    //3. במידה ופרטי המשתמש שהוקשו הם של משתמש חדש-האתר יעביר את המשתמש לדף הרשמה
    function CheckUser()
    {
        let doIf=false; //משתנה המעיד על ביצוע בדיקה מספר אחת הנ"ל: במידה ומדובר במנהל
        let doElse=false; //משתנה המעיד על ביצוע בדיקה מספר שתיים הנ"ל: במידה ומדובר במשתמש רשום באתר

        //1. במידה ופרטי המשתמש שהוקשו תואמים למנהל-האתר יעביר את המשתמש לדף הוספת משתמש
        if(UserDetails.name=="מנהל" && UserDetails.password=="1234")
        {
            doIf=true; //אתחול המשתנה המעיד על ביצוע הבדיקה
            page('/Users');
            send(ShowUsersInNav())
        }
           

        //2. במידה ופרטי המשתמש שהוקשו תואמים לאחד מן היוזרים הרשומים ברשימה הנ"ל-האתר יעביר את המשתמש לדף הוספת מתכון
        else
        {
            

            for(let i=0; i<UserList.UserList.length; i++)
            {
                if(UserList.UserList[i].FullName==UserDetails.name && UserList.UserList[i].Password==UserDetails.password)
                {
                    doElse=true; //אתחול המשתנה המעיד על ביצוע הבדיקה
                    page('/AddRecipy');
                }
            }
        }

        //3. במידה ופרטי המשתמש שהוקשו הם של משתמש חדש-האתר יעביר את המשתמש לדף הרשמה 
        if(!doIf && !doElse) //במידה ולא התבצעו שני הבדיקות הראשונות-תתבצע הבדיקה השלישית: במידה ומדובר במשתמש חדש 
        page('/AddUser');
        
    }



    //החזרת טופס ההתחברות
    return <div className="ConnectingForm">

      <p>הקש פרטי משתמש</p>

      <input type="text" className="form-control" placeholder="שם משתמש" onChange={(NameEvent)=>SetUserDetails({...UserDetails, name: NameEvent.target.value})}></input>
      <input type="password" className="form-control" placeholder="סיסמא" onChange={(PasswordEvent)=>SetUserDetails({...UserDetails, password: PasswordEvent.target.value})}></input>

      <button type="button" className="btn btn-outline-dark" onClick={()=>CheckUser()}>התחברות</button>

 
    </div>

}