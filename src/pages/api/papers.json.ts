import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const papers = await getCollection('papers');

  const data = papers.map((paper) => ({
    id: paper.id,
    ...paper.data,
    url: `/papers/${paper.id}/`,
  }));

  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
};
