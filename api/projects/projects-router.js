const projectsRouter = require('express').Router();
const Projects = require('./projects-model') ;
const {
    validateId,
    validateBody, 
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
        await Projects.remove(req.projectId.id);
        next();
    } catch (error) {
        next(error);
    }
});
projectsRouter.get('/:id', validateId, async (req, res, next) => {
    try {
        res.status(200).json(req.projectId);
    } catch (error) {
        next(error);
    }
});
projectsRouter.post('/', validateBody, async (req, res, next) => {
    try {
        const newProject = await Projects.insert(req.projectBody);
        res.status(200).json(newProject);
    } catch (error) {
        next(error);
    }
});
projectsRouter.put('/:id', validateId, validateBody, async (req, res, next) => {
    try {
        const updateProject = await Projects.update(req.params.id, req.projectBody);
        res.status(200).json(updateProject);
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




module.exports = projectsRouter;
