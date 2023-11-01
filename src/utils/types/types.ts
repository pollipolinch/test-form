export interface newUser {
  id?: string | number;
  name?: string;
  job?: string;
  company?: string;
  reason?: string;
  dateStart?: string | Date;
  dateEnd?: string | Date;
  role?: Role[];
}
export interface User {
  id: number;
  name: string;
  job: string;
  company: string;
  reason: string;
  dateStart: string;
  dateEnd: string;
  role?: Role[];
}
export interface Role {
  name: string;
  status: boolean;
}
export interface State {
  stage: number;
  type: null | number;
  modal: boolean;
  roles: Role[];
  company: string[];
  people: string[];
  users: User[];
  newUser:any;
}
