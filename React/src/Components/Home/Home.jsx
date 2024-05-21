import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRecipies } from "../../Axios/RecipiesAxios"
import { FillRecipiesData } from "../../Redux/action"
import { useNavigate } from "react-router-dom"

require('./Home.css')


export const Home = () => {

    const page = useNavigate()

    //שליפת הנתונים מהרידקס (ששולף מהשרת)
    //הגדרת משתנה סטייט המכיל את רשימת המתכונים שבמונגו
    const [RecipiesList, SetRecipiesList] = useState([])

    //הגדרת משתנה משגר עבור עדכון הרידקס
    let send = useDispatch()

    //פונקציה המתבצעת בעת טעינת הקומפוננטה
    useEffect(() => {
        async function loudData() {
            //ביצוע עדכון הרידקס במידה ועדיין לא נשלפו הנתונים. כלומר, במידה והרידקס ריק
            if (RecipiesList.length == 0) {
                //שליפת הנתונים מהמונגו ע"י קריאה לפונקצית השליפה מהאקסיוס של המתכונים
                let response = await getAllRecipies()

                //עדכון הסטייט המקומי שהוגדר למעלה
                SetRecipiesList(response.data)

                SetRecipiesList(response.data)
                //עדכון הרידקס
                send(FillRecipiesData(response.data))
            }
        }

        loudData()
    }, [])




    return <div className="container" id="RecipiesPicture">
        {/*מעבר על רשימת המתכונים והצגתה*/}
        {RecipiesList.map(x => <div className="Picture">
            <p>{x.Name}</p>
            <img src={`http://localhost:8080/Pictures/${x.Picture}`}></img>
            <br></br>
            <button type="button" className="btn btn-outline-dark" id='AddRecipy' onClick={() => page(`../RecipyDetails/${x._id}`)}>פרטים נוספים</button>
        </div>)}
    </div>
}