const birthdate = new Date('2000-05-20');
const today = new Date();
const diffTime = today.getTime() - birthdate.getTime();
const diffDate = new Date(diffTime);
const age = {
  years: diffDate.getUTCFullYear() - 1970,
  months: diffDate.getUTCMonth(),
  days: diffDate.getUTCDate() - 1,
};

console.log(age); 