import { useState } from "react"
import AddFormCreate from "./addFormCreate";
import ViewFormResult from "./viewFormResult";

export default function pageCreate() {

  const [activeform,setActiveform]=useState('add');

  return (
<>
    <div className="toggle-buttons">
      <input type="radio" name="toggle" id="add" defaultChecked onClick={()=>setActiveform('add')}/>
      <label htmlFor="add">Add Data</label>

      <input type="radio" name="toggle" id="view" onClick={()=>setActiveform('view')}/>
      <label htmlFor="view">View Data</label>
    </div>
   <div className="content-div">
      {activeform==='add' ? <AddFormCreate/> : <ViewFormResult/>}

   </div>
   </>

  )
}
