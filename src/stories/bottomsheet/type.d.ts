import { type ReactNode } from "react"

interface IBottomSheet {
    children  : ReactNode
    isOpen     : boolean
    handleclose : () => void;
}