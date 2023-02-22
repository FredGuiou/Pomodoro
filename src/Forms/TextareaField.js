import { useId } from "react";
import style from "../TaskForm.module.css";

function TextareaField( { placeholder, labelTitle, value, onChange } ) {

    const id = useId();

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ id }>{ labelTitle }</label>
                <textarea className={style['input']} id={ id } rows="5" placeholder={ placeholder } value={ value } onChange={ handleChange }></textarea>
        </div>
    );
}
export default TextareaField;