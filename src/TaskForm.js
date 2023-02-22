import { useEffect, useRef } from "react";
import Button from "./Button";
import TextareaField from "./Forms/TextareaField";
import TextField from "./Forms/TextField";
import style from "./TaskForm.module.css";

function TaskForm({ isTimerStarted, onSubmit }) {

    //Grâce aux refs je peux gérer l'insertion des données entrées par l'utilisateur dans le tabelau.
    //On crée deux constantes qui ont pour valeurs de départ "null".
    const titleInput = useRef(null);
    // const descriptionInput = useRef(null);

    useEffect(() => {
        titleInput.current.focus();
        titleInput.current.setDefaultValue('Hello World !');
    }, []);
    //Permet de soumettre le formulaire
    const handleSubmitForm = (event) => {
        //On commence par empêcher le rechargement de la page au moment de la soumission.
        event.preventDefault();
        console.log(titleInput.current);
        // onSubmit(//On passe à la soumission l'objet du formulaire.
        //     {
        //         title:titleInput.current.value,
        //         description:descriptionInput.current.value,
        //     }
        // ); // vient du composant parent de TaskForm.

        // //On réinitialise les valeurs des champs une fois la tâche enregistrée.
        // if (isTimerStarted){//lorsque le timer est lancé
        //     //On rmène à null la valeur des champs via current.value
        //     titleInput.current.value = null;
        //     descriptionInput.current.value = null;
        // }
    };

    return (
        <form onSubmit={ handleSubmitForm } className={style['form']}>
            <TextField labelTitle='Titre' placeholder="Titre de votre tâche" ref={ titleInput }/>
            <TextareaField labelTitle='Description' placeholder="Ecrivez votre description ici..."/>
            <Button type='submit' isTimerStarted={ isTimerStarted } />
        </form>
    );
}

export default TaskForm;