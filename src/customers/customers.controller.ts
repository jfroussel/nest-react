import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  async findAll() {
    return this.customersService.findAll();
  }
  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }
  
  @Post()
  create(@Body() newCustomer: CreateCustomerDto) {
    this.customersService.create(newCustomer);
  }
  
  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customersService.delete(id);
  }

  @Patch(':id')
  updateCustomer(@Param('id') id: string, @Body() customer: CreateCustomerDto) {
    return this.customersService.update(id, customer);
  }
  */
}
