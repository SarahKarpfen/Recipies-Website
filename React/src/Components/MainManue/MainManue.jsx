import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

require ('./MainManue.css')

export const MainManue=()=>{

    const isShowUsers=useSelector(x=>x.ShowUsers)
    
    return <nav className="container">
        <br></br> 
      
    {/* הגדרת שורת הניתוב: nav */}
     <ul className="nav justify-content-center">

      <li className="nav-item">
      <Link id="LinkWithLine" className="nav-link" to="AddRecipy">הוספת מתכון</Link>
      </li>

      <li className="nav-item">
       <Link id="LinkWithLine" className="nav-link" to="Home">דף הבית</Link>
      </li>

      { isShowUsers && <li className="nav-item">
      <Link id="LinkWithLine" className="nav-link" to="Users">משתמשים</Link>
      </li>}

      <li className="nav-item">
      <Link id="LinkWithLine" className="nav-link" to="Connecting">התחברות</Link>
      </li>

      <li className="nav-item">
      <Link id="Link" className="nav-link" to="AddUser">הרשמה</Link>
      </li>



     </ul>


     {/* קו מפריד בין שורת הניתובים לתוכן הדף */}
     <div className="LineBetweenNavAndPage"></div>
    </nav>

}