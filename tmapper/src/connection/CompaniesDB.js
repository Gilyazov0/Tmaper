export const companiesData = {
  companyId: 1,
  companyName: "DEMOinc",

  structure: {
    employeeId: 1,
    employeeColor: "green",
    employeeName: "Jim",
    position: "FIRE MARSHALL",
    rank: "FIRE MARSHALL",
    other: null,
    department: 0,
    subordinates: [
      {
        employeeId: 2,
        employeeColor: "yellow",
        employeeName: "Bob",
        position: "BATTALION CHIEF",
        other: null,
        department: 1,
        subordinates: [
          {
            employeeId: 3,
            employeeColor: "purple",
            employeeName: "Ben",
            position: "CAPTAIN",
            other: null,
            department: 1,
            subordinates: [
              {
                employeeId: 2,
                employeeColor: "purple",
                employeeName: "John",
                position: "FIREFIGHTER",
                other: null,
                department: 3,
                subordinates: [],
              },
              {
                employeeId: 4,
                employeeColor: "green",
                employeeName: "Cheli",
                position: "FIREFIGHTER",
                other: null,
                department: 3,
                subordinates: [{}],
              },
            ],
          },
        ],
      },
    ],
  },
};

export default companiesData;
