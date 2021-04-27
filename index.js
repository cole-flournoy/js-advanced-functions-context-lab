/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
 let createEmployeeRecord = employeeArray => {
    return {
      firstName: employeeArray[0],
      familyName: employeeArray[1],
      title: employeeArray[2],
      payPerHour: employeeArray[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }

  let createEmployeeRecords = emplArrays => {
    return emplArrays.map(r => createEmployeeRecord(r))
  }
  
 let createTimeInEvent = function(dateTimeString){
    let [date, time] = dateTimeString.split(" ")

    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(time),
      date: date
    })
    return this
  }
  
let createTimeOutEvent = function(dateTimeString){
    let [date, time] = dateTimeString.split(" ")

    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(time),
      date: date
    })
    return this
  }
  
  let hoursWorkedOnDate = function(dateString){
    const outEvent = this.timeOutEvents.find(e => e.date === dateString)
    const inEvent = this.timeInEvents.find(e => e.date === dateString)
    return (outEvent.hour - inEvent.hour)/ 100
  }
  
  let wagesEarnedOnDate = function(dateString){
    const hours = hoursWorkedOnDate.call(this, dateString)
    return hours * this.payPerHour
  }
  

  let findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find(record => record.firstName === firstName)
  }
  
  let calculatePayroll = empRecords => {
    return empRecords.reduce((total, currentRecord) => total + allWagesFor.call(currentRecord), 0)
  }
  




 let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}