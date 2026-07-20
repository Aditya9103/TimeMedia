import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import config from "../config/env.js";

export const protectAdmin = async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie or Authorization header
  token = req.cookies.jwt;
  if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, config.jwtSecret);

      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
