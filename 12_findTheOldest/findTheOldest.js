const findTheOldest = function(people) {
    var oldestPerson;
    var greatestAge = 0;
    for (let i=0; i < people.length; i++){
        if (!people[i].yearOfDeath){
            age = 2024 - people[i].yearOfBirth;
            console.log(people[i].name, 2024)
            
        }
        else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (age > greatestAge){
            greatestAge = age;
            oldestPerson = people[i];
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
