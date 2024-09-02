var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <title>Mes trajets</title>'+
'    <meta charset="utf-8">'+
'    <link rel="stylesheet" href="style.css">'+
'</head>'+
'<body>'+
'    <section style="text-align: center;">'+
'        <button><a href="premiere_paj.html">Retour accueil</a></button>'+
'        <button><a href="mon_profil.html">Retour mon profil</a></button>'+
'    </section>'+
''+
'    <main>'+
'        <h1 style="text-align: center;">Mes trajets</h1><br />'+
''+
'        <table id="trajetsTable">'+
'            <tr>'+
'                <td>Date</td><td>Horaire</td><td>Départ</td><td>Destination</td>'+
'                <td>Rôle</td><td>Statut</td>'+
'            </tr>'+
'        </table>'+
'        <button onclick="ajouterTrajet()">Ajouter un trajet</button>'+
'    </main>'+
''+
'    <script>'+
'        const trajets = ['+
'            { date: \'25/08/2024\', horaire: \'08:00\', depart: \'Paris\', destination: \'Lyon\', type: \'\', statut: \'\' },'+
'            { date: \'26/08/2024\', horaire: \'09:30\', depart: \'Lyon\', destination: \'Marseille\', type: \'\', statut: \'\' },'+
'            // Ajoutez plus de trajets ici'+
'        ];'+
''+
'        function genererTable() {'+
'            const table = document.getElementById(\'trajetsTable\');'+
'            table.innerHTML = `'+
'                <tr>'+
'                    <td>Date</td><td>Horaire</td><td>Départ</td><td>Destination</td>'+
'                    <td>Rôle</td><td>Statut</td>'+
'                </tr>`;'+
'            trajets.forEach((trajet, index) => {'+
'                const row = table.insertRow();'+
'                row.innerHTML = `'+
'                    <td>${trajet.date}</td>'+
'                    <td>${trajet.horaire}</td>'+
'                    <td>${trajet.depart}</td>'+
'                    <td>${trajet.destination}</td>'+
'                    <td>'+
'                        <select onchange="mettreAJourType(${index}, this.value)">'+
'                            <option value=""></option>'+
'                            <option value="conducteur">Conducteur/Conductrice</option>'+
'                            <option value="passager">Passager.e</option>'+
'                        </select>'+
'                    </td>'+
'                    <td>'+
'                        <select onchange="mettreAJourStatut(${index}, this.value)">'+
'                            <option value=""></option>'+
'                            <option value="refuse">Refusé</option>'+
'                            <option value="attente_validation">En attente de validation</option>'+
'                            <option value="annule">Annulé</option>'+
'                            <option value="valide">Validé</option>'+
'                            <option value="realise">Réalisé</option>'+
'                        </select>'+
'                    </td>'+
'                `;'+
'            });'+
'        }'+
''+
'        function mettreAJourType(index, value) {'+
'            trajets[index].type = value;'+
'            console.log(`Trajet ${index} type mis à jour : ${value}`);'+
'        }'+
''+
'        function mettreAJourStatut(index, value) {'+
'            trajets[index].statut = value;'+
'            console.log(`Trajet ${index} statut mis à jour : ${value}`);'+
'        }'+
''+
'        function ajouterTrajet() {'+
'            const nouveauTrajet = {'+
'                date: \'27/08/2024\','+
'                horaire: \'10:00\','+
'                depart: \'Marseille\','+
'                destination: \'Nice\','+
'                type: \'\','+
'                statut: \'\''+
'            };'+
'            trajets.push(nouveauTrajet);'+
'            genererTable();'+
'        }'+
''+
'        window.onload = genererTable;'+
'    </script>'+
'</body>'+
'</html>';