import { Components } from '@mui/material'

const componentsConfig: Components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    }
  },
  MuiStack: {
    defaultProps: {
      direction: 'row'
    }
  },
  MuiTypography: {
    defaultProps: {
      variant: 'body1',
      display: 'block'
    }
  }
}

export default componentsConfig
