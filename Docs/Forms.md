# Forms

Les formulaires dans react se gèrent de la même façon qu'en HTML.
Chaque champs gère son prpopre état, et à la soumission du formulaire le composant génère une réaction.
(On déclenche un évènement submit auquel on réagit)

## Les composants non contrôlés (avec champs non contrôlés)

(Nous verrons à la fin pourquoi on les qualifie de non contrôlés)
Cette partie traitera de la création du composant suivant : TaskForm.

Le composant retourne ainsi du JSX avec un formulaire (balise form) dans laquelle plusieurs div vont structurer les champs.
Les labels définissent les champs d'insertion (ici titre & description), les inputs et text areas permettent à l'utilisateur d'insérer les données, le placeholder fourni une indication de l'action attendue par l'utilisateur.
Pour gérer les id des inputs et leur liaison avec les labels on va utiliser un hook useId qu'on va stocker dans une constante.
Cette constante vient en valeur de la propriété htmlFor du label via une template string et dans la propriété id de l'input.
Grâce à l'évènement onSubmit sur le formulaire on peut écouter le moment où l'évènement le formulaire est envoyé.
On peut alors créer une fonction qui gère la soumission du form pour notament y mettre un preventDefault et ainsi éviter le rechargement de la page après la soumission du formulaire.
