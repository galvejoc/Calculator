import { PiPlusMinusBold } from "react-icons/pi";
import { RiAddFill, RiAsterisk, RiDeleteBack2Line, RiDivideFill, RiEqualFill, RiEraserLine, RiNumber0, RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9, RiSubtractFill } from "react-icons/ri";
import { SiEraser } from "react-icons/si";
import { TbPointFilled } from "react-icons/tb";

export function returnIcons(id: string) {
  let IconComponent;
  switch (id) {
    case '0':
      IconComponent = <SiEraser size={28}/>;
      break;
    case '1':
      IconComponent = <RiEraserLine size={28}/>
      break;
    case '2':
      IconComponent = <RiDeleteBack2Line size={28}/>;
      break;
    case '3':
      IconComponent = <RiDivideFill size={28}/>;
      break;
    case '4':
      IconComponent = <RiNumber7 size={28}/>;
      break;
    case '5':
      IconComponent = <RiNumber8 size={28}/>;
      break;
    case '6':
      IconComponent = <RiNumber9 size={28}/>;
      break;
    case '7':
      IconComponent = <RiAsterisk size={28}/>;
      break;
    case '8':
      IconComponent = <RiNumber4 size={28}/>;
      break;
    case '9':
      IconComponent = <RiNumber5 size={28}/>;
      break;
    case '10':
      IconComponent = <RiNumber6 size={28}/>;
      break;
    case '11':
      IconComponent = <RiSubtractFill size={28}/>;
      break;
    case '12':
      IconComponent = <RiNumber1 size={28}/>;
      break;
    case '13':
      IconComponent = <RiNumber2 size={28}/>;
      break;
    case '14':
      IconComponent = <RiNumber3 size={28}/>;
      break;
    case '15':
      IconComponent = <RiAddFill size={28}/>;
      break;
    case '16':
      IconComponent = <PiPlusMinusBold size={28}/>;
      break;
    case '17':
      IconComponent = <RiNumber0 size={28}/>;
      break;
    case '18':
      IconComponent = <TbPointFilled size={28}/>;
      break;
    case '19':
      IconComponent = <RiEqualFill size={28}/>;
      break;
    default:
      IconComponent = null;
  }
  return IconComponent
}