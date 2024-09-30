import React from 'react'


const Button = ({ label, bkgc, color }) => {
    return (
        <button
            style = {{ backgroundColor: bkgc, color: color, }} 
            onClick={() => showLabel(label)} >
            {label}
        </button>
    )
}

const showLabel = (label) => {
    alert(`A label deste botão é: ${ label }`)
    
}

Button.defaultProps = {
    label: 'Grêmio',
    bkgc: 'white',
    color: 'blue',
}

export default Button