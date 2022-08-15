import express from "express";
const router = express.Router();
import StudentController from "../controllers/studentController.js";

router.get('/', StudentController.getAllDoc)
router.post('/', StudentController.createDoc)
router.get('/edit/:id', StudentController.editDoc)
router.post('/update/:id', StudentController.updateDocById)
router.post('/delete/:id', StudentController.deleteDocById)

export default router;