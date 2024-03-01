import { Router } from "express";
import {
        createDatosP,
        getAllDatosP,
        getDatosP,
        updateDatosP,
        deleteDatosP
      } from "../controllers/datosP.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createDatosPSchema } from "../schemas/datosP.schema.js";
const router = Router();
router.get("/datosP", auth, getAllDatosP);

router.post("/datosP", auth, validateSchema(createDatosPSchema), createDatosP);

router.get("/datosP/:id", auth, getDatosP);

router.put("/datosP/:id", auth, updateDatosP);

router.delete("/datosP/:id", auth, deleteDatosP);

export default router;