import { Router } from 'express';
const router = Router();
import { allUsers, singleUser, editUser, deleteUser } from '../controllers/userController';
import { isAuthenticated, isAdmin } from '../middleware/auth';


//user routes

router.get('/allusers', isAuthenticated, isAdmin, allUsers);
router.get('/user/:id', isAuthenticated, singleUser);
router.put('/user/edit/:id', isAuthenticated, editUser);
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);

export default router;