export const signUp = async ({ email, password, name }) => {
  localStorage.setItem(
    "user",
    JSON.stringify({ name, email, token: "fake-jwt-token" })
  );
  return { message: "User registered successfully!" };
};

export const signIn = async ({ email, password }) => {
  return { token: "fake-jwt-token", message: "Login successful!" };
};

export const checkToken = async (token) => {
  return token === "fake-jwt-token" ? { loggedIn: true } : { loggedIn: false };
};
