import sha1 from "sha1";

export const generateRandomId = ({ email }) => {
  var text = email + new Date();
  return sha1(text);
};
