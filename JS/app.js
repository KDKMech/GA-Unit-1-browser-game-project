// consts

const quitButtonElement = document.getElementById(`quitButton`)
const menuContainerElement = document.getElementById(`mainMenu`)
const bodyElement = document.getElementById(`body`)
const creditsButtonElement = document.getElementById(`creditsButton`)

// variables========================================================================================================



// tests==========================================================================================
console.dir(quitButtonElement)
console.dir(menuContainerElement)
console.dir(bodyElement)
console.dir(creditsButtonElement)


// Functions=======================================================================================================

quitGame = () => { ////////should close the game window//// Tested MT
    window.close()
}
credits = () => {
    const devs = document.createElement(`h1`)
    devs.innerHTML = `Miles Tarricone`
    menuContainerElement.appendChild(devs)
}


//event handlera==================================================================================================================

quitButtonElement.addEventListener(`click`, () => {
    quitGame()
})
creditsButtonElement.addEventListener(`click`, () => {
    credits()
})


//Dead code==================================================================================
// quitGame() tested