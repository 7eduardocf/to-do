
function App() {

    const nome: string = "Eduardo"
    const idade: number = 22
    const isWorking: boolean = true

    return (
        <div>
            <h1>React com typescript</h1>
            <h2>Nome:{nome}</h2>
            <h2>Idade:{idade}</h2>
            {isWorking && <p>Está trabalhando</p>}
        </div>
    )
}

export default App
