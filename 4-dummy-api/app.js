'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Roles;
(function (Roles) {
  Roles['ADMIN'] = 'admin';
  Roles['MODERATOR'] = 'moderator';
  Roles['USER'] = 'user';
})(Roles || (Roles = {}));
var Gender;
(function (Gender) {
  Gender['MALE'] = 'male';
  Gender['FEMALE'] = 'female';
})(Gender || (Gender = {}));
function setRole(role) {
  if (role === Roles.ADMIN) {
    return Roles.ADMIN;
  } else if (role === Roles.MODERATOR) {
    return Roles.MODERATOR;
  } else {
    return Roles.USER;
  }
}
async function getUsers(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.users.forEach((element) => {
      console.log({
        id: element.id,
        firstName: element.firstName,
        lastName: element.lastName,
        age: element.age,
        gender: element.gender === Gender.MALE ? Gender.MALE : Gender.FEMALE,
        roles: setRole(element.roles),
      });
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
getUsers('https://dummyjson.com/users');
//# sourceMappingURL=app.js.map
