class Person {
    constructor(FirstName, LastName, phone, age, address) {
        this.id = 123; //unique id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.phone = null;
        this.age = null;
        this.address = null;
    }
}

class JobTitle{
    constructor(title) {
        this.title = title;
    }
}

class Employee extends Person {
    constructor(FirstName, LastName, phone, age, address, JobTitle, salary) {
        super(FirstName, LastName, phone, age, address);
        this.JobTitle = new JobTitle(JobTitle);
        this.salary = salary;

    }
}

class Address {
    constructor(street, city, state){
        this.street = street;
        this.city = city;
        this.state = state;
    }
}

class Company {
    constructor(name){
        this.name = name;
        this.address = address;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    searchEmployeeByName(FirstName) {
        return this.employees.find()
    }
}