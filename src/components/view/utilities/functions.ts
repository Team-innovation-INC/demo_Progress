// convert class name type ( from array to single str)
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}