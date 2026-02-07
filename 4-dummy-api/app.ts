enum Roles {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  role: Roles;
}

function setRole(role: Roles): string {
  if (role === Roles.ADMIN) {
    return Roles.ADMIN;
  } else if (role === Roles.MODERATOR) {
    return Roles.MODERATOR;
  } else {
    return Roles.USER;
  }
}

async function getUsers(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.users.forEach((element: User): void => {
      console.log({
        id: element.id,
        firstName: element.firstName,
        lastName: element.lastName,
        age: element.age,
        gender: element.gender === Gender.MALE ? Gender.MALE : Gender.FEMALE,
        role: setRole(element.role),
      });
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
getUsers('https://dummyjson.com/users');
