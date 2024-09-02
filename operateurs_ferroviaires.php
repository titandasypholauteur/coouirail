<?php
$string =  'var html =  \'<!DOCTYPE html>\'+'.
'<html lang="fr-FR">\'+'.
'<head>\'+'.
'    <title>Opérateurs Ferroviaires</title>\'+'.
'    <meta charset="utf-8">\'+'.
'    <link rel="stylesheet" href="style.css">\'+'.
'</head>\'+'.
'<body>\'+'.
'    <main>\'+'.
'        <h1 style="text-align: center;">Opérateurs ferroviaires</h1><br />\'+'.
'\'+'.
'        <p>Chaque conducteur/conductrice devra avoir une licence pour conduire sa rame qu\\\'iel louera pour emprunter le réseau.</p><br />\'+'.
'        \'+'.
'        <!-- Barre de recherche -->\'+'.
'        <input type="text" id="searchBar" onkeyup="filterSections()" placeholder="Rechercher un opérateur...">\'+'.
'\'+'.
'        <!-- Section 1 : Services de l\\\'Hexagone -->\'+'.
'        <h2 onclick="toggleSection(\\\'servicesHexagone\\\')">Les services habituels de l\\\'hexagone</h2><br />\'+'.
'        <section id="servicesHexagone" style="display:none;">\'+'.
'            <p>_RER : en Île-de-France et en régions</p>\'+'.
'            <p>_Transilien : banlieues au départ des gares parisiennes</p>\'+'.
'            <p>_TER : au sein des régions et entre deux d\\\'entre elles</p>\'+'.
'            <p>_Intercités : trains classiques entre régions/pays</p>\'+'.
'            <p>_TGV InOui : grande vitesse</p>\'+'.
'            <p>_OuiGo : grande vitesse à bas coûts</p><br />\'+'.
'        </section>\'+'.
'\'+'.
'        <!-- Section 2 : Opérateurs voisins -->\'+'.
'        <h2 onclick="toggleSection(\\\'operateursVoisins\\\')">Opérateurs de nos pays voisins</h2><br />\'+'.
'        <section id="operateursVoisins" style="display:none;">\'+'.
'            <p>Comme TrenItalia et la RENFE ont commencé à la faire, ils permettront de faire baisser les coûts exhorbitants des trains.</p><br />\'+'.
'\'+'.
'            <h3 onclick="toggleSection(\\\'renfe\\\')">RENFE</h3><br />\'+'.
'            <section id="renfe" style="display:none;">\'+'.
'                <p>Conserver les trajets existants :</p>\'+'.
'                <p>_Madrid <> Marseille Saint-Charles</p>\'+'.
'                <p>_Barcelona Sants <> Lyon Part-Dieu</p>\'+'.
'                <p>_Barcelona Sants <> Toulouse Matabiau</p><br />\'+'.
'                <p>Ajouter lignes :</p>\'+'.
'                <p>_Barcelona Sants <> Paris Gare de Lyon (via Girona, Figueres, Perpignan, Narbonne, Agde, Sète, Montpellier Sud-de-France, Nîmes Pont du Gard, Valence TGV)</p>\'+'.
'                <p>_Bilbao <> Paris Montparnasse (via Hendaye, Bordeaux Saint-Jean, Poitiers, Futuroscope, Saint-Pierre-des-Corps)</p><br />\'+'.
'                <p>Et lignes en France :</p>\'+'.
'                <p>_Hendaye <> Paris Montparnasse (via Bordeaux Saint-Jean, Angoulême, Poitiers, Futuroscope, Saint-Pierre-des-Corps)</p>\'+'.
'                <p>_Bordeaux Saint-Jean <> Paris Montparnasse (via Angoulême, Poitiers, Futuroscope, Saint-Pierre-des-Corps, Vendôme-Villiers).</p>\'+'.
'\'+'.
'                <!-- Autres lignes de la RENFE -->\'+'.
'            </section>\'+'.
'\'+'.
'            <h3 onclick="toggleSection(\\\'eurostar\\\')">Eurostar</h3><br />\'+'.
'            <section id="eurostar" style="display:none;">\'+'.
'                <p>Conserver les lignes actuelles Paris Gare du Nord <> London Saint-Pancras...</p>\'+'.
'                <p>Ajouter lignes :</p>\'+'.
'                <p>_Lille Flandres <> Paris Gare du Nord</p>\'+'.
'                <p>_Lille Flandres <> Nice Ville (via TGV Haute-Picardie, Aéroport Charles de Gaulle 2 TGV, Marne-la-Vallée Chessy, Lyon Saint-Exupéry TG, Avignon TGV, Aix-en-Provence TGV)</p>\'+'.
'                <p>_Lille Flandres <> Perpignan (via TGV Haute-Picardie, Aéroport Charles de Gaulle 2 TGV, Marne-la-Vallée Chessy, Lyon Saint-Exupéry TGV, Valence TGV, Nîmes Pont-du-Gard, Montpellier Sud-de-France, Sète, Agde, Béziers TGV, Narbonne TGV).</p>\'+'.
'                <!-- Autres lignes de Eurostar -->\'+'.
'            </section>\'+'.
'        \'+'.
'\'+'.
'            <h3 onclick="toggleSection(\\\'trenitalia\\\')">TrenItalia</h3><br />\'+'.
'            <section id="trenitalia" style="display:none;">\'+'.
'                <p>Conserver les lignes Milano <> Paris Gare de Lyon</p>\'+'.
'                <p>Lyon Perrache <> Paris Gare de Lyon</p><br />\'+'.
'                <p>Ajouter lignes :</p>\'+'.
'                <p>_Genova <> Paris gare de Lyon (via Vintimillia, Nice Ville, Aéroport Nice Côte d\\\'Azur, Cannes, Fréjus-Saint-Raphaël, Les Arcs-Draguignan, Toulon, Aix-en-Provence TGV)</p>\'+'.
'                <p>_Milano Garibaldi <> Toulouse Matabiau (via Torino Posta Susa, Grenoble, Valence TGV, Nîmes Pont-du-Gard, Montpellier Sud-de-France, Béziers TGV, Narbonne TGV, Carcassonne)</p><br />\'+'.
'                <p>Et lignes en france : </p>\'+'.
'                <p>_Nice Ville <> Paris Gare de Lyon (via Aéroport Nice Côte d\\\'Azur, Cannes, Fréjus-Saint-Raphaël, Les Arcs-Draguignan, Toulon, Aix-en-Provence TGV, Avignon TGV)</p>\'+'.
'                <p>_Hyères <> Paris Gare de Lyon (via Aix-en-Provence TGV)</p>\'+'.
'                <p>_Marseille Saint-Charles (via Aix-en-Provence TGV, Avignon TGV)</p>\'+'.
'                <p>_Grenoble <> Toulouse Matabiau (via Valence TGV, Nîmes Pont-du-Gard, Montpellier Sud-de-France, Béziers TGV, Narbonne TGV, Carcassonne).</p><br />\'+'.
'\'+'.
'                <!-- Autres lignes de TrenItalia -->\'+'.
'            </section>\'+'.
'\'+'.
'            <h3 onclick="toggleSection(\\\'eurocityexpress\\\')">EuroCityExpress</h3><br />\'+'.
'            <section id="eurocityexpress" style="display:none;">\'+'.
'                <p>Ce train à grande vitesse circule en Suisse, en Allemagne et en Autriche...</p>\'+'.
'                <p>Le faire circuler sur des lignes de/vers Basel, Zurich, Berne, Genève, Lausanne et Neuchâtel.</p><br />\'+'.
'                <p>Créer une ligne Grenoble <> Paris Gare de Lyon (via Chambéry Challes-les-Eaux, Aix-les-Bains-Le Revard)</p>\'+'.
'                <p>Créer une ligne Grenoble <> Paris Gare de Lyon (via Chambéry Challes-les-Eaux, Aix-les-Bains-Le Revard, Annecy, Genève Cointrin, Lausanne).</p><br />\'+'.
'                <!-- Autres lignes de EuroCityExpress -->\'+'.
'            </section>\'+'.
'\'+'.
'            <h3 onclick="toggleSection(\\\'ice\\\')">ICE (Allemagne)</h3><br />\'+'.
'            <section id="ice" style="display:none;">\'+'.
'                <p>Conserver les liaisons Paris Gare de l\\\'Est <> Frankfurt-aim-Main</p>\'+'.
'                <p>et Paris Gare de l\\\'Est <> München</p><br />\'+'.
'                <p>Ajouter lignes françaises :</p>\'+'.
'                <p>Paris Gare de l\\\'Est <> Strasbourg</p>\'+'.
'                <p>Marseille Saint-Charles <> Strasbourg (via Aix-en-Provence TGV, Avignon TGV, Lyon Part-Dieu, Châlon-sur-Saône, Dijon Ville, Besançon Franche-Comté TGV, Belfort-Montbéliard TGV, Colmar, Mulhouse)</p>\'+'.
'                <p>Strasbourg <> Bordeaux Saint-Jean (via Lorraine Louvigny TGV, Meuse TGV, Champagne-Ardenne TGV, Marne-la-Vallée Chessy, Massy TGV, Saint-Pierre-des-Corps, Futuroscope, Poitiers)</p>\'+'.
'                <p>Strasbourg <> Nantes (via Lorraine Louvigny TGV, Meuse TGV, Champagne-Ardenne TGV, Marne-la-Vallée Chessy, Massy TGV, Saint-Pierre-des-Corps, Angers Saint-Laud)</p>\'+'.
'                <p>Strasbourg <> Rennes (via Lorraine Louvigny TGV, Meuse TGV, Champagne-Ardenne TGV, Marne-la-Vallée Chessy, Massy TGV, Le Mans, Laval).</p>\'+'.
'                <!-- Autres lignes de ICE -->\'+'.
'            </section>\'+'.
'\'+'.
'           \'+'.
'        \'+'.
'    </main>\'+'.
'\'+'.
'    <script>\'+'.
'        // Fonction pour afficher/masquer les sections\'+'.
'        function toggleSection(sectionId) {\'+'.
'            const section = document.getElementById(sectionId);\'+'.
'            if (section.style.display === "none") {\'+'.
'                section.style.display = "block";\'+'.
'            } else {\'+'.
'                section.style.display = "none";\'+'.
'            }\'+'.
'        }\'+'.
'\'+'.
'        // Fonction pour filtrer les sections par recherche\'+'.
'        function filterSections() {\'+'.
'            const input = document.getElementById(\\\'searchBar\\\');\'+'.
'            const filter = input.value.toUpperCase();\'+'.
'            const sections = document.querySelectorAll(\\\'section\\\');\'+'.
'\'+'.
'            sections.forEach(section => {\'+'.
'                const text = section.innerText || section.textContent;\'+'.
'                if (text.toUpperCase().indexOf(filter) > -1) {\'+'.
'                    section.style.display = "";\'+'.
'                } else {\'+'.
'                    section.style.display = "none";\'+'.
'                }\'+'.
'            });\'+'.
'        }\'+'.
'    </script>\'+'.
'</body>\'+'.
'</html>\';';

 echo $string; 
?>