const port = Number(Deno.env.get("PORT") ?? "8000");

const handler = (req: Request): Response => {
  return new Response("Hello from Deno!", {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
};

console.log(`Listening on :${port}`);
Deno.serve({ port, handler });