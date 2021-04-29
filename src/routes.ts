import {Router} from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingController } from './controllers/SettingController';
import { SettingRepository } from './repositories/SettingRepository';

const routes = Router();

const settingsController = new SettingController();

routes.post("/settings",settingsController.create)

export {routes};