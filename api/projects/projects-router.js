const projectsRouter = require('express').Router();
const Projects = require('./projects-model') ;

projectsRouter.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (error) {
        next(error);
    }
});
projectsRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteProject = await Projects.remove(id); //eslint-disable-line
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
