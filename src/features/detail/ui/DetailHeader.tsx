import { BookmarkButton, DownloadButton, ProfileImage } from '@/components'
import { useFontDetails } from '@/features/detail/stores/fontDetail.store'
import { useFontLoader } from '@/hooks'

export const DetailHeader = () => {
  const font = useFontDetails()
  const { fontFamily } = useFontLoader(font?.woff, font?.id as number)

  if (!font) return null

  const { name, writerName, id, bookmarked } = font

  return (
    <div className="flex-between-center mb-16">
      <div className="flex items-center gap-16">
        <ProfileImage size="lg" />
        <div className="flex-column gap-5 overflow-hidden">
          <h6
            className="p1 text-primary overflow-hidden text-ellipsis whitespace-nowrap"
            style={{ fontFamily }}
          >
            {name}
          </h6>
          <p className="p2 text-grey">{writerName}</p>
        </div>
      </div>

      <div className="flex-column w-60 gap-5">
        <DownloadButton fontId={id} fontName={name} />
        <BookmarkButton fontId={id} isBookmarked={bookmarked} />
      </div>
    </div>
  )
}
