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
let backgroundMusic = document.getElementById(`backgroundMenuMusic`);
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
    


    // fix the credits button. all H1 should vanish after clicking starg game
    
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
    const playerSide = document.createElement(`div`)
    const computerSide = document.createElement(`div`)

    topSpacerElement.appendChild(playerSide)
    topSpacerElement.appendChild(computerSide)

    playerSide.appendChild(playerHPElement)
    playerSide.appendChild(attackButton)
    playerSide.appendChild(repairButton)
    computerSide.appendChild(computerHPElement)

    
    attackButton.innerHTML = `Attack!`
    repairButton.innerHTML = `Repair!`
    playerHPElement.innerHTML = `Player ${playerHP}`
    computerHPElement.innerHTML = `Computer ${computerHP}`
    attackButton.className = (`button`)
    repairButton.className = (`button`)
    topSpacerElement.className = (`gameMenuContainer`)
    computerSide.className = (`computerSide`)
    playerSide.className = (`playerSide`)



    console.dir(topSpacerElement)
    
    // Event listeners for game state========================================================
    const handleAttack = () => {
        console.log('attack button test');
        computerHP -= damage();
        if (computerHP < 0) {
            computerHP = 0;
        }
        computerHPElement.innerHTML = `Computer ${computerHP}`;
        endGame();
        
        attackButton.disabled = true;
        repairButton.disabled = true;


        if (computerHP > 0) { // Only run computerAction if computer isn't defeated
            setTimeout(() => {
                computerAction();
                endGame();

                attackButton.disabled = false;
                repairButton.disabled = false;
            }, 2000); // 3-second delay
        }
    };
    
    const handleRepair = () => {
        console.log('repair button test');
        playerHP += repairNumber();
        if (playerHP > maxHP) {
            playerHP = maxHP;
        }
        playerHPElement.innerHTML = `Player ${playerHP}`;
        endGame();
        
        attackButton.disabled = true;
        repairButton.disabled = true;
        if (playerHP > 0) { // Only run computerAction if player isn't defeated
            setTimeout(() => {
                computerAction();
                endGame();
                
                attackButton.disabled = false;
                repairButton.disabled = false;
            }, 2000); // 3-second delay
        }
    };
    
    
    attackButton.addEventListener(`click`, handleAttack);
    
    repairButton.addEventListener(`click`, handleRepair);
    
    // functions in game UI =====================================================================================================
    
    
    
    
    
    
    computerAction = () => {////// what do I want out of computer function: random choice of whether the computer should repair or attack. If computer HP is max, then Dont repair. 
        
        let computerChoice = (Math.floor(Math.random() * 2))
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
        let damagenum = (Math.floor((Math.random() * 8) + 2) * 3);
        return damagenum;
    }
    
    repairNumber = () => {
        let num = (Math.floor((Math.random() * 5) + 2) * 3);
        return num;
    }
    
    endGame = () => {
        const endGameResultElement = document.createElement(`h1`)
        // todo
        if (playerHP <= 0) {
            //todo this should add a menu if the player wants to play again, then it brings them to the main menu, if they dont then close the sreen.
            console.log(`you lose!`)
            endGameResultElement.innerHTML = `You Lose!!! <br> Play again? `
            bodyElement.insertBefore(endGameResultElement, topSpacerElement)
            
            endGameMenu()
        }
        else if (computerHP <= 0) {
            //todo
            console.log(`you win`);
            endGameResultElement.innerHTML = `You Win!!! <br> Play again? `
            bodyElement.insertBefore(endGameResultElement, topSpacerElement)
            endGameMenu()
        }
        
    }
    endGameMenu = () => {
        attackButton.innerHTML = `play again?`
        repairButton.innerHTML = `quit game?`
        attackButton.disabled = false;
        repairButton.disabled = false;
        
        attackButton.removeEventListener(`click`, handleAttack)
        repairButton.removeEventListener(`click`, handleRepair)
        attackButton.addEventListener(`click`, () => {
            location.reload()
        })
        repairButton.addEventListener(`click`, () => {
            quitGame()
        })
        
    }
}

startGame = () => {
    //todo// I want this to delet the menu and add the health indicators plaus the attack buttons
    const topSpacerElement = document.createElement(`div`)
    bodyElement.insertBefore(topSpacerElement, gameContainerElement)
    mainMenuAreaElement.removeChild(mainMenuContainerElement)
    backgroundMusic = document.getElementById(`gameBattleMusic`)
    backgroundMusic.volume = 0.5;
    backgroundMusic.play()
    createGameUI(topSpacerElement)
    window.removeEventListener(`click`, backgroundMusic)
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
window.addEventListener(`click`, () => { ////this adds the background music to the main menu
    
    // backgroundMusic.volume = 0.2;
    backgroundMusic.play(); 
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
    // console.log(`repair button test`)
    // console.log(`testbeginning`)
    // console.log(num);
    // console.log(damagenum);
    // console.log(computerChoice);
    // topSpacerElement.appendChild(playerHPElement)
    // topSpacerElement.appendChild(computerHPElement)
    // topSpacerElement.appendChild(attackButton)
    // topSpacerElement.appendChild(repairButton)
    // console.log(`attack button test`)
    // topSpacerElement.className = `gameMenu`
    
    // const handleAttack = () => {
    //     computerHP -= damage();
    //     if (computerHP < 0) {
    //         computerHP = 0
    //     }
    //         computerHPElement.innerHTML = computerHP;
    //         endGame()
    //         computerAction()
    //         endGame()
    // }
    // const handleRepair =  () => {
    //     playerHP += repairNumber()
    //     if (playerHP > maxHP) {
    //             playerHP = maxHP
    //         }
    //         playerHPElement.innerHTML = playerHP
    //         endGame()
    //         computerAction()
    //         endGame()
    // }