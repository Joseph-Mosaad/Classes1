
class user{
    constructor(firstName,LastName,password,email){
    
    this.firstName =firstName;
    this.LastName =LastName;
    this.password =password;
    this.email =email;
    
    
    }
    
    login(){
       return(`${this.firstName} logged in sucessfully!`);
    
    }
    
    logout(){
        return(`${this.firstName} logged out sucessfully!`);
    
    }
    
    }
    
    class Uuser extends user {
        constructor(firstName,LastName,password,email,age,gender,address) {
            super(firstName,LastName,password,email);
            this.age = age;
            this.gender  =gender;
            this.address = address;
    
        }
    
        
    }
    
    let user1 = new Uuser("Joseph","Mosaad","dgd5454541","jozef_jozef_80@yahoo.com",28,"Male","Sohag,90 st");
    
    console.log(user1);
    console.log(user1.login());
    console.log(user1.logout());
    
    let user2 = new Uuser("joseph2","Mosaad2","dgd5454541","jozef_jozef_80@yahoo.com",29,"Male","Sohag,90 st");
    console.log(user2);
    console.log(user2.login());
    console.log(user2.logout());
    
        