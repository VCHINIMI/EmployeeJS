//  Welcome to Employee Wage Calculator Problem In Java Script

//  Check If Employee Is Present or Absent
{
    const IS_ABSENT = 0 ; 
    let empCheck = Math.floor(Math.random() * 10)%2;
    if(empCheck == IS_ABSENT) {
        console.log("Employee is ABSENT");
    }
    else {
        console.log("Employee is PRESENT");
    }
}

// Calculate Employee Wage
const WAGE_PER_HOUR = 20 ; // Declaring as global for using wage calculator function anywhere
{
    const IS_PART_TIME = 1 ;
    const IS_FULL_TIME = 2 ;
    const PART_TIME_HOURS = 4 ;
    const FULL_TIME_HOURS = 8 ;

    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME :
                return PART_TIME_HOURS ;
            case IS_FULL_TIME : 
                return FULL_TIME_HOURS ;
            default :
                return 0;
        }
    }
    let empCheck = Math.floor(Math.random() * 10)%3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR ;
    console.log("Employee Wage = " + empWage);
}

// Calculate Wage for 20 days
{
    let empHrs = 0;
    const WORKING_DAYS = 20 ;
    for(let i = 0; i <= WORKING_DAYS; i++) {
        let empCheck = Math.floor(Math.random() * 10)%3;
        empHrs = empHrs + getWorkingHours(empCheck);
    }
    let empWage = empHrs * WAGE_PER_HOUR ;
    console.log("Aggregate Wage for 20 days = " + empWage);
}

function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR ;
}

//Calculate till Limit : 20 days or 160 Hours
{
    let wageMap = new Map() ;
    let empHrs = 0 ;
    let workingDay = 0 ;
    let empDailyWage = new Array() ;
    
    while(empHrs <= 160 && workingDay <= 20) {
        let empCheck = Math.floor(Math.random() * 10)%3;
        empHrs = empHrs + getWorkingHours(empCheck);
        workingDay++ ;
        let wage = calculateDailyWage(getWorkingHours(empCheck));
        empDailyWage.push(wage);
        wageMap.set(workingDay, wage);
    }
    let empWage = calculateDailyWage(empHrs);
    console.log("Total days = "+workingDay + " Total Hours  : "+ empHrs + " wage : "+ empWage);
    console.log(empDailyWage);
    
    //SUM FUNCTION USED IN FOREACH
    let totEmpWage = 0 ;
    function sum(dailyWage) {
        totEmpWage = totEmpWage + dailyWage ;
    }
    
    //FOREACH METHOD
    empDailyWage.forEach(sum) ;
    console.log("TOTAL WAGE BY FOREACH : "+ totEmpWage) ;
    console.log("\n");

    //REDUCE METHOD
    let empTotalWageByReduce = empDailyWage.reduce((acc,val)=>acc+val,0);
    console.log("TOTAL WAGE BY REDUCE : "+ empTotalWageByReduce);
    console.log("\n");

    //MAP METHOD
    let dayCount = 0 ;
    let mapArray = empDailyWage.map(empDily => "Wage for Day "+ (++dayCount) + " is : "+ empDily);
    console.log(mapArray);
    console.log("\n");

    //FILTER METHOD TO CHECK FOR 160 WAGE
    let filterArray = mapArray.filter(emp => emp.includes("160"));
    console.log(filterArray);
    console.log("\n");

    //FIND METHOD    
    let findArray = filterArray.find(emp => emp.includes("160"));
    console.log(findArray);
    console.log("\n");

    //CHECK IF EVERY FULLTIME WAGE HAS 160
    let boolVal = filterArray.every(emp => emp.includes("160"));
    console.log("EVERY VALUE IN FILTER ARRAY HAS 160 AS WAGE (TRUE/FALSE) : " + boolVal);

    //CHECK IF SOME WAGE IS NOT 160
    let boolVal2 = filterArray.some(emp => emp.includes("80"));
    console.log("SOME VALUE IN FILTER ARRAY HAS 80 AS WAGE (TRUE/FALSE) : " + boolVal2);

    //TOTAL DAYS WORKED (USED REDUCE METHOD)
    let value1 = empDailyWage.reduce( (acc,val) => (val>0)? acc+1 : acc , 0);
    console.log("Total days worked : "+ value1);

    //MAP
   let calSum = Array.from(wageMap.values()).reduce((acc, val) => acc+val,0);
   console.log(calSum);
}
