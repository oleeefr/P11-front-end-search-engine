import {Routes} from '../../Configs/Routes.js';
import {Connection} from '../../Library/Models/Connection.js';


let chemin = "../../"+Routes.__DIRNAME_DATA ();
export const datas = await Connection.toData (chemin);