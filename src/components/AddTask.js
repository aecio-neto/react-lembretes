import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Por favor, preencha os dados.')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  
  return ( 
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Lembrete</label>
        <input type="text" placeholder="Adicionar..." value={text} onChange={(e) => setText(e.target.value)}/>

      </div>
      <div className="form-control">
        <label>Data</label>
        <input type="text" placeholder="Dia e Hora" value={day} onChange={(e) => setDay(e.target.value)}/>

      </div>
      <div className="form-control form-control-check">
        <label>Sinalizar</label>
        <input type="checkbox" value={reminder} checked={reminder } onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div> 

      <input type="submit" value='Salvar' className="btn btn-block" />
    </form>
  )
}

export default AddTask