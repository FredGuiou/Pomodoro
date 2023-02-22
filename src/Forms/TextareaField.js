import { useId } from "react";
import style from "../TaskForm.module.css";

function TextareaField( { placeholder, labelTitle, value, onChange, error, name } ) {

    const id = useId();

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ id }>{ labelTitle }</label>
                <textarea className={style['input']} id={ id } rows="5" placeholder={ placeholder } value={ value } onChange={ handleChange }></textarea>
                { error && error.field === name && <p className={style['error']} >{ error.message }</p> }
        </div>
    );
}
export default TextareaField;