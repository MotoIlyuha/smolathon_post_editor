'use client'

import 'iframe-resizer/js/iframeResizer.contentWindow'

import {BlockEditor} from '@/components/BlockEditor'

import {AppProvider} from '@/provider/AppProvider'

export default function Document() {

  return (
    <AppProvider>
      {/*{DarkModeSwitcher}*/}
      <BlockEditor />
    </AppProvider>
  )
}
