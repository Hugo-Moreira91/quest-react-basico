import './container.css'
import { ModifyText } from '../modify-text/modify-text'
import { Button } from '../button/button'

const showLabel = (label) => {
    alert(`A label desse botão é "${label}"`)
}

export const ContainerTexts = () => {
    return (
        <>
            <h2 className='title'>Quest React básico - Exercício 1</h2>

            <div>
                <ModifyText />
                <ModifyText text='Olá, gêmeos do Dev em Dobro!' textColor='darkgreen' />
                <ModifyText text='Texto exemplo' textColor='#fff' />
            </div>
        </>
    )
}

export const ContainerButtons = () => {
    return (
        <>
            <h2 className='title'>Quest React básico - Exercício 2</h2>

            <div>
                <Button showLabel={showLabel} />
                <Button label='Baixar CV' showLabel={showLabel} />
                <Button label='Leia-me' showLabel={showLabel} />
            </div>
        </>
    )
}