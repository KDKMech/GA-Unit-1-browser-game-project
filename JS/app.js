// consts

const quitButtonElement = document.getElementById(`quitButton`)
const mainMenuContainerElement = document.getElementById(`mainMenuContainer`)
const bodyElement = document.getElementById(`body`)
const creditsButtonElement = document.getElementById(`creditsButton`)
const startGameButtonElement = document.getElementById(`startGameButton`)
const gameContainerElement = document.getElementById(`gameContainer`)
const mainMenuAreaElement = document.getElementById(`mainMenuArea`)
const computerCastleElement = document.getElementById(`computerCastle`)
const playerCastleElement = document.getElementById(`playerCastle`)
// variables========================================================================================================



// tests==========================================================================================
console.dir(quitButtonElement)
console.dir(mainMenuContainerElement)
console.dir(bodyElement)
console.dir(creditsButtonElement)
console.dir(gameContainerElement)


// Functions=======================================================================================================

quitGame = () => { ////////should close the game window//// Tested MT
    window.close()
}
credits = () => {/////////// appends dev name to menu /// Tested MT
    
    const devs = document.createElement(`h1`)
    devs.innerHTML = `Miles Tarricone`
    mainMenuAreaElement.appendChild(devs)
}
createGameUI = (topSpacerElement) => {//this holds most of the game
    let playerHP = 100
    let computerHP = 100
    const maxHP = 100
    const playerHPElement = document.createElement(`h1`)
    const computerHPElement = document.createElement(`h1`)
    const attackButton = document.createElement(`button`)
    const repairButton = document.createElement(`button`)
    
    attackButton.innerHTML = `Attack!`
    repairButton.innerHTML = `Repair!`
    playerHPElement.innerHTML = `${playerHP}`
    computerHPElement.innerHTML = `${computerHP}`
    topSpacerElement.appendChild(playerHPElement)
    topSpacerElement.appendChild(computerHPElement)
    topSpacerElement.appendChild(attackButton)
    topSpacerElement.appendChild(repairButton)
    
    
    // Event listeners for game state========================================================
    attackButton.addEventListener(`click`, () => {
        console.log(`attack button test`)
        computerHP -= damage()
        computerHPElement.innerHTML = computerHP
        computerAction(computerHP, computerHPElement, playerHP, playerHPElement)
    })
    repairButton.addEventListener(`click`, () => {
        console.log(`repair button test`)
        playerHP += repairNumber()
        if (playerHP > maxHP) {
            playerHP = maxHP
        }
        playerHPElement.innerHTML = playerHP
    })

    // functions in game UI =====================================================================================================
}
startGame = () => {
    //todo// I want this to delet the menu and add the health indicators plaus the attack buttons
    const topSpacerElement = document.createElement(`div`)
    bodyElement.insertBefore(topSpacerElement, gameContainerElement)
    console.log(`testbeginning`)
    mainMenuAreaElement.removeChild(mainMenuContainerElement)
    createGameUI(topSpacerElement)
}
computerAction = (computerHP, computerHPElement, maxHP, playerHP, playerHPElement) => {////// what do I want out of computer function: random choice of whether the computer should repair or attack. If computer HP is max, then Dont repair. 

    let computerChoice = (Math.floor(Math.random) * 3)
    console.log(computerChoice);
    
    // if (computerHP === maxHP) {
    //     computerAttack(playerHP, playerHPElement)
    // }
    // else if () {

    // }
    
}
computerAttack = (playerHP, playerHPElement) => {
    console.log(`computer is attacking`);
    playerHP -= damage()
    playerHPElement.innerHTML = playerHP
}
computerRepair = (computerHP, computerHPElement) => {
    console.log(`computer is repairing`);
    computerHP += repairNumber()
    computerHPElement.innerHTML = computerHP

}

damage = () => {
    let damagenum = (Math.floor(Math.random() * 8) * 3);
    console.log(damagenum);
    return damagenum;
}

repairNumber = () => {
    let num = (Math.floor(Math.random() * 8) * 3);
    console.log(num);
    return num;
}

//event handlera==================================================================================================================

quitButtonElement.addEventListener(`click`, () => {
    quitGame()
})
creditsButtonElement.addEventListener(`click`, () => {
    credits()
})
startGameButtonElement.addEventListener(`click`, () => {
    startGame()
})

//Dead code==================================================================================
// quitGame() tested
// computerAttack(playerHP, playerHPElement)