//  Welcome to Employee Wage Calculator Problem In Java Script

//  Check If Employee Is Present or Absent
{
    const IS_ABSENT = 0 ; 
    let empCheck = Math.floor(Math.random() * 10)%2;
    if(empCheck == IS_ABSENT) {
        console.log("Employee is ABSENT");    
        return;
    }
    else {
        console.log("Employee is PRESENT");
    }
}