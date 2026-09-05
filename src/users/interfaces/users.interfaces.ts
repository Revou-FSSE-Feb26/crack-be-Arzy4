import { UserRole } from '../../generated/prisma/browser';

export interface User {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string | null;
    role: UserRole;
    createdAt?: Date;
    updatedAt?: Date;
}