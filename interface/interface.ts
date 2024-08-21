export interface ButtonInterface {
  id: string;
  styleTailwind?: string;
}

export interface StoreInterface {
  number1: string[],
  number2: string[],
  operation: string,
  isPositive1: boolean
  isPositive2: boolean
  addNumber1: (value: string[]) => void,
  addNumber2: (value: string[], newValue: string) => void,
  addOperation: (value: string) => void,
  editIsPositive1: (value: boolean) => void,
  editIsPositive2: (value: boolean) => void,
  deleteNumber2: (value: string[]) => void,
  clearNumber1: () => void,
  clearNumber2: () => void,
  clearOperation: () => void,
  calculateNumber: ({ number1, number2, operation, isPositive1, isPositive2 }: CalculateInterface) => void,
}

export interface CalculateInterface {
  number1: string[], number2: string[], operation: string, isPositive1: boolean, isPositive2: boolean
}

export type OperationType = ['3', '7', '11', '15', '']
