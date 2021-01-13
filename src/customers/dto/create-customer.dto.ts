export class CreateCustomerDto {
  readonly id: Number;
  readonly name: String;
  readonly username: String;
  readonly email: String;
  readonly address: {
    readonly street: String;
    readonly suite?: String;
    readonly city: String;
    readonly zipcode: String;
    readonly geo: {
      readonly lat?: String;
      readonly lng?: String;
    };
  };
  readonly phone: String;
  readonly status: Boolean;
}
