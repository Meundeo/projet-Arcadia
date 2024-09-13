import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/montagnes", "Les Montagnes", "/pages/montagnes.html"),
    new Route("/marais", "Le Marais", "/pages/marais.html"),
    new Route("/savane", "La Savane", "/pages/savane.html"),
    new Route("/babar", "Babar", "/pages/babar.html"),
    new Route("/balou", "Balou", "/pages/balou.html"),
    new Route("/crazyfrog", "Crazy Frog", "/pages/crazyfrog.html"),
    new Route("/cris", "Cris", "/pages/cris.html"),
    new Route("/kaa", "Kaa", "/pages/kaa.html"),
    new Route("/marty", "Marty", "/pages/marty.html"),
    new Route("/moose", "Moose", "/pages/moose.html"),
    new Route("/simba", "Simba", "/pages/simba.html"),
    new Route("/tictac", "Tic Tac", "/pages/tictac.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/mention", "Mentions Légales", "/pages/mention.html"),
    new Route("/politique", "Politique de données personnelles", "/pages/politique.html"),
    new Route("/contacts", "Contacts", "/pages/contact.html"),
    new Route("/employe", "Employé", "/pages/employe.html"),
    
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";