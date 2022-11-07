import cookie from "cookie";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (
      username === process.env.USERNAME &&
      password === process.env.PASSWORD
    ) {
      await NextCors(req, res, {
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        origin: "*",
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      });

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.COOKIE_TOKEN, {
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Succesfull");
    } else {
      res.status(400).json("Wrong credentials");
    }
  }
}
