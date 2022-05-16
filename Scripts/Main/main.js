import '../../node_modules/jquery/dist/jquery.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { handler } from "./handler.js";
import {getPageUrl} from "../Utils/url/getPageUrl.js";

let page = getPageUrl (new URL(document.location).pathname);
// console.log(page);

handler (page);