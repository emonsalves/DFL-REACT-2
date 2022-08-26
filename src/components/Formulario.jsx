import Button from "./Button"

function Formulario({ password, name, setName, pass, setPass }) {
  const redLetter =
    "block mb-2 text-sm font-medium text-red-700 dark:text-red-500"

  const redInput =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"

  const greenLetter =
    "block mb-2 text-sm font-medium text-green-700 dark:text-green-500"

  const greenInput =
    "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"

  function capturaNombre(e) {
    setName(e.target.value)
  }

  function capturaPassword(e) {
    setPass(e.target.value)
  }

  return (
    <div className="Formulario">
      <div className="mb-6">
        <label className={greenLetter}>Tu Nombre</label>
        <input
          type="text"
          id="username"
          className={greenInput}
          placeholder="Ingresa tu Nombre"
          onChange={capturaNombre}
          value={name}
        />
      </div>
      <div className="mb-6">
        <label className={redLetter}>Tu Contraseña</label>
        <input
          type="password"
          id="username-error"
          className={pass === password ? greenInput : redInput}
          placeholder="Ingresa tu Contraseña"
          onChange={capturaPassword}
          value={pass}
        />
      </div>
      {pass === password ? <Button /> : ""}
    </div>
  )
}

export default Formulario
