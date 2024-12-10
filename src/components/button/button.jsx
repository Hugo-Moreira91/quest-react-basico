import './button.css'

export const Button = ({label, showLabel}) => {
    return <button className='btn' onClick={() => showLabel(label)}>{label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui!'
}