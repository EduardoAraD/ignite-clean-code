import { ReactNode, LabelHTMLAttributes } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps){
  return (
    <div>
      {children}
    </div>
  )
}
interface FormFieldProps {
  children: ReactNode
}

export function FormField({ children }: RootProps){
  return (
    <input type="text" />
  )
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export function Label(props: LabelProps) {
  return (
    <label {...props} />
  )
}

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return(
    <span>{message}</span>
  )
}

interface IconProps {
  children: ReactNode
}
export function Icon({ children }: IconProps) {
  return (
    <span>
      {children}
    </span>
  )
}
