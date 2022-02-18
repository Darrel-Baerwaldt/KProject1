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

        
        // console.log("monkey")
    })

    
    // const namesDiv = document.getElementById("names")




    // yourNameFinal.innerHTML = yourName

    // namesDiv.appendChild(yourNameFinal)
    
    
//     // let nameButton = document.createElement("button")
//     // nameButton.innerHTML = "Submit"

//     // nameButton.addEventListener("click", () => {
//     //     namesDiv.removeChild
//     // })

// console.log(yourName)
}

export { getNames }



