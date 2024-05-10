import { HTMLProps } from "react";

export function cls(
  ...classNames: (
    | HTMLProps<HTMLElement>["className"]
    | string
    | null
    | undefined
    | false
  )[]
) {
  const validClasses = classNames.filter(className => !!className) as string[];
  return validClasses.join(" ");
}
