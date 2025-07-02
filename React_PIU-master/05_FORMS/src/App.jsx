import './App.css'
import FirstForm from './componentes/FirstForm'
import FormState from './componentes/FormState'
import FormSelect from './componentes/FormSelect'
import Todolist from './componentes/TodoList'

function App() {
 

  return (
    <>
      <div className="App">
        <h1>Trabalhando com Formulários</h1>
          <FirstForm/>
          <br />
          <FormState/>
          <br />
          <FormSelect/>
          <br />
          <Todolist />
      </div>
    </>
  )
}

export default App