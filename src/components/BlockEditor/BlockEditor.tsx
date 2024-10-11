import { EditorContent } from '@tiptap/react'
import React, {useContext, useRef} from 'react'

import { LinkMenu } from '@/components/menus'

import { useBlockEditor } from '@/hooks/useBlockEditor'

import '@/styles/index.css'

// import { Sidebar } from '@/components/Sidebar'
import ImageBlockMenu from '@/extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '@/extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '@/extensions/Table/menus'
import { EditorHeader } from './components/EditorHeader'
import { TextMenu } from '../menus/TextMenu'
import { ContentItemMenu } from '@/components/menus'
import { useSidebar } from '@/hooks/useSidebar'
import {useApp} from "@/provider/AppProvider";

export const BlockEditor = () => {
  const menuContainerRef = useRef(null)
  const {loading, bgImageUrl} = useApp();

  const leftSidebar = useSidebar()
  const { editor, users } = useBlockEditor()

  if (!editor || !users) {
    return null
  }

  if (!loading) console.log(bgImageUrl);

  return (
    <div className="flex h-full" ref={menuContainerRef}>
      {/*<Sidebar isOpen={leftSidebar.isOpen} onClose={leftSidebar.close} editor={editor} />*/}
      <div className="relative flex flex-col flex-1 overflow-hidden" style={{ height: '100vh' }}>
        <EditorHeader/>
        <EditorContent editor={editor} className="flex-1 overflow-y-auto"
                       style={{
                         backgroundImage: !loading ? `url(${bgImageUrl})` : '',
                         height: '100vh',
                       }}/>
        <ContentItemMenu editor={editor} />
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>
    </div>
  )
}

export default BlockEditor
