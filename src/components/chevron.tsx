import { ComponentPropsWithoutRef } from "react"
import { chevron } from "./chevron.css"

type Props = {
  direction: "up" | "down"
} & ComponentPropsWithoutRef<"div">
export function Chevron({
  direction,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <span {...props} className={`${chevron} ${className}`}>
      {chevronIcons[direction]}
    </span>
  )
}

const chevronIcons = {
  up: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 4">
      <path fill="currentColor" fillRule="evenodd" d="m0 4 4-4 4 4z" />
    </svg>
  ),
  down: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 4">
      <path fill="currentColor" fillRule="evenodd" d="m0 0 4 4 4-4z" />
    </svg>
  ),
}
