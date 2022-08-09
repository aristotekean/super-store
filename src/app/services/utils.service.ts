import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private validationMessages = {
    first_name: [
      { type: 'required', message: 'The first name is required' },
      { type: 'minlength', message: 'The first name must be more than 2 characters' }
    ],

    last_name: [
      { type: 'required', message: 'The last name is required' },
      { type: 'minlength', message: 'The last name must be more than 2 characters' }
    ],

    name: [
      { type: 'required', message: 'The full name is required' },
      { type: 'minlength', message: 'The full name must be more than 2 characters' }
    ],

    username: [
      { type: 'required', message: 'The username is required' },
      { type: 'minlength', message: 'The username be 3 or more characters' }
    ],

    email: [
      { type: 'required', message: 'The email is required' },
      { type: 'pattern', message: 'The email format is invalid' }
    ],

    phone: [
      { type: 'required', message: 'The phone is required' },
      { type: 'minlength', message: 'The phone number must be 5 or more characters' }
    ],

    identification: [
      { type: 'required', message: 'The identification is required' },
      { type: 'minlength', message: 'The identification number must be 7 or more characters' }
    ],

    state: [
      { type: 'required', message: 'The state is required' },
      { type: 'minlength', message: 'The state must be 3 or more characters' }
    ],

    city: [
      { type: 'required', message: 'The city is required' },
      { type: 'minlength', message: 'The city name must be 3 or more characters' }
    ],

    address: [
      { type: 'required', message: 'The adress is required' },
      { type: 'minlength', message: 'The adress number must be 5 or more characters' }
    ],

    country: [
      { type: 'required', message: 'The country is required' },
      { type: 'minlength', message: 'The country must be 3 or more characters' }
    ],

    postal_code: [
      { type: 'required', message: 'The postal code is required' },
      { type: 'minlength', message: 'The postal code must be 3 or more characters' }
    ],

    licence_number: [
      { type: 'required', message: 'The licence number is required' },
      { type: 'minlength', message: 'The licence number must be 6 or more characters' }
    ],

    routing_number: [
      { type: 'required', message: 'The routing number is required' },
      { type: 'minlength', message: 'The routing number must be 9 or more characters' }
    ],

    account_number: [
      { type: 'required', message: 'The account number is required' },
      { type: 'minlength', message: 'The account number must be 5 or more characters' }
    ],

    password: [
      { type: 'required', message: 'The password is required' },
      { type: 'minlength', message: 'The password must be 5 or more characters' }
    ],

    current_password: [
      { type: 'required', message: 'The current password is required' },
      { type: 'minlength', message: 'The current password must be 8 or more characters' }
    ],

    new_password: [
      { type: 'required', message: 'The new password is required' },
      { type: 'minlength', message: 'The new password must be 8 or more characters' }
    ],

    repeat_password: [
      { type: 'required', message: 'The repeat new password is required' },
      { type: 'minlength', message: 'The repeat new password must be 8 or more characters' }
    ],

    password_confirmation: [
      { type: 'required', message: 'The confirm password is required' },
      { type: 'minlength', message: 'The confirm password must be 8 or more characters' }
    ],

    opinion: [
      { type: 'required', message: 'The opinion is required' },
      { type: 'minlength', message: 'The review must be at least 3 characters' },
      { type: 'maxlength', message: 'The opinion must be 3 or 20 characters' }
    ],

    experience: [
      { type: 'required', message: 'The opinion is required' },
      { type: 'minlength', message: 'The review must be at least 20 characters' },
      { type: 'maxlength', message: 'The opinion must be 20 or 300 characters' }
    ],
    role: [
      { type: 'required', message: 'The role is required' },
    ],
    process_name: [
      { type: 'required', message: 'The process name is required' },
    ],
    process_type: [
      { type: 'required', message: 'The process name is required' },
    ],
    repetition: [
      { type: 'required', message: 'The repetition is required' },
    ],
    description: [
      { type: 'required', message: 'The description is required' },
    ],
    contac_type_name: [
      { type: 'required', message: 'The contac type name is required' },
    ],
    title: [
      { type: 'required', message: 'The title is required' },
    ],
    date: [
      { type: 'required', message: 'The date is required' },
    ],
    amount: [
      { type: 'required', message: 'The amount is required' },
    ],
    invoice_type: [
      { type: 'required', message: 'The invoice type is required' },
    ],
    listing: [
      { type: 'required', message: 'The listing is required' },
    ],
    item: [
      { type: 'required', message: 'The item is required' },
    ],
    quantity: [
      { type: 'required', message: 'The quantity is required' },
    ],
    rate: [
      { type: 'required', message: 'The rate is required' },
    ],
    message: [
      { type: 'required', message: 'The message is required' },
    ],
    subject: [
      { type: 'required', message: 'The subject is required' },
    ],
    listing_name: [
      { type: 'required', message: 'The listing name is required' },
    ],
    owner: [
      { type: 'required', message: 'The owner name is required' },
    ],
    listing_type: [
      { type: 'required', message: 'The listing type is required' },
    ],
    expenses: [
      { type: 'required', message: 'The expenses is required' },
    ],
    beds_number: [
      { type: 'required', message: 'The beds number is required' },
    ],
    baths_number: [
      { type: 'required', message: 'The baths number is required' },
    ],
    cleaning_fee: [
      { type: 'required', message: 'The cleaning fee is required' },
    ],
    percentage: [
      { type: 'required', message: 'The percentage is required' },
    ],
    property_id: [
      { type: 'required', message: 'The property id is required' },
    ],
    confirmation_code: [
      { type: 'required', message: 'The confirmation code is required' },
    ],
    booked: [
      { type: 'required', message: 'The booked input is required' },
    ],
    check_in: [
      { type: 'required', message: 'The check in is required' },
    ],
    check_out: [
      { type: 'required', message: 'The check out is required' },
    ],
    reservation_status: [
      { type: 'required', message: 'The reservation status is required' },
    ],
    guest_name: [
      { type: 'required', message: 'The guest name is required' },
    ],
    guest_phone: [
      { type: 'required', message: 'The guest phone is required' },
    ],
    number_of_guest: [
      { type: 'required', message: 'The number of guest is required' },
    ],
    number_of_nights: [
      { type: 'required', message: 'The number of nights is required' },
    ],
    earnings: [
      { type: 'required', message: 'The earnings input is required' },
    ],
    expiration_date: [
      { type: 'required', message: 'The expiration date is required' },
    ],
    brand: [
      { type: 'required', message: 'The brand is required' },
    ],
    model: [
      { type: 'required', message: 'The model is required' },
    ],
    year: [
      { type: 'required', message: 'The year is required' },
    ],
    plate: [
      { type: 'required', message: 'The plate is required' },
    ],
    rent_price: [
      { type: 'required', message: 'The rent price is required' },
    ],
    external_id: [
      { type: 'required', message: 'The external id is required' },
    ],
    serial: [
      { type: 'required', message: 'The serial is required' },
    ],
    connection_type: [
      { type: 'required', message: 'The connection type is required' },
    ],
    storage_system: [
      { type: 'required', message: 'The storage system is required' },
    ],
    condition: [
      { type: 'required', message: 'The condition is required' },
    ],
    location: [
      { type: 'required', message: 'The location is required' },
    ],
    manufacturer: [
      { type: 'required', message: 'The manufacturer is required' },
    ],
    purchase: [
      { type: 'required', message: 'The purchase date is required' },
    ],
    i_max: [
      { type: 'required', message: 'The i_max is required' },
    ],
    i_b: [
      { type: 'required', message: 'The i_b is required' },
    ],
    i_n: [
      { type: 'required', message: 'The i_n is required' },
    ],
    seals: [
      { type: 'required', message: 'The seals is required' },
    ],
  };

  constructor() { }


  getValidationMessages(): object {
    return this.validationMessages;
  }
}
