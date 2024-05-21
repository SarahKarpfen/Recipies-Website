import { useContext, useEffect,useState } from "react"
import UsersContext from "../../UsersContext"
import { getAllUsers } from "../../Axios/UsersAxios"

require('./Users.css')

export const Users=()=>{
const setlist=useContext(UsersContext).setlist
const [UserList,setUserList]=useState([]);

    useEffect(()=>{
        async function load(){
            const res=await getAllUsers()
            setlist(res.data)
            setUserList(res.data)
        }load()
    },[])
    //חילוץ רשימת המשתמשים מהספק ושמירתה במשתנה


    //החזרת רשימת המשתמשים באתר 
    return <div className="container" id="Table">
        
                <table className="table">

            {/* כותרות הטבלה */}
            <thead>
                <th>שם</th>
                <th>סיסמא</th>
                <th>מספר פלאפון</th>
                <th>כתובת</th>
            </thead>

            {/* מעבר בלולאה על רשימת המשתמשים והצגת ערכיה בטבלה */}
            <tbody>
                {UserList.map(x=>(
                    <tr>
                        <td>{x.FullName}</td>
                        <td>{x.Password}</td>
                        <td>{x.PhoneNumber}</td>
                        <td>{x.Address}</td>
                    </tr>

                ))}
            </tbody>

        </table>
        
        
    </div>
}