export type AuthUser = {
  id: string; // Supabase auth user id
  email: string;
};

export type SignInInput = {
  email: string;
  password: string;
};

export type SignUpInput = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type AuthError =
  | "INVALID_CREDENTIALS"
  | "EMAIL_ALREADY_IN_USE"
  | "INVALID_INPUT"
  | "USER_NOT_FOUND"
  | "SESSION_ERROR";
