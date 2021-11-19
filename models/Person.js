class Person {
    constructor(first_name, last_name, username, password,
        email, address, month, day_num, year, status, hasCovid, schedCode) {
            this.first_name = first_name;
            this.last_name = last_name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.address = address;
            this.month = month;
            this.day_num = day_num;
            this.year = year;
            this.status = status;
            this.hasCovid = hasCovid;
            this.schedCode = schedCode;
        }
}

module.exports = Person;