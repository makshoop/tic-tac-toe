const ticTacToeField = {
    valueField: [0, 0, 0, 0, 0, 0, 0, 0, 0],

    beautifulLogField() {
        const getXorO = (a) => ['_', 'о', 'x'][a]

        const logRow = (a, b, c) => {
            console.log('|', getXorO(this.valueField[a]), getXorO(this.valueField[b]), getXorO(this.valueField[c]), '|')
        }

        const logLine = () => console.log('---------')

        logLine()
        logRow(0, 1, 2)
        logRow(3, 4, 5)
        logRow(6, 7, 8)
        logLine()
    },

    setValue(index,value) { 
        this.valueField[index] = value
        console.log('Записываю значение ', value, 'в ячейку поля с индекосм ', index)
        console.log('Текущее значение игрового поля')
        this.beautifulLogField()
    },

    resetField() {
        this.valueField = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        console.log('Возвращения поля в исходное состояние')
        this.beautifulLogField()
    },

    checkWin(a) {
        if ( this.valueField[0] === a &&  this.valueField[1] === a &&  this.valueField[2] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[0] === a &&  this.valueField[1] === a &&  this.valueField[2] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[3] === a &&  this.valueField[4] === a &&  this.valueField[5] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[6] === a &&  this.valueField[7] === a &&  this.valueField[8] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[0] === a &&  this.valueField[3] === a &&  this.valueField[6] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[1] === a &&  this.valueField[4] === a &&  this.valueField[7] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[2] === a &&  this.valueField[5] === a &&  this.valueField[8] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[0] === a &&  this.valueField[4] === a &&  this.valueField[8] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
    
        if ( this.valueField[2] === a &&  this.valueField[4] === a &&  this.valueField[6] === a){
            console.log('Победная комбинация найдена!!!')
            return true
        } 
        console.log('Победной комбинации не найдено :(')
        return false
    } 
}   

const player = {
    current: 1,

    toggle() {
        if (this.current === 1){
            this.current = 2
        }
        
        else {
            this.current = 1
        }
        
        console.log('Теперь ходит игрок ', this.current)
    },

    reset() {
        this.current = 1
        console.log('Ходит игрок ', this.current)
    }
}

// console.log('Ходит игрок ', player.current)
// ticTacToeField.setValue(3, player.current)
// ticTacToeField.checkWin(player.current)
// player.toggle()

// console.log('Ходит игрок ', player.current)
// ticTacToeField.setValue(5, player.current)
// ticTacToeField.checkWin(player.current)
// player.toggle()


// console.log('Ходит игрок ', player.current)
// ticTacToeField.setValue(0, player.current)
// ticTacToeField.checkWin(player.current)
// player.toggle()


// console.log('Ходит игрок ', player.current)
// ticTacToeField.setValue(7, player.current)
// ticTacToeField.checkWin(player.current)
// player.toggle()


// console.log('Ходит игрок ', player.current)
// ticTacToeField.setValue(6, player.current)
// ticTacToeField.checkWin(player.current)
// player.toggle()