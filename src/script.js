const btnSearchTel = document.getElementById("btnSearchTel")
let clientSearch = null


document.addEventListener("DOMContentLoaded", function () {
    btnSearchTel.addEventListener('click', async function () {
        const telSearch = btnSearchTel.previousElementSibling

        if (telSearch.value == "") {
            return
        } 
        const response = await fetch(`http://localhost:3000/clients?tel=${telSearch.value}&_embed=comptes`)
        let data = await response.json()
        clientSearch = data[0]
        setInfosClient()
        generateOptions()
})

    function setInfosClient() {
        const prenomClient = document.getElementById("prenom")
        const nomClient = document.getElementById("nom")
        console.log('Je suis la fonction setInfosClient');
        prenomClient.value = clientSearch.prenom
        nomClient.value = clientSearch.nom
    }

    function generateOptions() {
        const compteSelectElement = document.getElementById('compte')
        compteSelectElement.innerHTML += clientSearch.comptes.map(compte => ` 
            <option value="${compte.id}"> ${compte.numero} </option> `).join("")
    }
    
})
