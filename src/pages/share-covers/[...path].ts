import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

type CoverProps = {
  contentType: string;
  sourceUrl: string;
};

const imageTypes: Record<string, string> = {
  gif: 'image/gif',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
};

export const getStaticPaths: GetStaticPaths = async () => {
  const prompts = await getCollection('prompts');

  return prompts.flatMap((prompt) => {
    const extension = getImageExtension(prompt.data.thumbnailUrl);
    if (!prompt.data.thumbnailUrl || !extension) return [];

    return {
      params: { path: `${prompt.id}.${extension}` },
      props: {
        contentType: imageTypes[extension],
        sourceUrl: prompt.data.thumbnailUrl,
      } satisfies CoverProps,
    };
  });
};

export const GET: APIRoute = async ({ props }) => {
  const { contentType, sourceUrl } = props as CoverProps;

  try {
    const imageResponse = await fetch(sourceUrl);
    if (!imageResponse.ok) return new Response(null, { status: 404 });

    return new Response(await imageResponse.arrayBuffer(), {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': imageResponse.headers.get('content-type') || contentType,
      },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
};

function getImageExtension(value?: string) {
  if (!value) return undefined;

  try {
    const extension = new URL(value).pathname.split('.').pop()?.toLowerCase();
    if (extension && extension in imageTypes) return extension;
  } catch {
    return undefined;
  }

  return undefined;
}
