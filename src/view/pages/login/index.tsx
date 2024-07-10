'use client'

import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Checkbox, FormControlLabel, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoGoogle } from 'react-icons/io'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import CommonTextField from 'src/components/text-filed'
import { initialValueLogin } from './const'
import { LoginSchemaType, loginSchema } from './schema'
import ImageLoginDark from '/public/images/login-dark.png'
import ImageLoginLight from '/public/images/login-light.png'

type TProps = {}

const LoginPage: NextPage<TProps> = () => {
  const theme = useTheme()

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const { control, handleSubmit } = useForm({
    defaultValues: initialValueLogin,
    resolver: yupResolver<LoginSchemaType>(loginSchema)
  })
  const onSubmit = (data: LoginSchemaType) => {
    console.log('data', data)
  }

  return (
    <Stack alignItems='center' justifyContent='center' gap={50}>
      <Image
        src={theme?.palette?.mode === 'light' ? ImageLoginLight : ImageLoginDark}
        style={{ width: '30vw', height: 'auto' }}
        alt='Picture of login page'
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
        <Typography variant='h1'>Sign in</Typography>
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
                  placeholder='Input email'
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
                  placeholder='Input password'
                />
              )}
            />
          </Stack>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Stack justifyContent='space-between' alignItems='center'>
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            <Typography variant='body2'>
              <Link href='#'>Forgot password?</Link>
            </Typography>
          </Stack>
          <Stack justifyContent='center' alignItems='center' direction='column' gap={2}>
            <Typography variant='body2'>
              Don't have an account?
              <Link href='/register'>{' Sign Up'}</Link>
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

export default LoginPage
