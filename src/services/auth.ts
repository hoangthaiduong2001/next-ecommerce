import axios from 'axios'
import { CONFIG_API } from 'src/configs/api'
import { TAuthLogin } from 'src/types/auth'

export const authLogin = async (data: TAuthLogin) => {
  console.log('CONFIG_API.AUTH.INDEX, data', CONFIG_API.AUTH.INDEX)
  try {
    const res = await axios.post(CONFIG_API.AUTH.INDEX, data)

    return res.data
  } catch (error) {
    console.log(error)

    return null
  }
}
