'use client'

import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoGoogle } from 'react-icons/io'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import CommonTextField from 'src/components/text-filed'
import { initialValueRegister } from './const'
import { registerSchema, RegisterSchemaType } from './schema'
import ImageRegisterDark from '/public/images/register-dark.png'
import ImageRegisterLight from '/public/images/register-light.png'

type TProps = {}

const RegisterPage: NextPage<TProps> = () => {
  const theme = useTheme()

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState<boolean>(false)

  const { control, handleSubmit } = useForm({
    defaultValues: initialValueRegister,
    resolver: yupResolver<RegisterSchemaType>(registerSchema)
  })
  const onSubmit = (data: RegisterSchemaType) => {
    console.log('data', data)
  }

  return (
    <Stack alignItems='center' justifyContent='center' gap={50}>
      <Image
        src={theme?.palette?.mode === 'light' ? ImageRegisterLight : ImageRegisterDark}
        style={{ width: '30vw', height: 'auto' }}
        alt='Picture of register page'
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '30%'
        }}
      >
        <Typography variant='h1'>Register</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off' style={{ width: '100%' }}>
          <Stack direction='column' gap={4}>
            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <CommonTextField
                  required
                  value={value}
                  onChange={onChange}
                  label='Email'
                  maxLength={25}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <CommonTextField
                  required
                  value={value}
                  onChange={onChange}
                  label='Password'
                  inputType={isShowPassword ? 'text' : 'password'}
                  endAdornmentChildren={
                    <IconButton size='small' onClick={() => setIsShowPassword(prev => !prev)}>
                      {isShowPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                    </IconButton>
                  }
                  maxLength={25}
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name='confirmPassword'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <CommonTextField
                  required
                  value={value}
                  onChange={onChange}
                  label='Confirm password'
                  inputType={isShowConfirmPassword ? 'text' : 'password'}
                  endAdornmentChildren={
                    <IconButton size='small' onClick={() => setIsShowConfirmPassword(prev => !prev)}>
                      {isShowConfirmPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                    </IconButton>
                  }
                  maxLength={25}
                  errorMessage={error?.message}
                />
              )}
            />
          </Stack>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Stack justifyContent='center' alignItems='center' direction='column' gap={2}>
            <Typography variant='body2'>
              Do you have already account?
              <Link href='/login'>{' Login'}</Link>
            </Typography>
            <Typography>Or</Typography>
            <Stack gap={4}>
              <FaFacebook color='blue' size={25} onClick={() => console.log('login with facebook')} />
              <IoLogoGoogle color='red' size={25} onClick={() => console.log('login with google')} />
            </Stack>
          </Stack>
        </form>
      </Box>
    </Stack>
  )
}

export default RegisterPage