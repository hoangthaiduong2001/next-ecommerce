import { styled, TextField, TextFieldProps } from '@mui/material'

export const TextFieldWrapper = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.action}`
  },

  '& > :not(.Mui-disabled)': {
    borderRadius: theme.spacing(1),
    background: theme.palette.background,

    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary
      }
    },

    '&.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.error
      }
    }
  },

  '.Mui-disabled': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.secondary} !important`
    }
  }
}))
