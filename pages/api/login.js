import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (
      username === process.env.USERNAME &&
      password === process.env.PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.COOKIE_TOKEN, {
          maxAge: 60 * 60,
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
