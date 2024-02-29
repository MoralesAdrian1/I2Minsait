import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";
import { getDatosP,
        getAllDatosP,
        updateDatosP,
        deleteDatosP,
        createDatosP
 } from "../controllers/datosP.controller.js";  
const router = Router();
router.get("/datosP", auth, getAllDatosP);

router.post("/datosP", auth, validateSchema(createDatosPSchema), createDatosP);

router.get("/datosP/:id", auth, getDatosP);

router.put("/datosP/:id", auth, updateDatosP);

router.delete("/datosP/:id", auth, deleteDatosP);
