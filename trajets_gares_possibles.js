var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <title>Trajets possibles et gares</title>'+
'    <meta charset="utf-8">'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        document.addEventListener(\'DOMContentLoaded\', function () {'+
'            // Fonction pour afficher ou masquer les régions'+
'            const toggleSection = (sectionId) => {'+
'                const section = document.getElementById(sectionId);'+
'                section.style.display = (section.style.display === \'none\' || section.style.display === \'\') ? \'block\' : \'none\';'+
'            };'+
''+
'            // Ajout d\'événements aux titres pour afficher/masquer les régions'+
'            document.querySelectorAll(\'.region-toggle\').forEach(button => {'+
'                button.addEventListener(\'click\', function () {'+
'                    const target = this.getAttribute(\'data-target\');'+
'                    toggleSection(target);'+
'                });'+
'            });'+
'        });'+
'    </script>'+
'</head>'+
'<body>'+
'    <main>'+
'        <h1><center>Trajets possibles et gares</center></h1><br />'+
'        <p>Dans un premier temps sur les lignes existantes et bien sûr dans les gares que tu connais aussi passionément que tes animaux de compagnie et/ou peluches.</p>'+
'        <p>Au départ on développera :</p><br />'+
''+
'        <h2>Les zones denses :</h2><br />'+
'        <button class="region-toggle" data-target="idf">Île-de-France</button>'+
'        <div id="idf" style="display:none;">'+
'            <p>_les lignes de RER (Réseau Express Régional)</p>'+
'            <p>_les lignes de Transilien (trains de banlieue partant des gares parisiennes)</p>'+
'            <p>_les lignes de tramway</p>'+
'            <p>Des aiguillages devront être construits pour passer d\'une ligne à l\'autre sans correspondance.</p><br />'+
'        </div>'+
''+
'        <button class="region-toggle" data-target="aix-marseille">Aix-Marseille</button>'+
'        <div id="aix-marseille" style="display:none;">'+
'            <p>Créer un RER reliant intensément les trois gares (Marseille Saint-Charles, Aix-en-Provence (centre-ville) et Aix-en-Provence TGV) ayant pour extrémités :</p>'+
'            <p>_Nice Ville</p>'+
'            <p>_Hyères</p>'+
'            <!-- Contenu supplémentaire -->'+
'        </div>'+
''+
'        <button class="region-toggle" data-target="lille">Métropole Européenne de Lille (avec une partie belge)</button>'+
'        <div id="lille" style="display:none;">'+
'            <p>Créer un RER s\'articulant sur Lille, Valenciennes, Roubaix, Tourcoing, Kortjik ayant pour extrémités :</p>'+
'            <p>_Amiens</p>'+
'            <!-- Contenu supplémentaire -->'+
'        </div>'+
''+
'        <!-- Ajouter d\'autres régions de manière similaire -->'+
'        '+
'        <h2>Puis au niveau régional (ou national pour les pays concernés) :</h2><br />'+
''+
'        <h3>Trajets phares et de navetteurs</h3><br />'+
'        <p>Personnes qui vont régulièrement dans les métropoles pour leurs études/travail.</p>'+
'        <input type="text" id="searchBar" placeholder="Rechercher un trajet..." onkeyup="filterTrajets()">'+
'        <ul id="trajetList">'+
'            <li>Lille <> Paris</li>'+
'            <li>Amiens <> Paris</li>'+
'            <li>Le Havre/Rouen <> Paris</li>'+
'            <!-- Ajouter plus de trajets ici -->'+
'        </ul>'+
''+
'        <script>'+
'            // Fonction pour filtrer les trajets'+
'            function filterTrajets() {'+
'                const filter = document.getElementById(\'searchBar\').value.toUpperCase();'+
'                const ul = document.getElementById("trajetList");'+
'                const li = ul.getElementsByTagName(\'li\');'+
''+
'                for (let i = 0; i < li.length; i++) {'+
'                    const txtValue = li[i].textContent || li[i].innerText;'+
'                    li[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";'+
'                }'+
'            }'+
'        </script>'+
''+
'    </main>'+
'</body>'+
'</html>';