import { ITask } from "../../Interfaces/Tarefa"
import styles from "./lista-de-tarefas.module.css"

interface Props{
    taskList: ITask[]
    handleDelete(id:number): void
    handleEdit(task: ITask): void
}

function ListaDeTarefas({taskList,handleDelete,handleEdit}: Props){
    return(
        <>
            {taskList.length > 0?(
                taskList.map(tarefa => {
                     return(
                     <div key={tarefa.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{tarefa.title}</h4>
                            <p>Dificuldade: {tarefa.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                            <i className="bi bi-pencil" onClick={()=>handleEdit(tarefa)}></i>
                            <i className="bi bi-trash" onClick={()=> {handleDelete(tarefa.id)}}></i>
                        </div>
                    </div>)
                })
            ):(
                <p>Não tem tarefas cadastradas</p>
            )}
        </>
    )   
}
export default ListaDeTarefas