'use client'
import { store } from "@/store/store";
import { Button } from "./button";
import { buttonText } from "@/contanst";
import { useEffect } from "react";
import { buttonClick, funtionKeydown, viewIsPositive, viewNumber, viewOperation } from "@/functions";

export function Body() {
  const storeData = store((state) => state);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const result = funtionKeydown(event);
      buttonClick(storeData, result);
    };
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [storeData])

  return (
    <div>
      <div>
        <input
          type="text"
          disabled className="w-full h-10 bg-slate-400 text-end pr-4 text-slate-950 rounded-t-xl text-2xl"
          aria-labelledby="number 1"
          value={viewIsPositive(storeData.isPositive1) + viewNumber(storeData.number1) + ' ' + viewOperation(storeData.operation)} />
      </div>
      <div>
        <input
          type="text"
          disabled className="w-full h-10 bg-slate-400 text-end pr-4 text-slate-950 text-2xl"
          aria-labelledby="number 2"
          value={viewIsPositive(storeData.isPositive2) + viewNumber(storeData.number2)} />
      </div>
      <div className="flex">
        <Button id={buttonText[0]} />
        <Button id={buttonText[1]} />
        <Button id={buttonText[2]} />
        <Button id={buttonText[3]} />
      </div>
      <div className="flex">
        <Button id={buttonText[4]} />
        <Button id={buttonText[5]} />
        <Button id={buttonText[6]} />
        <Button id={buttonText[7]} />
      </div>
      <div className="flex">
        <Button id={buttonText[8]} />
        <Button id={buttonText[9]} />
        <Button id={buttonText[10]} />
        <Button id={buttonText[11]} />
      </div>
      <div className="flex">
        <Button id={buttonText[12]} />
        <Button id={buttonText[13]} />
        <Button id={buttonText[14]} />
        <Button id={buttonText[15]} />
      </div>
      <div className="flex">
        <Button id={buttonText[16]} styleTailwind="rounded-bl-lg" />
        <Button id={buttonText[17]} />
        <Button id={buttonText[18]} />
        <Button id={buttonText[19]} styleTailwind="rounded-br-lg" />
      </div>
    </div>
  )
}
