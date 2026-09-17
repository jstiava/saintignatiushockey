import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'
export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { richText } = props


  return (
    <div
      className='flex flex-col w-[90vw] max-w-[60rem] mx-auto py-2 lg:py-4'
    >
      {richText && <RichText data={richText} enableGutter={false} />}
    </div>
  )
}
