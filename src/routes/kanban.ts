import express from "express";
import { kanbanController } from "../controllers";
import { authenticateJWT } from "../middleware/auth";
const router = express.Router();

router.get("/columns", authenticateJWT, kanbanController.getColumns);
router.get("/columns-order", authenticateJWT, kanbanController.getColumnsOrder);
router.get("/comments", authenticateJWT, kanbanController.getComments);
router.get("/profiles", authenticateJWT, kanbanController.getProfiles);
router.get("/items", authenticateJWT, kanbanController.getItems);
router.get("/userstory", authenticateJWT, kanbanController.getUserstory);
router.get("/userstory-order", authenticateJWT, kanbanController.getUserstoryOrder);
router.post("/add-column", authenticateJWT, kanbanController.addColumn);
router.post("/edit-column", authenticateJWT, kanbanController.editColumn);
router.post("/update-column-order", authenticateJWT, kanbanController.updateColumnOrder);
router.post("/delete-column", authenticateJWT, kanbanController.deleteColumn);
router.post("/add-item", authenticateJWT, kanbanController.addItem);
router.post("/edit-item", authenticateJWT, kanbanController.editItem);
router.post("/update-item-order", authenticateJWT, kanbanController.updateItemOrder);
router.post("/select-item", authenticateJWT, kanbanController.selectItem);
router.post("/add-item-comment", authenticateJWT, kanbanController.addItemComment);
router.post("/delete-item", authenticateJWT, kanbanController.deleteItem);
router.post("/add-story", authenticateJWT, kanbanController.addStory);
router.post("/edit-story", authenticateJWT, kanbanController.editStory);
router.post("/update-story-order", authenticateJWT, kanbanController.updateStoryOrder);
router.post("/update-storyitem-order", authenticateJWT, kanbanController.updateStoryitemOrder);
router.post("/add-story-comment", authenticateJWT, kanbanController.addStoryComment);
router.post("/delete-story", authenticateJWT, kanbanController.deleteStory);

export = router;
