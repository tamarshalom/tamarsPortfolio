interface SoundCloudProps {
  /** Full iframe `src` from SoundCloud → Share → Embed (optional if `trackUrl` or env is set). */
  src?: string;
  /** Public SoundCloud track page URL, e.g. `https://soundcloud.com/user/track-name` */
  trackUrl?: string;
  title?: string;
  /** Player height in pixels (default 300 works well for the visual player). */
  height?: number;
}

function buildPlayerSrc(trackOrEmbedUrl: string): string {
  const trimmed = trackOrEmbedUrl.trim();
  if (trimmed.includes("w.soundcloud.com/player")) {
    return trimmed;
  }
  const params = new URLSearchParams({
    url: trimmed,
    color: "ff006e",
    auto_play: "false",
    hide_related: "true",
    show_comments: "true",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "true",
    visual: "true",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

/** Optional: set in `.env.local` or Vercel → Settings → Environment Variables */
const ENV_TRACK =
  typeof process.env.NEXT_PUBLIC_SOUND_BEHIND_GRADES_URL === "string"
    ? process.env.NEXT_PUBLIC_SOUND_BEHIND_GRADES_URL
    : undefined;

export function SoundCloud({
  src,
  trackUrl,
  title = "SoundCloud audio",
  height = 300,
}: SoundCloudProps) {
  const resolved =
    src?.trim() || trackUrl?.trim() || ENV_TRACK?.trim();

  if (!resolved) {
    return (
      <aside
        className="my-8 rounded-lg border border-dashed border-accent/50 bg-accent-soft/20 px-5 py-4 text-sm text-muted"
        aria-label="SoundCloud embed placeholder"
      >
        <p className="mb-3">
          <strong className="text-foreground">Add your episode link:</strong> In Vercel (or{" "}
          <code className="text-accent-light">.env.local</code>), set{" "}
          <code className="text-accent-light">NEXT_PUBLIC_SOUND_BEHIND_GRADES_URL</code> to your SoundCloud track URL
          (open the track in the browser and copy the address bar), then redeploy. Or edit this post’s MDX and set{" "}
          <code className="text-accent-light">trackUrl=&quot;https://soundcloud.com/…&quot;</code> on{" "}
          <code className="text-accent-light">&lt;SoundCloud /&gt;</code>.
        </p>
      </aside>
    );
  }

  const iframeSrc = resolved.includes("w.soundcloud.com/player")
    ? resolved
    : buildPlayerSrc(resolved);

  return (
    <div className="my-8 w-full overflow-hidden rounded-lg border border-accent-soft">
      <iframe
        width="100%"
        height={height}
        title={title}
        allow="autoplay"
        src={iframeSrc}
        className="w-full border-0"
      />
    </div>
  );
}
