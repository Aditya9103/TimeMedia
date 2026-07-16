import express from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getMe,
} from "../controllers/admin.controller.js";
import { protectAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/me", protectAdmin, getMe);

export default router;
