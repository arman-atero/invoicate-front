/**
 * Gets keys value from storage
 * @param {string} key in local storage
 * @returns {any}
 */

import { appConfig } from './app.config';

export function getFromLocalStorage(key: string): any {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

// export function getDashboardLink(): any {
//   const userType = getUserType();
//   if (userType === 'vendor') {
//     return '/partner';
//   } else if (userType === 'adminAdvocate' || userType === 'advocate') {
//     return '/advocate';
//   } else if (userType === 'expert') {
//     return '/experts';
//   }
// }

export function getImage(img): any {
  if (img) {
    return appConfig.imagesUrl + img;
  } else {
    return '/assets/img/patient.png';
  }
}

// export function getUserType(): any {
//   const user = getFromLocalStorage('user');
//   const UserTypeID = user.UserTypeID;
//   switch (UserTypeID) {
//     case '1':
//       return 'admin';
//       break;
//     case '2':
//       if (user.IsAdminAdvocate === '1') {
//         return 'adminAdvocate';
//       } else if (user.IsAdvocate === '1') {
//         return 'advocate';
//       } else {
//         return 'expert';
//       }
//       break;
//     case '4':
//       return 'vendor';
//       break;
//   }
// }

/**
 * Removes key with value from storage
 * //@param { string } key
 */
export function removeFromLocalStorage(key: string | string[]) {
  key = Array.isArray(key) ? key : [key];
  key.map((k: string) => localStorage.removeItem(k));
}

/**
 * Sets the key to storage with given values
//  * @param {string} key will be saved in local storage
//  * @param data
 */
export function setToLocalStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    localStorage.setItem(key, data);
  }
}

/**
 * Clear local storage
 */
export function clearLocalStorage() {
  localStorage.clear();
}
