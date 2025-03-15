export interface Customer {
    id: string;
    fullName: string;
    email: string;
    password: string;
    employees: Employee[];
  }
  
  export interface Employee {
    id: string;
    name: string;
    role: string;
    email: string;
  }
  