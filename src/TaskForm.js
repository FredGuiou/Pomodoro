import { useState } from "react";
import Button from "./Button";
import TextareaField from "./Forms/TextareaField";
import TextField from "./Forms/TextField";
import style from "./TaskForm.module.css";

function TaskForm({ isTimerStarted, onSubmit }) {

    const [titleValue, setTitleValue] = useState('');

    const [descriptionValue, setDescriptionValue] = useState('');

    //Permet de soumettre le formulaire
    const handleSubmitForm = (event) => {
        //On commence par empêcher le rechargement de la page au moment de la soumission.
        event.preventDefault();
        onSubmit(//On passe à la soumission l'objet du formulaire.
            {
                title: titleValue,
                description: descriptionValue,
            }
        );

        //On réinitialise les valeurs des champs une fois la tâche enregistrée.
        if (isTimerStarted){//lorsque le timer est lancé
            //On ramène à null la valeur des champs via current.value
            setTitleValue('');
            setDescriptionValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmitForm } className={style['form']}>
            <TextField labelTitle='Titre' placeholder="Titre de votre tâche" value={ titleValue } onChange={ setTitleValue } />
            <TextareaField labelTitle='Description' placeholder="Ecrivez votre description ici..." value={ descriptionValue } onChange={ setDescriptionValue }/>
            <Button type='submit' isTimerStarted={ isTimerStarted } />
        </form>
    );
}

export default TaskForm;