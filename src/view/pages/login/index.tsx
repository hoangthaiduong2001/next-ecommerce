'use client'

import { Controller, useForm } from 'react-hook-form'

import { Box, Button, Checkbox, FormControlLabel, IconButton, Link, Stack, Typography } from '@mui/material'
import { NextPage } from 'next'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import CommonTextField from 'src/components/text-filed'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { IoLogoGoogle } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { LoginSchemaType, loginSchema } from './schema'
import { initialValueLogin } from './const'

type TProps = {}

const LoginPage: NextPage<TProps> = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const { control, handleSubmit } = useForm({
    defaultValues: initialValueLogin,
    resolver: yupResolver<LoginSchemaType>(loginSchema)
  })
  const onSubmit = (data: LoginSchemaType) => {
    console.log('data', data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Typography variant='h1'>Sign in</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off' style={{ width: '30%' }}>
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
        </Stack>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
        <Stack justifyContent='space-between' alignItems='center'>
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </Stack>
        <Stack justifyContent='center' alignItems='center' direction='column' gap={2}>
          <Link href='#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
          <Typography>Or</Typography>
          <Stack gap={4}>
            <FaFacebook color='blue' size={30} onClick={() => console.log('login with facebook')} />
            <IoLogoGoogle color='red' size={30} onClick={() => console.log('login with google')} />
          </Stack>
        </Stack>
      </form>
    </Box>
  )
}

export default LoginPage
