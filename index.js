// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : "00100",


}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key]= value
    //Our function takes three arguments: the original employee Object, 
    //the key identifying the property we want to update, and the value we want to change its value to.
    // const newEmployee = {...employee};
   // newEmployee[key]=value
    return newEmployee;
    
}

console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
        employee[key]=value
    return employee
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'))

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}
    delete newEmployee [key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key]
    return employee;
}