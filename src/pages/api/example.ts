export const prerender = false;

export async function get() {
  return new Response('ok', {
    status: 200,
  });
}
