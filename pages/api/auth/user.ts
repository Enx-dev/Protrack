import { NextApiHandler } from "next/types";

const getUser: NextApiHandler = (req, res) => {
  let user;
  if (req.method === "POST") {
    user = req.body;
  } else {
    if (user) {
      res.send(req.body);
    } else {
      res.send(req.body);
    }
  }
};

export default getUser;
