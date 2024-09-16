const mockUserEmails = ['user1@gmail.com', 'user2@gmail.com'];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkEmailAvailability =  (email) => new Promise((res, rej) => {
  setTimeout(() => {
    if (mockUserEmails.includes(email)) {
      rej("Email is already taken");
    } else {
      res("Email is available");
    }
  }, 500);
})  

const registerUser = (userData) => new Promise((res) => {
  setTimeout(() => {
    res({ id: getRandomNumber(1, 1000), ...userData });
  }, 500);
})

export const AuthService = {
  checkEmailAvailability,
  registerUser,
}