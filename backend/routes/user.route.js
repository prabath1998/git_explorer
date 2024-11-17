import express from 'express';
import { getLikes, getUserProfileAndRepos, likeProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile/:username",getUserProfileAndRepos);
router.get("/likes", getLikes);
router.post("/like/:username", likeProfile);

export default router;