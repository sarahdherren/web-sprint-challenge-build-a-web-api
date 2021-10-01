const actionsRouter = require('express').Router();
const Actions = require('./actions-model');
const {
    validateId,
    validateBody,
} = require('./actions-middlware');
actionsRouter.get('/', async (req, res, next) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
       next(error) ;
    }
});
actionsRouter.get('/:id', validateId, async (req, res, next) => {
    try {
        res.status(200).json(req.actionId);
    } catch (error) {
         next(error);  
    }
});
actionsRouter.post('/', validateBody, async (req, res, next) => {
    try {
      await Actions.insert(req.action);
      res.status(201).json(req.action);
    } catch (error) {
         next(error)  
    }
})
//actionsRouter.verb('/', async (req, res, next) => {
//     try {
        
//     } catch (error) {
//          next(error)  
//     }
// })
//actionsRouter.verb('/', async (req, res, next) => {
//     try {
        
//     } catch (error) {
//          next(error)  
//     }
// })







module.exports = actionsRouter;
