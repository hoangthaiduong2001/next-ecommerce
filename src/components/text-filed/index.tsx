import React from 'react'

import { Box, InputAdornment, Typography } from '@mui/material'

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
  required = false,
  maxLength,
  value,
  onChange,
  endAdornmentChildren,
  isError,
  ...rest
}: CTextFieldProps) => {
  return (
    <Box width={width}>
      <TextFieldWrapper
        {...rest}
        InputLabelProps={{ shrink: false }}
        size={size}
        label={label}
        fullWidth
        required={required}
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
        InputProps={{
          endAdornment: endAdornmentChildren ? (
            <InputAdornment position='end' sx={{ color: 'inherit' }}>
              {endAdornmentChildren}
            </InputAdornment>
          ) : undefined
        }}
        onChange={e => {
          const newVal = e.target.value
          onChange?.(newVal)
        }}
      />

      <Typography
        variant='inherit'
        color={({ palette }) => (errorMessage ? palette.error.main : palette.text.secondary)}
        maxWidth='100%'
      >
        {errorMessage}
      </Typography>
    </Box>
  )
}

export default CommonTextField
