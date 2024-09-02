var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <title>coouirail</title>'+
'    <meta charset="utf-8">'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        // JavaScript pour gérer l\'interactivité'+
'        document.addEventListener(\'DOMContentLoaded\', function() {'+
''+
'            // Simuler la connexion et déconnexion'+
'            const logoutButton = document.getElementById(\'logoutButton\');'+
'            logoutButton.addEventListener(\'click\', function() {'+
'                alert(\'Déconnexion réussie !\');'+
'                window.location.href = \'login.html\'; // Redirection après déconnexion'+
'            });'+
''+
'            // Formulaire de sélection de gare'+
'            const gareDepart = document.getElementById(\'gare_depart\');'+
'            const gareDestination = document.getElementById(\'gare_destination\');'+
'            gareDepart.addEventListener(\'change\', function() {'+
'                alert(`Gare de départ sélectionnée : ${gareDepart.value}`);'+
'            });'+
''+
'            gareDestination.addEventListener(\'change\', function() {'+
'                alert(`Gare de destination sélectionnée : ${gareDestination.value}`);'+
'            });'+
''+
'            // Simuler la recherche de trajets'+
'            const searchButton = document.getElementById(\'searchButton\');'+
'            searchButton.addEventListener(\'click\', function() {'+
'                alert(\'Recherche de trajets en cours...\');'+
'                // Ici, vous pourriez faire un appel à un API ou charger dynamiquement du contenu'+
'            });'+
'        });'+
'    </script>'+
'</head>'+
'<body>'+
'    <h1><center>coouirail</center></h1><br />'+
'   '+
'    <section style="text-align: center;">'+
'        <button><a href="coouirail_questcequecest.html">coouirail qu\'est-ce que c\'est ?</a></button>'+
'    </section>'+
'    <section style="text-align: right;">invitations DM  notifications</section>'+
'    <section style="text-align: right;">'+
'        <button><a href="parametres.html">paramètres</a></button>'+
'    </section>'+
'    <section style="text-align: center;">'+
'        <button><a href="mon_profil.html">Ton profil</a></button>'+
'    </section>'+
'    <section style="text-align: center;">'+
'        <button><a href="mes_trajets.html">Mes trajets</a></button>'+
'    </section>'+
'    <section style="text-align: center;">'+
'        <button><a href="trajets_gares_possibles.html">Trajets possibles et gares</a></button>'+
'    </section>'+
'    <section style="text-align: center;">'+
'        <button><a href="operateurs_ferroviaires.html">Opérateurs ferroviaires</a></button>'+
'    </section>'+
''+
'    <main>'+
'        <p>Nous t\'aidons à trouver le conducteur/la conductrice et/ou les passager.e.s grâce à qui tu vivras un trajet unique.</p><br />'+
''+
'        <p class="champ">'+
'            <label for="gare_depart">Gare de départ</label>'+
'            <input id="gare_depart" name="gare_depart" value="" />'+
'        </p>'+
''+
'        <p class="champ">'+
'            <label for="gare_destination">Gare de destination</label>'+
'            <input id="gare_destination" name="gare_destination" value="" />'+
'        </p>'+
''+
'        <div>'+
'            <label for="ctrinteret">centres d\'intérêt</label>'+
'            <input type="text" id="ctrinteret" name="ctrinteret" minlength="4" required />'+
'        </div><br />'+
''+
'        <button id="searchButton">Rechercher</button><br /><br />'+
''+
'        <table>'+
'            <tr>'+
'                <td><img src="" alt="image 1" width="400" height="341" title="image 1" /></td>'+
'                <td><img src="" alt="image 2" width="400" height="341" title="image 2" /></td>'+
'                <td><img src="" alt="image 3" width="400" height="341" title="image 3" /></td>'+
'                <td><img src="" alt="image 4" width="400" height="341" title="image 4" /></td>'+
'            </tr>'+
'            <tr>'+
'                <td>pseudo</td>'+
'                <td>pseudo</td>'+
'                <td>pseudo</td>'+
'                <td>pseudo</td>'+
'            </tr>'+
'            <tr>'+
'                <td>expérience conduite ferroviaire</td>'+
'                <td>expérience conduite ferroviaire</td>'+
'                <td>expérience conduite ferroviaire</td>'+
'                <td>expérience conduite ferroviaire</td>'+
'            </tr>'+
'        </table><br />'+
''+
'        <section><center><button id="logoutButton">Te déconnecter</button></center></section>'+
'    </main>'+
'</body>'+
'</html>';