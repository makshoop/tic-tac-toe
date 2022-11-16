playerIndicatorWiew.insertPlayer1()

for(let n = 0; n <= 8; n++) {
    
    const buttonClick = (a) => {
        if(player.current === 1){
            playerIndicatorWiew.insertPlayer2()
            ticTacToeFieldView.insertSign1(n)
        } else { 
            playerIndicatorWiew.insertPlayer1()
            ticTacToeFieldView.insertSign2(n)
        } 
        player.toggle()
        ticTacToeField.setValue(n, player.current)

        if (ticTacToeField.checkWin(player.current)) {
            player.reset()
            ticTacToeField.resetField()
            playerIndicatorWiew.insertPlayer1()
            alert('Игра окончена')
            ticTacToeFieldView.resetAll()
        }
    } 

    const cells = document.querySelectorAll('.grid-element')
    cells[n].addEventListener('click', buttonClick) 
}

