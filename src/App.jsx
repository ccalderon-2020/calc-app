// Importación
import React from 'react'
import Button from './components/Button'
import Result from './components/Result'
import './App.css'

// Función flecha o Arrow Function
const App = () => {

    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text)
    }
    
    //Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator' >
        <Result />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction}></Button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>

        <div className="functions">
            <button>Clear</button>
            <button>r</button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main> )
}

// Exportación
export default App;