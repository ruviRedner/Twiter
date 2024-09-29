import { Request } from "express";
import tokenPayloed from "../DTO/tokenPayloed"

export default interface RequestWithUser extends Request{
    user:tokenPayloed
}