export interface SourceLink {
  label: string;
  href: string;
}

export function sourceLinkFromUrl(sourceTitle: string, sourceUrl: string): SourceLink {
  try {
    const url = new URL(sourceUrl);
    const [owner, repo] = url.pathname.split('/').filter(Boolean);

    if (url.hostname === 'github.com' && owner && repo) {
      return {
        label: `${owner}/${repo}`,
        href: `https://github.com/${owner}/${repo}`,
      };
    }
  } catch {
    // Fall through to the readable source title.
  }

  const [sourceName] = sourceTitle.split(':');

  return {
    label: sourceName || '來源',
    href: sourceUrl,
  };
}
