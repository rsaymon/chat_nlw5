import { EntityRepository, Repository } from "typeorm";
import {Setting} from '../entities/Setting'

@EntityRepository(Setting) //EntidadeReposit√≥rio do tipo SETTING 
class SettingRepository extends Repository<Setting>{

}

export {SettingRepository};