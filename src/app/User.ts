export default class RegisterModel {
    first_name: String;
    last_name: String;
    email: String;
    password: String;
    rank: Number;
    saved: [{
        make: String,
        model: String,
        year: String,
        dealer: String,
        price: Number
    }];
    location: Number;
}