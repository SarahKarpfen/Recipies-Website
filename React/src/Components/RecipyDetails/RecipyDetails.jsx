import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getRecipyByID } from "../../Axios/RecipiesAxios"

require('./RecipyDetails.css')

export const RecipyDetails = () => {

    //הגדרת משתנה סטייט המכיל את המתכון אותו יש להציג
    const [Recipy, setRecipy] = useState({ Ingredients: [] })

    const params = useParams()

    //פונקציה המתרחשת בעת טעינת הקומפוננטה
    //הפונקציה שולפת את המתכון אותו יש להציג ממסד הנתונים ושומרת אותו במשתנה הסטייט שהוגדר
    useEffect(() => {
        async function loud() {

            debugger
            const recipy = await getRecipyByID(params.id)
            setRecipy(recipy.data)
        }

        loud()
    }, [])


    return <div>
        {/* הצגת פרטי המתכון */}
        <div className="DetailsWithOutIngredients">
            <p className="Title">{Recipy.Name} | {Recipy.OwnerPassword}</p>
            <img id="Picture" src={`http://localhost:8080/Pictures/${Recipy.Picture}`}></img>
            <p id="Details">{Recipy.Type} | זמן הכנה: {Recipy.MakeTime} | {Recipy.Level}</p>

        </div>
        <div className="IngredientsList">
            <p id="Ingredients"><b>מרכיבים:</b></p>
            {Recipy.Ingredients.map(x => <p id="Ingredients">{x.Amount} {x.Name}</p>)}
        </div>
    </div>
}