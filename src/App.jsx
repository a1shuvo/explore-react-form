import './App.css'
import ControlledForm from './components/ControlledForm/ControlledForm'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import SimpleForm from './components/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <UnControlledField></UnControlledField> */}
      <HookForm></HookForm>
    </>
  )
}

export default App
