import * as express from "express";
import accountRouter from "./account";
import dashboardRouter from "./dashboard";
import postsRouter from "./posts";
import commentsRouter from "./comments";
import repliesRouter from "./replies";
import followersRouter from "./followers";
import friendsRouter from "./friends";
import friendRequestRouter from "./friends-request";
import galleryRouter from "./gallery";
import detailsCardRouter from "./details-card";
import simpleCardRouter from "./simple-card";
import profileCardRouter from "./profile-card";
import userListRouter from "./user-list";
import profileListRouter from "./profile-list";
import customerRouter from "./customer";
import chatRouter from "./chat";
import kanbanRouter from "./kanban";
import contactRouter from "./contact";
import mailsRouter from "./mails";
import calendarRouter from "./calendar";
import productsRouter from "./products";
import productRouter from "./product";
import reviewRouter from "./review";
import addressRouter from "./address";
import cartRouter from "./cart";

const router = express.Router();

router.use("/account", accountRouter);
router.use("/dashboard", dashboardRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/replies", repliesRouter);
router.use("/followers", followersRouter);
router.use("/friends", friendsRouter);
router.use("/friend-request", friendRequestRouter);
router.use("/gallery", galleryRouter);
router.use("/details-card", detailsCardRouter);
router.use("/simple-card", simpleCardRouter);
router.use("/profile-card", profileCardRouter);
router.use("/user-list", userListRouter);
router.use("/profile-list", profileListRouter);
router.use("/customer", customerRouter);
router.use("/chat", chatRouter);
router.use("/kanban", kanbanRouter);
router.use("/contact", contactRouter);
router.use("/mails", mailsRouter);
router.use("/calendar", calendarRouter);
router.use("/products", productsRouter);
router.use("/product", productRouter);
router.use("/review", reviewRouter);
router.use("/address", addressRouter);
router.use("/cart", cartRouter);

export = router;