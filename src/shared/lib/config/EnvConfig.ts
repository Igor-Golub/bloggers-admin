class EnvConfig {
  public adminName: string = import.meta.env.VITE_API_ADMIN_USER_NAME;

  public adminPassword: string = import.meta.env.VITE_API_ADMIN_PASSWORD;

  public apiURL: string = import.meta.env.VITE_API_API_URL;
}

export const envConfig = new EnvConfig();
