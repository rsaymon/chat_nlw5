import { EntityRepository, Repository } from "typeorm";
import {Setting} from '../entities/Setting'

@EntityRepository(Setting) //EntidadeRepositório do tipo SETTING 
class SettingRepository extends Repository<Setting>{

}

export {SettingRepository};