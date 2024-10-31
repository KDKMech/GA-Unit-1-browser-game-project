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
    attackButton.classList = (`button`)
    repairButton.classList = (`button`)
    topSpacerElement.classList = (`gameMenuContainer`)

    topSpacerElement.appendChild(playerHPElement)
    topSpacerElement.appendChild(computerHPElement)
    topSpacerElement.appendChild(attackButton)
    topSpacerElement.appendChild(repairButton)
    
    console.dir(topSpacerElement)
    
    // Event listeners for game state========================================================
    attackButton.addEventListener(`click`, () => {
        console.log(`attack button test`)
        computerHP -= damage();
        if (computerHP < 0) computerHP = 0
        computerHPElement.innerHTML = computerHP;
        computerAction()
    })
    repairButton.addEventListener(`click`, () => {
        console.log(`repair button test`)
        playerHP += repairNumber()
        if (playerHP > maxHP) {
            playerHP = maxHP
        }
        playerHPElement.innerHTML = playerHP
        computerAction()
    })
    
    // functions in game UI =====================================================================================================
    computerAction = () => {////// what do I want out of computer function: random choice of whether the computer should repair or attack. If computer HP is max, then Dont repair. 
    
        let computerChoice = (Math.floor(Math.random() * 2))
        console.log(computerChoice);
        if (playerHP === maxHP) {
            computerAttack(playerHP, playerHPElement)
        }
        else if (computerChoice === 1) {
            computerAttack(playerHP, playerHPElement)
        }
        else if (computerChoice === 0) {
            computerRepair(computerHP, computerHPElement)
        }
    }
    computerAttack = () => {
        console.log(`computer is attacking`);
        playerHP -= damage()
        console.log(`player HP is ${playerHP}`);
        
        playerHPElement.innerHTML = playerHP
    }
    computerRepair = () => {
        console.log(`computer is repairing`);
        computerHP += repairNumber()
        if (computerHP >= maxHP) computerHP = maxHP
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
}
startGame = () => {
    //todo// I want this to delet the menu and add the health indicators plaus the attack buttons
    const topSpacerElement = document.createElement(`div`)
    bodyElement.insertBefore(topSpacerElement, gameContainerElement)
    console.log(`testbeginning`)
    mainMenuAreaElement.removeChild(mainMenuContainerElement)
    createGameUI(topSpacerElement)
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
// if (computerHP === maxHP) {
    //     computerAttack(playerHP, playerHPElement)
    // }
    // else if () {
        
    // }
    // computerAttack(playerHP, playerHPElement)