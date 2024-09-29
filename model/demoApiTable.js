import { Schema , model} from "mongoose"
const schema = new Schema({
    username:String,
    password:String
})

const userInfo = model("userInfo",schema);

export default userInfo;