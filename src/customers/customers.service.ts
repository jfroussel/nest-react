import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createCustomer = new this.customerModel(createCustomerDto);
    return await createCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

 /*

  findOne(id: string) {
    return this.customers.find(customer => customer.id === +id);
  }
  
  create(customer: CreateCustomerDto) {
    this.customers = [...this.customers, customer];
  }
  
  delete(id: string) {
    const nbOfCustomersBeforeDelete = this.customers.length;
    this.customers = [
      ...this.customers.filter(customer => customer.id !== +id),
    ];
    if (this.customers.length < nbOfCustomersBeforeDelete) {
      return { deletedCustomers: 1, nbCustomers: this.customers.length };
    } else {
      return { deletedCustomers: 0, nbCustomers: this.customers.length };
    }
  }

  update(id: string, customer: Customer) {
    const customerToUpdate = this.customers.find(
      customer => customer.id === +id,
    );
    if (!customer) {
      return new NotFoundException('not find this customer !');
    }
    if (customer.name) {
      customerToUpdate.name = customer.name;
    }
    if (customer.username) {
      customerToUpdate.username = customer.username;
    }
    if (customer.email) {
      customerToUpdate.email = customer.email;
    }
    if (customer.address.street) {
      customerToUpdate.address.street = customer.address.street;
    }
    if (customer.address.suite) {
      customerToUpdate.address.suite = customer.address.suite;
    }
    if (customer.address.city) {
      customerToUpdate.address.city = customer.address.city;
    }
    if (customer.address.zipcode) {
      customerToUpdate.address.zipcode = customer.address.zipcode;
    }
    if (customer.address.geo.lat) {
      customerToUpdate.address.geo.lat = customer.address.geo.lat;
    }
    if (customer.address.geo.lng) {
      customerToUpdate.address.geo.lng = customer.address.geo.lng;
    }
    if (customer.phone) {
      customerToUpdate.phone = customer.phone;
    }
    if (customer.hasOwnProperty('status')) {
      customerToUpdate.status = customer.status;
    }
    const updatedCustomers = this.customers.map(customer =>
      customer.id !== +id ? customer : customerToUpdate,
    );
    this.customers = [...updatedCustomers];
    return { updatedCustomers: 1, customer: customerToUpdate };
  }
  */
}
