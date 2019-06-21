export interface LoginEntity {
  email: string;
  password: string;
}

export const createEmptyLogin = (): LoginEntity => ({
  email: '',
  password: '',
});
