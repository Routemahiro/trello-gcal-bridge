export default {
	async fetch(
	  request: Request,
	  env: { GAS_WEBAPP_URL: string }
	): Promise<Response> {
	  // Trello validator 対策：HEAD/GET は必ず 200
	  if (request.method === "HEAD" || request.method === "GET") {
		return new Response("ok", { status: 200 });
	  }
  
	  if (request.method !== "POST") {
		return new Response("Method Not Allowed", { status: 405 });
	  }
  
	  const bodyText = await request.text();
  
	  // GASへそのまま転送
	  await fetch(env.GAS_WEBAPP_URL, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		  "X-Bridge": "cf-worker",
		},
		body: bodyText,
	  });
  
	  // Trelloには常に200を返す（リトライ嵐回避）
	  return new Response("ok", { status: 200 });
	},
  };
  