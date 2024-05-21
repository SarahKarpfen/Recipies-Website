import { useContext } from 'react'
import UsersContext from '../../UsersContext'
import { ADDUSER } from '../../Axios/UsersAxios'
import { useNavigate } from 'react-router-dom'

require('./AddUser.css')


export const AddUser = () => {

  //הגדרת משתנה המאפשר מעבר בין דפים
  const page=useNavigate()

  const saveuser = async () => {
    const obj={ FullName:document.getElementById('FullName').value,  Password:document.getElementById('Password').value,  Address:document.getElementById('Address').value,  PhoneNumber:document.getElementById('PhoneNumber').value}
    debugger
    const DATA = ADDUSER(obj)
    alert("נרשמת בהצלחה!")
    page('/Home')
  }

  //הגדרת משתנה המכיל את פונקציית הוספת משתמש לרשימת המשתמשים
  const addUser = useContext(UsersContext).addUser

  //החזרת טופס הרשמה\הוספת משתמש
  return <div className="ConnectingForm">

    <label className='BoldLabel' id='BoldLabel'>שם מלא:</label>
    <input type="text" className="form-control" id='FullName'></input>
    <br></br>

    <label className='BoldLabel' id='BoldLabel'>סיסמא:</label>
    <input type="password" className="form-control" id='Password'></input>
    <br></br>

    <label className='BoldLabel' id='BoldLabel'>כתובת:</label>
    <input type="text" className="form-control" id='Address'></input>
    <br></br>

    <label className='BoldLabel' id='BoldLabel'>פלאפון:</label>
    <input type="text" className="form-control" id='PhoneNumber'></input>
    <br></br>


    <button type="button" className="btn btn-outline-dark"  onClick={(e) => {
      addUser({ FullName:document.getElementById('FullName').value,  Password:document.getElementById('Password').value,  Address:document.getElementById('Address').value,  PhoneNumber:document.getElementById('PhoneNumber').value}, e)
      saveuser()
    }
    }>הרשמה</button>


  </div>
}