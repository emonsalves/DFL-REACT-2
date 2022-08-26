import { useState } from "react"
import "./App.css"
import Header from "./layout/Header"
import Section from "./layout/Section"
import Footer from "./layout/Footer"

function App() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const password = "252525"
  const titulo = "Ingrese sus datos para la Compra"

  return (
    <div className="App">
      <Header titulo={titulo} />
      <Section
        password={password}
        name={name}
        setName={setName}
        pass={pass}
        setPass={setPass}
      />
      <Footer/>
    </div>
  )
}

export default App
