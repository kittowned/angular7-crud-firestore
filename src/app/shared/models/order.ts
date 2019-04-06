import { DocumentReference } from '@angular/fire/firestore';

export interface Order {
    id?: string;
    completed: boolean;
    customerRef?: DocumentReference;
    customer: object;
    foodCost: number;
    items: object;
    pickUpOn: string;
    placedOn: string;
    price: number;
    bool: boolean;
    order_number: number;
}
