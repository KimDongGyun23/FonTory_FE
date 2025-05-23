import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { BookmarkButton, DownloadButton, Icon } from '@/components'
import { useFontLoader } from '@/hooks'
import type { Font } from '@/types'

type Props = {
  font: Font
}

export const FontCardWithoutProfile = ({ font }: Props) => {
  const { id, name: fontName, example, bookmarked, woff } = font
  const { fontFamily } = useFontLoader(woff, id)

  return (
    <Link
      to={ROUTES.DETAIL(id)}
      className="flex-column border-light-text rounded-box gap-6 border-[0.1rem] p-6"
      style={{ fontFamily }}
    >
      <div className="flex-between-center overflow-hidden">
        <p className="p2 text-primary overflow-hidden text-ellipsis whitespace-nowrap">
          {fontName}
        </p>
        <Icon name={'caret-right'} size={'2.4rem'} />
      </div>

      <p className="p3 text-grey grow overflow-hidden break-words">{example}</p>

      <div className="flex items-center gap-5 self-end">
        <DownloadButton fontId={id} fontName={fontName} isIconType />
        <BookmarkButton fontId={id} isBookmarked={bookmarked} isIconType />
      </div>
    </Link>
  )
}
