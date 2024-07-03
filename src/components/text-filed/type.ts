import { TextFieldProps } from '@mui/material'
import { TSize } from 'src/types/layouts'

type TInputType = 'password' | 'text'
type TVariant = 'outlined' | 'standard'

export interface CTextFieldProps {
  errorMessage?: string
  isError?: boolean
  size?: TSize
  hasDefaultErrorSpace?: boolean
  inputType?: TInputType
  isDisabled?: boolean
  width?: string
  variant?: TVariant
  label?: string
  defaultValue?: string
  placeholder?: string
  maxLength?: number
  value: string
  onChange?: (value: string) => void
}
