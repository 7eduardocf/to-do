import styles from "./formulario-de-tarefas.module.css"
import { useState, useEffect, FormEvent, ChangeEvent } from "react"
import { ITask } from "../../Interfaces/Tarefa"

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?: ITask | null
    handleUpdate?(id: number,title:string, difficulty: number): void
}

function FormularioDeTarefas({ btnText,taskList,setTaskList,task,handleUpdate}: Props) {

    useEffect(() =>{
        if(task){
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    },[task])

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(handleUpdate) {
            handleUpdate(id,title,difficulty)
        }else{
            const id = Math.floor(Math.random() *1000)
            const newTask :ITask = {id,title,difficulty}
    
            setTaskList!([...taskList, newTask])
            setTitle("")
            setDifficulty(0)
        }
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.name === "title"){
            setTitle(e.target.value)
        }else{
            setDifficulty(parseInt(e.target.value))
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="Titulo">Título</label>
                <input type="text" name="title" placeholder="Titulo da tarefa" onChange={handleChange} value={title}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="Difficulty">Dificuldade:</label>
                <input type="text" name="Difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} value={difficulty}/>
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}
export default FormularioDeTarefas