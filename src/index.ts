import { Base } from "./base";
import { Movies } from "./movies";
import { applyMixins } from "./utils";

class LOTR extends Base {}
interface LOTR extends Movies {}

applyMixins(LOTR, [Movies]);

export default LOTR;