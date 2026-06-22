import server from "../dist/server/server.js";

function getHost(req) {
  return req.headers.host || "";
}

function getProtocol(req) {
  return req.headers["x-forwarded-proto"] || "https";
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  try {
    const url = new URL(req.url ?? "", `${getProtocol(req)}://${getHost(req)}`);
    const headers = new Headers();
    for (const [name, value] of Object.entries(req.headers)) {
      if (typeof value === "string") {
        headers.append(name, value);
      } else if (Array.isArray(value)) {
        value.forEach((entry) => headers.append(name, entry));
      }
    }

    const body = req.method === "GET" || req.method === "HEAD" ? undefined : await readBody(req);
    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
    });

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, name) => {
      if (name.toLowerCase() === "set-cookie") {
        res.setHeader(name, value);
      } else {
        res.setHeader(name, value);
      }
    });

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
