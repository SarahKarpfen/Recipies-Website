import { createStore } from 'redux'; 
import produce from 'immer'; 


//הסטיט הגלובלי שיהיה מוכר בכל הקומפוננטות. במקרה זה-הסטיט יכיל את רשימת המתכונים שהכנסנו למסד הנתונים במונגו
const Mystate = {

    ShowUsers: false,

    RecipiesList:[ ]
    

}
 


const reducer = produce( 
(state, action) => { 
switch (action.type) { 
    
    case 'FILL-DATA': state.RecipiesList=action.payloud; break; 
    case 'SHOW-USERS-IN-NAV': state.ShowUsers=true; break;
} 
}, Mystate) 
const store = createStore( 
reducer); 


window.store = store; //יצירת מחסן הנתונים
export default store; //יצוא מחסן הנתונים