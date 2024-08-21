'use client'
import { buttonClick, funtionKeydown, returnIcons } from "@/functions";
import { ButtonInterface } from "@/interface";
import { store } from "@/store";

export function Button({ id, styleTailwind }: ButtonInterface) {
  const storeData = store((state) => state);
  return (
    <button
      id={id}
      className={`bg-blue-400 hover:bg-blue-500 w-20 h-20 border ${styleTailwind} items-center flex justify-center`}
      onClick={() => {
      buttonClick(storeData, id)}}
      aria-label={id}
    >
      {returnIcons(id)}
    </button>
  )
}
