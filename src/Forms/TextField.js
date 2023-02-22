import { useId } from "react";
import style from "../TaskForm.module.css";

function TextField({ placeholder, labelTitle, value, onChange }) {

    const id = useId();

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return(
        <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ id }>{ labelTitle }</label>
                <input className={style['input']} type="text" id={ id } placeholder={ placeholder } value={ value } onChange={ handleChange }/>
        </div>
    );
}

export default TextField;