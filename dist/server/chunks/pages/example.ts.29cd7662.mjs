const prerender = false;
async function get() {
  return new Response("ok", {
    status: 200
  });
}

export { get, prerender };
