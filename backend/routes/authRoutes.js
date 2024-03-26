import { Router } from "express";
const router = Router();
import { register, login, logout, userProfile } from "../controllers/authController";
import { isAuthenticated } from "../middleware/auth";

// Auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", isAuthenticated, userProfile);

export default router;
