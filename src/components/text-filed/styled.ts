import { styled, TextField, TextFieldProps } from '@mui/material'

export const TextFieldWrapper = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '&::placeholder, & ::placeholder': {
    fontSize: '13px',
    fontWeight: '400'
  },

  '& .MuiInputLabel-root': {
    transform: 'none',
    position: 'relative',
    width: '100%',
    paddingBottom: theme.spacing(2),
    fontSize: '16px'
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: theme.spacing(1)
  },

  '& .MuiOutlinedInput-notchedOutline legend': {
    display: 'none'
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
