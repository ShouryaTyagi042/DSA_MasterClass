class Student{
    constructor(firstName, secondName, year) {
        this.firstName = firstName ;
        this.secondName = secondName ;
        this.year = year ;
        this.scores = [];
    }

    addScores(){
        return this.scores ;
    }

    static enrollStudents() {
        return "Enrolled" ;
    }
}

let s1 = new Student("Shourya","Tyagi",3) ;

console.log(s1.firstName) ;
