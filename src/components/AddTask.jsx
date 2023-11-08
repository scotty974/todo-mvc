import { useState } from "react"

export default function Tasks({add}){
const [task, setTaks] = useState('')

const handleTask = (e) =>{
    setTaks(e.target.value)
}

const addTaks= (event)=>{
    event.preventDefault()
    add(task)
    setTaks('')
}

    return<>
    <form className="formInput" onSubmit={addTaks}>
    <input type="text" placeholder="Ajouter une tache" value={task} onChange={handleTask} required/>
   
    </form>
    </>
}