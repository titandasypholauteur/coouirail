var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <title>Pseudo</title>'+
'    <meta charset="utf-8">'+
'    <link rel="stylesheet" href="style.css">'+
'</head>'+
'<body>'+
'    <h1 style="text-align: center;">Pseudo</h1><br />'+
'    '+
'    <section style="text-align: left;">'+
'        <input type="file" id="photoUpload" name="photo[]" accept="image/*" required>'+
'        <img id="profilePhoto" src="" alt="Photo de profil" style="display:none; width: 100px; height: 100px;">'+
'    </section>'+
'    '+
'    <section style="text-align: center;">'+
'        <button><a href="coouirail_questcequecest.html">Coouirail qu\'est-ce que c\'est ?</a></button>'+
'        <button><a href="mes_trajets.html">Mes trajets</a></button>'+
'        <button><a href="trajets_gares_possibles.html">Trajets possibles et gares</a></button>'+
'        <button><a href="premiere_paj.html">Retour accueil</a></button>'+
'    </section>'+
''+
'    <section style="text-align: right;">'+
'        <span id="invitations">Invitations: 0</span>'+
'        <span id="notifications">Notifications: 0</span>'+
'    </section>'+
''+
'    <section style="text-align: right;">'+
'        <button><a href="parametres.html">Paramètres</a></button>'+
'    </section>'+
''+
'    <main>'+
'        <p style="text-align: center;">Mes conducteurs/conductrices</p>'+
'        <p style="text-align: center;">Mes passager.e.s</p>'+
'        <p style="text-align: center;">Note</p>'+
'        <p style="text-align: center;">Commentaires</p>'+
'        <p style="text-align: center;" id="bio">Ma bio : Décrivez-vous ici...</p>'+
'        '+
'        <section style="text-align: center;">'+
'            <button onclick="modifierBio()">Modifier</button>'+
'            <br /><br />'+
'            <button onclick="deconnexion()">Te déconnecter</button>'+
'        </section>'+
'    </main>'+
'    '+
'    <script>'+
'        // Afficher la photo de profil téléchargée'+
'        document.getElementById(\'photoUpload\').addEventListener(\'change\', function(event) {'+
'            const file = event.target.files[0];'+
'            if (file) {'+
'                const reader = new FileReader();'+
'                reader.onload = function(e) {'+
'                    const profilePhoto = document.getElementById(\'profilePhoto\');'+
'                    profilePhoto.src = e.target.result;'+
'                    profilePhoto.style.display = \'block\';'+
'                }'+
'                reader.readAsDataURL(file);'+
'            }'+
'        });'+
''+
'        // Modifier la bio'+
'        function modifierBio() {'+
'            const bio = document.getElementById(\'bio\');'+
'            const nouvelleBio = prompt("Modifier votre bio:", bio.innerText.replace("Ma bio : ", ""));'+
'            if (nouvelleBio !== null && nouvelleBio.trim() !== "") {'+
'                bio.innerText = "Ma bio : " + nouvelleBio;'+
'            }'+
'        }'+
''+
'        // Déconnexion avec confirmation'+
'        function deconnexion() {'+
'            const confirmation = confirm("Voulez-vous vraiment vous déconnecter ?");'+
'            if (confirmation) {'+
'                // Code pour déconnecter l\'utilisateur'+
'                alert("Vous êtes maintenant déconnecté.");'+
'            }'+
'        }'+
''+
'        // Simulation de l\'arrivée d\'invitations et notifications'+
'        let invitationsCount = 0;'+
'        let notificationsCount = 0;'+
'        '+
'        setInterval(() => {'+
'            invitationsCount += Math.floor(Math.random() * 3); // Simuler l\'arrivée d\'invitations'+
'            notificationsCount += Math.floor(Math.random() * 2); // Simuler l\'arrivée de notifications'+
'            '+
'            document.getElementById(\'invitations\').innerText = "Invitations: " + invitationsCount;'+
'            document.getElementById(\'notifications\').innerText = "Notifications: " + notificationsCount;'+
'        }, 5000); // Mise à jour toutes les 5 secondes'+
''+
'    </script>'+
'</body>'+
'</html>';