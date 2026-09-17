// import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { cn } from '@/utilities/cn'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'
import { cloneElement } from 'react'

// import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

// import type { MediaBlock as MediaBlockProps } from '@/payload-types'

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return `/${slug}`
}

const jsxConverters = ({ defaultConverters, variables }: any) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  heading: ({ node, ...props }: any) => {
    const element = defaultConverters.heading({
      node,
      ...props,
    })

    if (node.tag === 'h2') {
      return cloneElement(element, {
        className: cn(
          element.props.className,
          'my-8 text-2xl font-black tracking-tight',
        ),
      })
    }

    if (node.tag === 'h3') {
      return cloneElement(element, {
        className: cn(
          element.props.className,
          'my-6 text-2xl font-semibold tracking-tight',
        ),
      })
    }

    return element
  },
  variable: ({ node }: any) => {
    if (!node?.selected) return null

    try {

      const matchedValue = variables[node.selected.value]
      return (
        <span
          style={{
            display: 'inline',
          }}
        >
          {matchedValue}
        </span>
      )
    } catch (err) {
      return (
        <span
          style={{
            display: 'inline',
          }}
        >
          {JSON.stringify({
            selected: node.selected,
            variables
          })}
        </span>
      )
    }
  },
  paragraph: ({ node, ...props }: any) => {
    const element = defaultConverters.paragraph({
      node,
      ...props,
    })

    return cloneElement(element, {
      className: cn(
        element.props.className,
        'mb-4 leading-7 pb-3',
      ),
    })
  },
  blocks: {
    // mediaBlock: ({ node } : any) => (
    //   <MediaBlock
    //     className="col-start-1 col-span-3"
    //     imgClassName="m-0"
    //     {...node.fields}
    //     captionClassName="mx-auto max-w-[48rem]"
    //     enableGutter={false}
    //     disableInnerContainer={true}
    //   />
    // ),
    // emailButton: ({ node } : any) => <EmailButtonBlock {...node.fields} variables={variables} />,
    // code: ({ node } : any) => <CodeBlock className="col-start-2" {...node.fields} />,
  },
})

export type Variable = {
  label: string
  value: string
  dataType: string
  format: string
}

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
  variables?: Record<string, string | number>
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <ConvertRichText
      converters={(({ defaultConverters }) => {
        return jsxConverters({
          defaultConverters,
          variables: rest.variables
        })
      })}
      variables={rest.variables}
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'prose w-full': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
