import Formulario from "../components/Formulario"

function Section({ password, name, setName, pass, setPass }) {
  return (
    <div className="section">
      <Formulario
        password={password}
        name={name}
        setName={setName}
        pass={pass}
        setPass={setPass}
      />
    </div>
  )
}

export default Section
