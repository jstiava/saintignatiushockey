import { ContentBlock } from '@/blocks/Content/Component'
import { Page } from '@/payload-types'
import React, { Fragment } from 'react'

// import type { Page } from '@/payload-types'


// import { ContentBlock } from '@/blocks/Content/Component'
// import { FormBlock } from '@/blocks/Form/Component'
// import { MediaBlock } from '@/blocks/MediaBlock/Component'

// import { PeopleListBlock } from './People/Component'
// import CardBlock from './Card/Component'
// import CardSliderBlock from './CardSlider/Component'
// import AthleticTrophyBannerBlock from './AthleticTrophyBanner/Component'
// import MapBlock from './Map/Component'
// import CarouselBlock from './Carousel/Component'
// import DramaticBannerBlock from './DramaticBanner/Component'
// import StatisticsBannerBlock from './StatisticsBanner/Component'
// import VoidBlock from './Void/Component'
// import DonateBlock from './Donate/Component'

export const blockComponents = {
  content: ContentBlock,
  // formBlock: FormBlock,
  // mediaBlock: MediaBlock,
  // peopleList: PeopleListBlock,
  // card: CardBlock,
  // cardSlider: CardSliderBlock,
  // athleticTrophyBanner: AthleticTrophyBannerBlock,
  // map: MapBlock,
  // carousel: CarouselBlock,
  // dramaticBanner: DramaticBannerBlock,
  // statisticsBanner: StatisticsBannerBlock,
  // voidBlock: VoidBlock,
  // donate: DonateBlock
}

export const RenderBlocks: React.FC<{
  blocks: Page['blocks']
}> = (props) => {
  const { blocks } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  const debug = false

  if (debug) {
    return (
      <p
        style={{
          whiteSpace: 'pre-wrap',
        }}
      >
        {JSON.stringify(blocks, null, 2)}
      </p>
    )
  }

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return <Block key={`${index}_${block.blockName}`} {...(block as any)} />
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
