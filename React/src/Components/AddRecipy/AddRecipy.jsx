import { useState } from 'react'
import { addRecipy } from '../../Axios/RecipiesAxios'
import { useDispatch } from 'react-redux'
import { FillRecipiesData } from '../../Redux/action'
import { useNavigate } from 'react-router-dom'

require('./AddRecipy.css')

export const AddRecipy = () => {

     //הגדרת משתנה סטייט המכיל את המתכון החדש להוספה
     const [newRecipy, setNewRecipy]=useState({})

     const [IngredientsArr, setIngredientsArr]=useState([{Name:"", Amount:""}])

     //הגדרת משגר-עבור עדכון הרידקס במתכון החדש שנוסף
     let send=useDispatch()

     //הגדרת משתנה המאפשר מעבר בין דפים
     let page=useNavigate(); 


     //פונקציות:
    //פונקציה שעורכת את שם הרכיב במערך הרכיבים
    const editName=(value, index)=>{

       const arr=[...IngredientsArr]
       arr[index].Name=value
       setIngredientsArr(arr)
    }


    //פונקציה שעורכת את כמות הרכיב במערך הרכיבים
    const editAmount=(value, index)=>{

        const arr=[...IngredientsArr]
        arr[index].Amount=value
        setIngredientsArr(arr)
     }


     //פונקציה המוסיפה את המתכון החדש למסד הנתונים 
     const add=async()=>{
        
          //הצגת הודעה מתאימה
          alert("המתכון נוסף בהצלחה")

          //העברה לקומפוננטת הבית-הראשית
          page('/Home');
        //הוספת המתכון לשרת
        const allNewRecipy={...newRecipy}
        allNewRecipy.Ingredients=IngredientsArr
        let res=await addRecipy(allNewRecipy)

        //עדכון הרידקס במתכון החדש שנוסף
        send(FillRecipiesData(res.data)) 
     }



    return <div>

        <div className='Details'>

            <label className='BoldLabel'>שם בעל המתכון:</label>
            <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, OwnerPassword:e.target.value})}></input>
            <br></br>

            <label className='BoldLabel'>שם מתכון:</label>
            <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, Name:e.target.value})}></input>
            <br></br>

            <label className='BoldLabel'>תמונה:</label>
            <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, Picture:e.target.value})}></input>
            <br></br>


            <label className='BoldLabel'>רמת קושי:</label>
            <div className="form-check" id="RadioButton">
                <input type="radio" id="Easy" name="Level" value="קל" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, Level:e.target.value})}></input>
                <label for="Easy" className="form-check-label" id='RadioLable'>קל</label>
            </div>

            <div className="form-check" id="RadioButton">
                <input type="radio" id="Middle" name="Level" value="בינוני" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, Level:e.target.value})}></input>
                <label for="Middle" className="form-check-label" id='RadioLable'>בינוני</label>
            </div>

            <div className="form-check" id="RadioButton">
                <input type="radio" id="Hard" name="Level" value="קשה" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, Level:e.target.value})}></input>
                <label for="Hard" className="form-check-label" id='RadioLable'>קשה</label>
            </div>
            <br></br>


            <label className='BoldLabel'>זמן הכנה:</label>
            <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, MakeTime:e.target.value})}></input>
            <br></br>


            <label className='BoldLabel'>סוג:</label>
            <div className="form-check" id="RadioButton">
                <input type="radio" id="Easy" name="Type" value="בשרי" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, Type:e.target.value})}></input>
                <label for="Easy" className="form-check-label" id='RadioLable'>בשרי</label>
            </div>

            <div className="form-check" id="RadioButton">
                <input type="radio" id="Middle" name="Type" value="פרווה" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, Type:e.target.value})}></input>
                <label for="Middle" className="form-check-label" id='RadioLable'>פרווה</label>
            </div>

            <div className="form-check" id="RadioButton">
                <input type="radio" id="Hard" name="Type" value="חלבי" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, Type:e.target.value})}></input>
                <label for="Hard" className="form-check-label" id='RadioLable'>חלבי</label>
            </div>

        </div>

        <div className='IngredientsDiv'>
            <label className='BoldLabel'>רכיבים:</label>

            {IngredientsArr.map((x, index)=><div className="row">

                 <div className="col">
                    <input type="text" className="form-control" placeholder="שם" name="pswd" id='IngredientsTextInput' value={x.Name} onChange={(e)=>editName(e.target.value, index)}></input>
                </div>

                <div className="col">
                    <input type="text" className="form-control" placeholder="כמות" name="pswd" id='IngredientsTextInput' value={x.Amount} onChange={(e)=>editAmount(e.target.value, index)}></input>
                </div>

            </div>)}

            <button type="button" className="btn btn-outline-dark" id='AddIngredient' onClick={()=>setIngredientsArr(IngredientsArr.concat({Name:"", Amount:""}))}>הוספת רכיב</button>
            <br></br>
            <br></br>
            
            <button type="button" className="btn btn-outline-dark" id='AddRecipy' onClick={()=>add()}>הוספת מתכון</button>
                
        </div>


    </div>
}