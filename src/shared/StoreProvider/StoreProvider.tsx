'use client'

import { Provider } from 'react-redux'
import { store } from '@/lib/store/index'

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
