import { CalculateInterface, StoreInterface } from "@/interface";
import { functionAddNumber2, functionCalculateNumber, functionDeleteNumber2 } from "@/functions";
import { create } from "zustand";

export const store = create<StoreInterface>((set) => ({
  number1: [''],
  number2: ['0'],
  operation: '',
  isPositive1: true,
  isPositive2: true,
  addNumber1: (value: string[]) => set(() => ({
    number1: value
  })),
  addNumber2: (value: string[], newValue: string) => set(() => ({
    number2: functionAddNumber2(value, newValue)
  })),
  addOperation: (value: string) => set(() => ({
    operation: value
  })),
  editIsPositive1: (value: boolean) => set(() => ({
    isPositive1: value
  })),
  editIsPositive2: (value: boolean) => set(() => ({
    isPositive2: value
  })),
  deleteNumber2: (value: string[]) => set(() => ({
    number2: functionDeleteNumber2(value)
  })),
  clearNumber1: () => set(() => ({
    number1: ['']
  })),
  clearNumber2: () => set(() => ({
    number2: ['0']
  })),
  clearOperation: () => set(() => ({
    operation: ''
  })),
  calculateNumber: ({ number1, number2, operation, isPositive1, isPositive2 }: CalculateInterface) => set(() => ({
    number2: functionCalculateNumber({number1, number2, operation, isPositive1, isPositive2})
  }))
}))