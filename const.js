// Use const and let to declare variables for a user object
const user = {
  name: 'muli pujitha',
  age: 20,
  email: 'mpujitha029@gmail.com'
};

// Function that updates a user’s information using object destructuring
const updateUserInfo = (user, updates) => {
  return { ...user, ...updates };
};

// Arrow function to print the updated user information
const printUserInfo = (user) => {
  console.log(`Updated User Information: Name - ${user.name}, Age - ${user.age}, Email - ${user.email}`);
};

// Create a list of users
const users = [
  { name: 'muli pujitha', age: 20, email: 'mpujitha029@gmail.com' },
  { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  { name: 'Sam Johnson', age: 35, email: 'sam.johnson@example.com' }
];

// Use the map method to display the names of all users
const displayUserNames = (users) => {
  return users.map(user => user.name);
};

// Simulate an API call using Promise and setTimeout to fetch the list of users
const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success response after 2 seconds
      resolve(users);
    }, 2000);
  });
};

// Use async/await to handle the response
const displayUsers = async () => {
  try {
    const fetchedUsers = await fetchUsers();
    console.log('Fetched Users: ', fetchedUsers);
    const names = displayUserNames(fetchedUsers);
    console.log('Names of All Users:', names);
  } catch (error) {
    console.log('Error fetching users:', error);
  }
};

// Update user info
const updatedUser = updateUserInfo(user, { name: 'John Updated', age: 31, email: 'john.updated@example.com' });
printUserInfo(updatedUser);

// Display users
displayUsers();
