import React from 'react'

import { Box } from '@mui/material'

import { TextFieldWrapper } from './styled'
import { CTextFieldProps } from './type'

const CommonTextField = ({
  errorMessage,
  label,
  size = 'small',
  variant = 'outlined',
  defaultValue,
  isDisabled = false,
  placeholder,
  inputType = 'text',
  width = '100%',
  maxLength,
  value,
  onChange,
  isError,
  ...rest
}: CTextFieldProps) => {
  return (
    <Box width={width}>
      <TextFieldWrapper
        {...rest}
        size={size}
        label={label}
        fullWidth
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoSave='false'
        autoComplete={inputType === 'password' ? 'off' : 'on'}
        type={inputType}
        variant={variant}
        disabled={isDisabled}
        error={isError || !!errorMessage}
        inputProps={{
          maxLength: maxLength
        }}
        onChange={e => {
          const newVal = e.target.value
          onChange?.(newVal)
        }}
      />
    </Box>
  )
}

export default CommonTextField
