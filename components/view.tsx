'use client'
import { viewIsPositive, viewNumber, viewOperation } from "@/functions";
import { store } from "@/store";
export function View() {
  const storeData = store((state) => state);
  return (
    <>
      <div>
        <input
          type="text"
          disabled className="w-full h-10 bg-slate-400 text-end pr-4 text-slate-950 rounded-t-xl text-2xl"
          // value={viewIsPositive(storeData.isPositive1) + viewNumber(storeData.number1) + ' ' + viewOperation(storeData.operation)}
        />
      </div>
      <div>
        <input
          type="text"
          disabled className="w-full h-10 bg-slate-400 text-end pr-4 text-slate-950 text-2xl"
          // value={viewIsPositive(storeData.isPositive2) + viewNumber(storeData.number2)}
        />
      </div>
    </>
  )
}
