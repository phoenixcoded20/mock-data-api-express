import * as express from "express";
import accountRouter from "./account";
import dashboardRouter from "./dashboard";
import postsRouter from "./posts";
import commentsRouter from "./comments";
import repliesRouter from "./replies";

const router = express.Router();

router.use("/account", accountRouter);
router.use("/dashboard", dashboardRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/replies", repliesRouter);

export = router;