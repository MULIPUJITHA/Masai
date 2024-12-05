function evaluateEmployeePerformance(employees) {

  const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);

  const performanceEvaluations = filteredEmployees.map(employee => {
    let performance;
    if (employee.rating > 4.5) {
      performance = "Excellent";
    } else if (employee.rating >= 3 && employee.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }
    return { name: employee.name, performance };
  });

 
  const sortedEvaluations = performanceEvaluations.sort((a, b) => {
    const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
    return performanceOrder[b.performance] - performanceOrder[a.performance];
  });

  return sortedEvaluations;
}


