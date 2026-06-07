import Card from './components/Card'

const App = () => {
  return (
    <div>
      <h2>
        <p>1.This Dynamic data of user and age is sent as props</p> <br />
        <p>2.props is like parameter which is getting accepted in Card.jsx </p> <br />
        <p>3.props is an object , and this user and age are like its properties</p> <br />
        <p>4.Parent → Child communication = Props</p><br />
        <p>5. Data can only be sent directly from Parent to Child using props.Child cannot directly send data to Parent using props.</p>
        <p>Example: props are being sent from App.jsx to Card.jsx.</p>
      </h2>
      <br /><br />
      
      <Card user = "Amar" age = {21}   />
      
      <Card user = "Risabh" age = {29}   />
    </div>
  )
}

export default App
