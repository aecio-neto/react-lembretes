import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// parei de acompanhar em tasks 47:12

function Header({ title, onAdd, showAdd }) { // esse destructuring é o mesmo que props.title

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'X' : 'Add'} 
        onClick={onAdd } 
      />
    </header>
  )
}

// Define um valor padrão para a propriedade, caso ele não seja passado na importação do componente. 
Header.defaultProps = {
  title: "Lembretes",
}
//   message: "Esse parágrafo tem um valor padrão, mas na importação um outro valor foi passado."

// Checagem de tipo para tornar o código mais robusto. Tipo um typescript
// Header.PropsTypes = {
//   title: PropTypes.string,
//   price: PropTypes.number.isRequired //
// }

// Formas de se usar CSS
const headingColor = {
  color: 'red',
  backgroundColor: 'black'
}

// Exemplo de uso:
// <h1 style={headingColor}>Planejador de Tarefas</h1> 


export default Header