export interface ApiLoginPayload {
  email: string;
  password: string;
}

export interface ApiLoginResponse {
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}
