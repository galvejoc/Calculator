import { StoreInterface } from "@/interface";

export function buttonClick({ 
  number1, number2, operation, isPositive1, isPositive2,
  addNumber1, addNumber2, addOperation, editIsPositive1, editIsPositive2, deleteNumber2, clearNumber1, clearNumber2, clearOperation, calculateNumber }: StoreInterface, buttonSelect: string) {
  //operaciones de clear y delete
  if (buttonSelect === '0') {
    editIsPositive2(true)
    clearNumber2()
  }
  if (buttonSelect === '1') {
    editIsPositive1(true)
    editIsPositive2(true)
    clearNumber1()
    clearOperation()
    clearNumber2()
  }
  if (buttonSelect === '2') {
    deleteNumber2(number2)
  }
  //operaciones de / X - +
  if (buttonSelect === '3' || buttonSelect === '7' || buttonSelect === '11' || buttonSelect === '15') {
    if (operation === '') {
      if(number2[number2.length - 1] ==='.' ){
        addOperation(buttonSelect)
        addNumber1(number2.slice(0, -1))
        editIsPositive1(isPositive2)
        editIsPositive2(true)
        clearNumber2()
        return null
      }
      addOperation(buttonSelect)
      addNumber1(number2)
      editIsPositive1(isPositive2)
      editIsPositive2(true)
      clearNumber2()
      return null
    }
    return null
  }
  //numero
  if (buttonSelect === '4')
    addNumber2(number2, '7')
  if (buttonSelect === '5')
    addNumber2(number2, '8')
  if (buttonSelect === '6')
    addNumber2(number2, '9')
  if (buttonSelect === '8')
    addNumber2(number2, '4')
  if (buttonSelect === '9')
    addNumber2(number2, '5')
  if (buttonSelect === '10')
    addNumber2(number2, '6')
  if (buttonSelect === '12')
    addNumber2(number2, '1')
  if (buttonSelect === '13')
    addNumber2(number2, '2')
  if (buttonSelect === '14')
    addNumber2(number2, '3')
  if (buttonSelect === '17')
    addNumber2(number2, '0')
  //point
  if (buttonSelect ==='18') {
    addNumber2(number2, '.')
  }
  //negative-positive
  if (buttonSelect ==='16') {
    editIsPositive2(!isPositive2)
  }
  //calculate
  if (buttonSelect ==='19') {
    if (operation !== '') {
      calculateNumber({number1, number2, operation, isPositive1, isPositive2})
      clearNumber1()
      clearOperation()
      editIsPositive1(true)
      editIsPositive2(true)
    }
  }
}

