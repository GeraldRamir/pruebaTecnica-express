import { Router } from "express";
import { countryController } from "./country.contrler";

const router= Router()
const controller= new countryController()

router.get("/fetch", controller.fetchCountries)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.getById)

export default router


