export interface loginType {
  email: string;
  password: string;
}

export interface signupType {
  email: string;
  password: string;
  phone: number;
  name: string;
}

export interface resetPassword {
  newPassword: string;
  token: string;
}
