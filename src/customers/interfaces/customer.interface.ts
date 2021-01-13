import { Document } from 'mongoose';

export interface Customer extends Document {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: {
    street: String;
    suite?: String;
    city: String;
    zipcode: String;
    geo: {
      lat?: String;
      lng?: String;
    };
  };
  phone: String;
  status: Boolean;
}
