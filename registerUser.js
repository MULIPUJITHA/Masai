// Simulate user registration
function registerUser(callback) {
  setTimeout(() => {
    const success = Math.random() < 0.9; // Simulate 90% success rate
    if (success) {
      console.log("User registered successfully");
      callback(null); // Proceed to the next step
    } else {
      callback("Error: Registration failed");
    }
  }, 1000);
}

// Simulate sending a verification email
function sendVerification(callback) {
  setTimeout(() => {
    const success = Math.random() < 0.8; // Simulate 80% success rate
    if (success) {
      console.log("Verification email sent");
      callback(null); // Proceed to the next step
    } else {
      callback("Error: Verification email failed");
    }
  }, 1000);
}

// Simulate logging in the user
function loginUser(callback) {
  setTimeout(() => {
    const success = Math.random() < 0.95; // Simulate 95% success rate
    if (success) {
      console.log("User logged in successfully");
      callback(null); // Proceed to the next step
    } else {
      callback("Error: Login failed");
    }
  }, 1000);
}

// Simulate displaying a welcome message
function displayWelcomeMessage(callback) {
  setTimeout(() => {
    console.log("Welcome message displayed");
    callback(null); // Workflow complete
  }, 1000);
}

// Execute the workflow
registerUser((error) => {
  if (error) {
    console.error(error);
    return; // Stop workflow on failure
  }
  sendVerification((error) => {
    if (error) {
      console.error(error);
      return; // Stop workflow on failure
    }
    loginUser((error) => {
      if (error) {
        console.error(error);
        return; // Stop workflow on failure
      }
      displayWelcomeMessage((error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Workflow completed successfully");
        }
      });
    });
  });
});
