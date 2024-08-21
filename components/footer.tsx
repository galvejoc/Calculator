import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 flex w-full justify-center text-sm mb-2 items-center">
      <Link href={'https://github.com/galvejoc/Calculator'}>
        <div className="flex items-center space-x-2">
          <span className="mx-2 grid">
            Calculator
          </span>
          <span className="mx-2">
            <strong className="mr-1">
              Creator:
            </strong>
            José Luis Galvez Denis
          </span>
          <RiGithubFill size={24} />
        </div>
      </Link>
    </footer >
  )
}
