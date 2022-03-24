import express from 'express';
import UserService from '../Services/UserService.js';

import  bodyParser from 'body-parser';
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var router = express.Router();
const service = new UserService();

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await service.getAll())
  }
  catch (error) {
    console.error(error)
    res.status(500);
  }
});

router.get('/:uid', async (req, res) => {
  try {
    res.status(200).json(await service.getById(req.params.uid))
  }
  catch (error) {
    console.error(error)
    res.status(500);
  }
});

router.post('/', jsonParser, async (req, res) => {
  try {
    res.json(await service.post(req.body));
  }
  catch (error){
    console.error(error);
  }
});

router.put('/:uid', jsonParser, async (req, res) => {
  try {
    res.json(await service.put(req.params.uid, req.body));
  }
  catch (error){
    console.error(error);
  }
});

router.delete('/:uid', async (req, res) => {
  try {
    res.json(await service.delete(req.params.uid));
  }
  catch (error){
    console.error(error);
  }
});



export default router;