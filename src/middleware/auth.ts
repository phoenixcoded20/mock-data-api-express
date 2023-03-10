import jwt from "jsonwebtoken";
import { messages } from "../utils";

export const authenticateJWT = (req: any, res: any, next: any) => {
  const { authorization } = req.headers!;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: messages.errorMessages.tokenMissing });
  } else {
    const token = authorization.split(" ")[1];
    const serviceToken = token!.toString();
    const jwData: any = jwt.verify(serviceToken, process.env.JWT_SECRET || "");
    const { userId } = jwData;
    const users = require("../data/users");
    const user = users.find((_user: any) => _user.id === userId);

    if (!user) {
      return res
        .status(401)
        .json({ message: messages.errorMessages.invalidToken });
    }

    req.user = user;
    next();
  }
};
