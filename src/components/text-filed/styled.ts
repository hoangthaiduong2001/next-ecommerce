import { styled, TextField, TextFieldProps } from '@mui/material'

export const TextFieldWrapper = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInputLabel-root': {
    transform: 'none',
    position: 'relative'
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: theme.spacing(1)
  },

  '& > :not(.Mui-disabled)': {
    background: theme.palette.secondary,

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
