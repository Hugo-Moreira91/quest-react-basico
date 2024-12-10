import './modify-text.css'

export const ModifyText = ({text, textColor}) => {
    return (
        <div className='text-container'>
            <p className='paragraph' style={{color: textColor}}>{text.toUpperCase()}</p>
        </div>
    )
}

ModifyText.defaultProps = {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ab quia pariatur itaque doloribus error optio, adipisci placeat molestias magni sit iure facilis totam nobis fuga eaque tempore mollitia illum!',
    textColor: 'darkblue'
}