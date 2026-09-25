export function YoutubeEmbed({
  videoId,
  title,
}: {
  videoId: string
  title: string
}) {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
