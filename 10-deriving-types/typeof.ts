const userName = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  password: '123456',
  confirmPassword: '123456',
  phone: '1234567890',
  address: '123 Main St, Anytown, USA',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  country: 'USA',
};

type userType = typeof userName;

const user: userType = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  email: 'jane.doe@example.com',
  password: '123456',
  confirmPassword: '123456',
  phone: '1234567890',
  address: '123 Main St, Anytown, USA',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  country: 'USA',
};

const studentList = ['John', 'Jane', 'Jim', 'Jill'];

const studentListType = typeof studentList;

const studentList: studentListType = ['John', 'Jane', 'amir', 'kia'];

function loadStudentList (list: studentListType) {
  return list;
}