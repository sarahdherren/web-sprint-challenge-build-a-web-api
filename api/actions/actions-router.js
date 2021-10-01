const actionsRouter = require('express').Router();
const Actions = require('./actions-model');

actionsRouter.get('/', async (req, res, next) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
       next(error) ;
    }
});
actionsRouter.get('/:id', async (req, res, next) => {
    try {
        
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
//actionsRouter.verb('/', async (req, res, next) => {
//     try {
        
//     } catch (error) {
//          next(error)  
//     }
// })







module.exports = actionsRouter;
