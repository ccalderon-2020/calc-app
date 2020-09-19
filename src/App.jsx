// Importación
import React from 'react'
import Button from './components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
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
        <Numbers
            onClickNumber ={number=>
                console.log("Numbers", number)
            }
        />

        <Functions
            onContentClear={() => 
                console.log("content clear")
            }
            onDelete={() => 
                console.log("Delete") 

            }
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("operations", operation)
            } 
            onClickEqual={equal=> 
                console.log("equal", equal)} 
        />
    </main>)
}

// Exportación
export default App;