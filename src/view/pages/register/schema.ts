import { EMAIL_REG, PASSWORD_REG } from 'src/configs/regex'
import * as yup from 'yup'

export const registerSchema = yup
  .object()
  .shape({
    email: yup.string().required('This is required').matches(EMAIL_REG, 'The field is must be a valid email address'),
    password: yup
      .string()
      .required('This is required')
      .matches(PASSWORD_REG, 'The password must be characters, special characters, number'),
    confirmPassword: yup
      .string()
      .required('This is required')
      .matches(PASSWORD_REG, 'The password must be characters, special characters, number')
      .oneOf([yup.ref('password'), ''], 'Confirm password is must match with password')
  })
  .required()

export type RegisterSchemaType = yup.InferType<typeof registerSchema>
