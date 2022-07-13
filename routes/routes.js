// import express
import express from "express";

//import class & controller
import {
    getDaerahs,
    getDaerahId,
    createDaerah,
    updateDaerah,
    deleteDaerah
} from "../controllers/Daerah.js";

const router = express.Router();

router.get('/daerah/readall', getDaerahs);
router.get('/daerah/read/:id', getDaerahId);
router.post('/daerah/add', createDaerah);
router.put('/daerah/update/:id', updateDaerah);
router.delete('/daerah/delete/:id', deleteDaerah);

// export router
export default router;