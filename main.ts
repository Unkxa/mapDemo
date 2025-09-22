/// <reference types="https://deno.land/x/types/index.d.ts" />

const port = Number(Deno.env.get("PORT") ?? "8000");

// 处理静态文件请求
async function handleStaticRequest(url: URL): Promise<Response> {
  const path = url.pathname === '/' ? '/index.html' : url.pathname;
  
  try {
    const filePath = `./public${path}`;
    const file = await Deno.readFile(filePath);
    
    let contentType = "text/html";
    if (path.endsWith('.js')) contentType = "application/javascript";
    else if (path.endsWith('.css')) contentType = "text/css";
    else if (path.endsWith('.png')) contentType = "image/png";
    else if (path.endsWith('.jpg') || path.endsWith('.jpeg')) contentType = "image/jpeg";
    else if (path.endsWith('.svg')) contentType = "image/svg+xml";
    else if (path.endsWith('.json')) contentType = "application/json";
    else if (path.endsWith('.ico')) contentType = "image/x-icon";
    else if (path.endsWith('.woff')) contentType = "font/woff";
    else if (path.endsWith('.woff2')) contentType = "font/woff2";
    else if (path.endsWith('.ttf')) contentType = "font/ttf";
    
    return new Response(file, {
      headers: { 
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600"
      },
    });
  } catch (error) {
    console.error(`文件未找到: ./public${path}`, error);
    return new Response("File not found", { status: 404 });
  }
}

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  
  // 处理静态文件请求
  return await handleStaticRequest(url);
};

console.log(`地图服务器运行在端口 :${port}`);
console.log(`访问 http://localhost:${port} 查看地图`);
Deno.serve({ port, handler });