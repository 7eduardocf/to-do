import Header from "./assets/components/Header/header"
import Footer from "./assets/components/Rodape/footer"
import styles from "./app.module.css"
import FormularioDeTarefas from "./assets/components/Formulario-de-tarefas"
import ListaDeTarefas from "./assets/components/Lista-de-tarefas"

function App() {

    return (<>
        <Header/>
        <main className={styles.main}>
            <div>
                <h2>O que você vai fazer?</h2>
                <FormularioDeTarefas btnText={"Criar tarefa"}/>
            </div>
            <div>
                <h2>Suas tarefas:</h2>
                <ListaDeTarefas tarefa={""}/>
            </div>
        </main>
        <Footer/>
    </>
    )
}

export default App
