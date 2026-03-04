interface YouTubeProps {
  id: string;
  title?: string;
}

export function YouTube({ id, title = "YouTube video" }: YouTubeProps) {
  return (
    <span className="my-8 block w-full aspect-video overflow-hidden rounded-lg border border-accent-soft">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </span>
  );
}
