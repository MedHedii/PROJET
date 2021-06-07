import React from 'react'

import { Alert, AlertTitle } from '@material-ui/lab';


const Message = ({ children }) => {
    return (
        <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>{children}</strong>
</Alert>
    )
}
Message.defaultProps = {
    variant: 'info',
}
export default Message
