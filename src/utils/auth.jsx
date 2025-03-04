export const signUp = async (email, password) => {
  localStorage.setItem(
    "user",
    JSON.stringify({ email, token: "fake-jwt-token" })
  );
  return { message: "User registered successfully!" };
};

export const signIn = async (email, password) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email) {
    return { token: "fake-jwt-token", message: "Login successful!" };
  }
  throw new Error("Invalid credentials");
};

export const checkToken = async (token) => {
  return token === "fake-jwt-token" ? { loggedIn: true } : { loggedIn: false };
};
