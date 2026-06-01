export interface AuthTheme {
  primaryColor?: string;
  backgroundColor?: string;
}

export interface AuthConfig {
  roles: string[];
  theme?: AuthTheme;
}