import { CalculateInterface } from "@/interface";

export function viewNumber(data: string[]) {
  let result = ''
  if (data.length === 0) {
    return data[0]
  }
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (!isNaN(Number(element))) {
      result += element;
    } else if (element === '.' && !result.includes('.')) {
      result += element;
    }
  }
  return result;
}

export function viewOperation(data: string) {
  if (data === '3') {
    return '/'
  } else if (data === '7') {
    return 'X'
  } else if (data === '11') {
    return '-'
  } else if (data === '15') {
    return '+'
  } else
    return ''
}

export function functionAddNumber2(value: string[], newValue: string) {
  if (newValue === '.' && value.includes('.'))
    return value
  if (value.length === 1 && value[0] === '0' && newValue !== '.') {
    return [newValue]
  }
  else if (value.length < 10) {
    return [...value, newValue]
  } else
    return value
}

export function functionDeleteNumber2(value: string[]) {
  if (value.length === 1) {
    return ['0']
  }
  else return value.slice(0, -1);
}

export function functionCalculateNumber({ number1, number2, operation, isPositive1, isPositive2 }: CalculateInterface) {
  let num1 = parseFloat(number1.join(''));
  let num2 = parseFloat(number2.join(''));

  if (!isPositive1) {
    num1 = -num1
  }
  if (!isPositive2) {
    num2 = -num2
  }
  let result: number;

  switch (operation) {
    case '15':
      result = num1 + num2;
      break;
    case '11':
      result = num1 - num2;
      break;
    case '7':
      result = Math.round(num1 * num2 * 100) / 100;
      break;
    case '3':
      if (num2 === 0){
        result = num2
        throw new Error("División por cero no está permitida");
      }
      result = Math.round(num1 / num2 * 100) / 100;
      break;
    default:
      throw new Error(`Operación '${operation}' no reconocida`);
  }

  let resultStr = result.toString();
  const parts = resultStr.split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1] ? parts[1] : "";

  if (decimalPart.length > 0) {
    return [integerPart, '.', decimalPart].filter(Boolean);
  }
  return [integerPart]
}

export function viewIsPositive(data: boolean) {
  if (data) {
    return ''
  } else
    return '-'
}

export const funtionKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  const key = event.key || '';
  switch (key) {
    case 'Delete':
      return '0'
    case 'Escape':
      return '1'
    case 'Backspace':
      return '2'
    case '/':
      return '3'
    case '7':
      return '4'
    case '8':
      return '5'
    case '9':
      return '6'
    case '*':
      return '7'
    case '4':
      return '8'
    case '5':
      return '9'
    case '6':
      return '10'
    case '-':
      return '11'
    case '1':
      return '12'
    case '2':
      return '13'
    case '3':
      return '14'
    case '+':
      return '15'
    case '':
      return '16'
    case '0':
      return '17'
    case '.':
      return '18'
    case ',':
      return '18'
    case '=':
      return '19'
    case 'Enter':
      return '19'
    default:
      return ''
  }
};
