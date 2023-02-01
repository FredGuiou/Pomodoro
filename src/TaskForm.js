import { useId } from "react";
import Button from "./Button";
import style from "./TaskForm.module.css";

function TaskForm({ isTimerStarted, onSubmit }) {

    const id = useId();

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onSubmit(); // vient du composant parent de TaskForm.
    };

    return (
        <form onSubmit={ handleSubmitForm } className={style['form']}>
            <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ `${id}-title` }>Titre</label>
                <input className={style['input']} type="text" id={ `${id}-title` } placeholder="Titre de votre tâche" />
            </div>
            <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ `${id}-description` }>Description</label>
                <textarea className={style['input']} id={ `${id}-description` } rows="5" placeholder="Description de votre tâche"></textarea>
            </div>
            <Button type='submit' isTimerStarted={ isTimerStarted } />
        </form>
    );
}

export default TaskForm;