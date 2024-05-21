import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Components/Routing/Routing';
import { MainManue } from './Components/MainManue/MainManue';
import { UserProvider } from './UsersContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {

  //הגדרת משתנים
  //רשימת משתמשי האתר. הרשימה תוכר בכל דפיי האתר על-יידי הקונטקס
  const [UserList, SetUserList] = useState([
    // {FullName:"אסתי אברג'יל", Password:"EA"},
    // {FullName:"חגית אפשטיין", Password:"CE"},
    // {FullName:"שרי קרפפן", Password:"SK"},
    // {FullName:"חני גלזר", Password:"CG"},
    // {FullName:"מרים פרוידמן", Password:"MF"},
    // {FullName:"מרים זייר", Password:"MZ"},
    // {FullName:"תמר עמאר", Password:"TA"}  
  ]);




  //פונקציות

  //פונקציה המוסיפה משתמש לרשימת המשתמשים
  const addUser = (user, e) => {
    e.preventDefault()
    SetUserList(j => j.concat(user))
  }




  //הגדרת אובייקט המכיל את כל המשתנים, פונקציות וכו'... הקשורות לרשימת המשתמשים
  const transfer = {
    UserList: UserList, //משתנה המכיל את הרשימה
    addUser: addUser //משתנה המכיל את פונקציית הוספת משתמש לרשימה
    ,
    setlist: (mylist) => { SetUserList(mylist) }
  }


  return (
    <div>
      <BrowserRouter>

        <Provider store={store}>
          <UserProvider value={transfer}>
            <MainManue></MainManue>

            <Routing></Routing>
          </UserProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
