import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import config from "../config/env.js";

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: "30d",
  });
};

// @desc    Register new admin
// @route   POST /api/admin/signup
// @access  Public (protected by secret code)
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, secretCode } = req.body;

    if (!name || !email || !password || !secretCode) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    if (secretCode !== config.adminSecretCode) {
      return res.status(401).json({ message: "Invalid Admin Secret Code" });
    }

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({
      name,
      email,
      password,
    });

    if (admin) {
      const token = generateToken(admin._id);
      
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: config.env === "production",
        sameSite: config.env === "production" ? "none" : "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: token,
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      const token = generateToken(admin._id);

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: config.env === "production",
        sameSite: config.env === "production" ? "none" : "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: token,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Logout admin / clear cookie
// @route   POST /api/admin/logout
// @access  Public
export const logoutAdmin = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    secure: config.env === "production",
    sameSite: config.env === "production" ? "none" : "strict",
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Get admin profile
// @route   GET /api/admin/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select("-password");
    if (admin) {
      res.json(admin);
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
