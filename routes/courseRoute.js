import express from 'express'
import { deleteCourse, getAllCourse, getCourseId } from '../controllers/courseController.js';


const courseRouter = express.Router()

// Get All Course
courseRouter.get('/all', getAllCourse)

// Get Course Data By Id
courseRouter.get('/:id', getCourseId)

// Delete Course Data By Id
courseRouter.post("/delete", deleteCourse)


export default courseRouter;