async function getNames() {

    const namesDiv = document.getElementById("names")

    const namesForm = document.getElementById("namesForm")

    let nameButton = document.getElementById("nameButton")


    nameButton.addEventListener("click", () => {
        let yourName = document.getElementById("yourName").value
        let charName = document.getElementById("charName").value
        
        let yourNameFinal = document.createElement("h1")
        let charNameFinal = document.createElement("h1")

        yourNameFinal.setAttribute("class", "nameHeadings")
        charNameFinal.setAttribute("class", "nameHeadings")

        yourNameFinal.innerText = yourName
        charNameFinal.innerText = charName

        namesDiv.appendChild(yourNameFinal)
        namesDiv.appendChild(charNameFinal)

        namesForm.setAttribute("hidden", "true")

    })
}

export { getNames }



