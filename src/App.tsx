import Header from "./assets/components/Header/header"
import Footer from "./assets/components/Rodape/footer"
import styles from "./app.module.css"
import FormularioDeTarefas from "./assets/components/Formulario-de-tarefas"
import ListaDeTarefas from "./assets/components/Lista-de-tarefas"
import { ITask } from "./assets/Interfaces/Tarefa"
import { useState } from "react"
import Modal from "./assets/components/Modal/modal"


function App() {

    const [taskList, setTaskList] = useState<ITask[]>([])
    const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)
    const deleteTask = (id:number)=>{
        setTaskList(
            taskList.filter(task =>{
                return task.id !== id
            })
        )
    }

    const hideOrShowModal = (display: boolean) =>{
        const modal = document.querySelector("#modal")
        if(display){
            modal?.classList.remove("hide")
        }else{
            modal?.classList.add("hide")
        }
    }

    const editTask = (task:ITask)=>{
        hideOrShowModal(true)
        setTaskToUpdate(task)
    }

    return (<>
        <Modal children={<FormularioDeTarefas btnText="Editar tarefa" taskList={taskList} task={taskToUpdate}/>}/>
        <Header/>
        <main className={styles.main}>
            <div>
                <h2>O que você vai fazer?</h2>
                <FormularioDeTarefas btnText={"Criar tarefa"} taskList={taskList} setTaskList={setTaskList} />
            </div>
            <div>
                <h2>Suas tarefas:</h2>
                <ListaDeTarefas taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
            </div>
        </main>
        <Footer/>
    </>
    )
}

export default App
