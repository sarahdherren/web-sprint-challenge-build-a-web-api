const projectsRouter = require('express').Router();
const Projects = require('./projects-model') ;
const {
    validateId 
} = require('./projects-middleware');

projectsRouter.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (error) {
        next(error);
    }
});
projectsRouter.delete('/:id', validateId, async (req, res, next) => {
    try {
        await Projects.remove(req.project.id);
        next();
    } catch (error) {
        next(error);
    }
});
// projectsRouter.verb('/', (req, res, next) => {
//     try {
        
//     } catch (error) {
//         next(error);
//     }
// });
// projectsRouter.verb('/', (req, res, next) => {
//     try {
        
//     } catch (error) {
//         next(error);
//     }
// });
// projectsRouter.verb('/', (req, res, next) => {
//     try {
        
//     } catch (error) {
//         next(error);
//     }
// });
// projectsRouter.verb('/', (req, res, next) => {
//     try {
        
//     } catch (error) {
//         next(error);
//     }
// });




module.exports = projectsRouter;
