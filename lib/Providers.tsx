'use client'

/* Core */
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

/* Instruments */
import { store } from '@/lib/redux'

type Props = React.PropsWithChildren<{}>

export const Providers = (props: Props) => {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        {props.children}
      </ReduxProvider>
    </SessionProvider>
  )
}