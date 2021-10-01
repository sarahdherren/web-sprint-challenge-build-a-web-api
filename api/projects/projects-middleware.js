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

module.exports = {
    validateId,
}
