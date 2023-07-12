'use client'

/* Core */
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

/* Instruments */
import { store } from '@/lib/redux'

type Props = React.PropsWithChildren<{
  session: any
}>

export const Providers = (props: Props) => {
  return (
    <SessionProvider session={props.session}>
      <Provider store={store}>
        {props.children}
      </Provider>
    </SessionProvider>
  )
}