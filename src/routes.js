const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');



const routes = express.Router();
const upload = multer(uploadConfig);

// routes.put('/users', (req, res) => {
//     return res.json(req.body);
// });

routes.post('/sessions', SessionController.create);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbmail'), SpotController.create);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;