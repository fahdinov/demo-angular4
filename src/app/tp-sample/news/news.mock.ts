import { New } from './news.model';


export const NEW_MOCK : New = {
    id: 1,
    title: "Titre de l'actualité",
    category: "Sport",
    media : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRpCU3G8OHi6sm6CiMJCVWq6fYM7fGNFv6DpO7bsOuPZoGPj0HxInDVaHBfz77L9QHcQYJSrvmAA", // TODO
    chapo : "Chapô de l'actualié",
    content : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    datePub : new Date(),
    tags : ["Sport", "Politique"],
    author : "AMEUR Fahd"
};
/*
export const NEWS: New[] = [
];
*/
