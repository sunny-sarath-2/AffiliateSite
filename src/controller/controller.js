import jose from "node-jose";
import User from "../model/user.model";
const appController = {
  getUser(idToken) {
    var sections = idToken.split(".");
    var header = jose.util.base64url.decode(sections[0]);
    var payload = jose.util.base64url.decode(sections[1]);
    payload = JSON.parse(payload);
    header = JSON.parse(header);
    var userdetails = new User();
    // console.log(payload);
    userdetails.userType = payload["custom:Tier"];
    userdetails.userOrganisation = payload["custom:Organisation"];
    userdetails.userEmail = payload.email;
    userdetails.userName = payload.name;
    userdetails.userPhoneNumber = payload.phone_number;
    return userdetails;
  }
};
export default appController;
