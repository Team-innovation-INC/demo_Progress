
// ---- props types 

export type DependencyP = {
  title : string;
  description : string;
  Icon : React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
    titleId?: string | undefined;
  }>
}

export type ListValuesP = {
  key: number
  option:  { value: string; label: string},
  handleRemoveLabel: () => void,
  handleAddLabel : (_value: string) => void,
  handleUpdateLabel: (_value: string, _newLabel: string) => void
}
export type blockDescriptionP = {title:string, discription: string}
export type useStateP         = { func?: () => void }
export type openStatusP       = { open: boolean, setOpen: (value: boolean) => void }
export type inputChangesP     = { value:string, func: (value:string) => void }
