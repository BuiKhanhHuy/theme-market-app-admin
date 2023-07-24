export interface FilterFormInterface {
  kw: string;
  professionId: number | null;
  roleName: string | null;
  isEmailVerified: boolean | null;
  isActive: boolean | null;
}

export interface AddFormInterface {
  email: string;
  firstName: string;
  lastName: string;
  professionId: number | null;
  roleName: string;
  password: string;
  isActive: boolean;
  isEmailVerified: boolean;
}

export interface EditFormInterface {
  email: string;
  firstName: string;
  lastName: string;
  professionId: number | null;
  roleName: string;
  password: string;
  isActive: boolean;
  isEmailVerified: boolean;
}
