import styled from 'styled-components'

import { EmptyMessage } from '@/shared/ui/EmptyMessage'
import { SectionLayout } from '@/shared/ui/SectionLayout'
import { FontItemWithButtons } from '@/widgets/fontCard/ui/FontItemWithButtons'

const dummyFonts = () => {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    fontName: `가나다체 ${i}`,
    authorName: '고로케',
    preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

export const PopularFonts = () => {
  const fontList = dummyFonts()

  if (!fontList) return <EmptyMessage message="등록된 폰트가 없습니다." />

  return (
    <SectionLayout>
      <SectionLayout.TitleContainer>
        <SectionLayout.Title>인기 폰트</SectionLayout.Title>
      </SectionLayout.TitleContainer>

      <GridFontsContainer>
        {fontList.map((font) => (
          <FontItemWithButtons key={font.id} font={font} />
        ))}
      </GridFontsContainer>
    </SectionLayout>
  )
}

const GridFontsContainer = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr 1fr', undefined, undefined, undefined, 'md')}
`
