const Projects = require('./projects-model');

async function validateId (req, res, next) {
    try {
        const { id } = req.params;
        const validProject = await Projects.get(id);
        if(validProject) {
            req.project = validProject;
            next();
        } else {
            next({
                status: 404,
                message: "Project not found"
            });
        }
    } catch (error) {
        next(error);
    }
}

async function validateBody (req, res, next) {
    try {
        const { name, description } = req.body;
        if(!name || typeof name !== 'string' || !name.trim()){
            next({
                status: 400,
                message: "Your project requires a name"
            });
        } else if (!description || typeof description !== 'string' || !description.trim()) {
            next({
                status: 400,
                message: "Your project requires a description"
            });
        } else {
            req.project = req.body;
            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    validateId,
    validateBody,
}
