const data = {
    A: {
      Subjects: ["Math", "Science", "History"],
      Faculty: ["John Smith", "Jane Doe", "David Johnson"],
      "Start Date": "2023-09-01",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Alice Brown",
          total: {
            completed: 30,
            joinedNew: 15,
            ongoing: 25,
          },
        },
        "Branch B": {
          Faculty: "Bob Wilson",
          total: {
            completed: 28,
            joinedNew: 12,
            ongoing: 22,
          },
        },
      },
    },
    B: {
      Subjects: ["English", "Physics","John Smith", "Math"],
      Faculty: ["Mary Adams", "Michael Clark", "Sarah Evans"],
      "Start Date": "2023-08-15",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Eve Green",
          total: {
            completed: 35,
            joinedNew: 20,
            ongoing: 30,
          },
        },
        "Branch B": {
          Faculty: "Frank White",
          total: {
            completed: 32,
            joinedNew: 14,
            ongoing: 28,
          },
        },
      },
    },
    C: {
      Subjects: ["Computer Science","John Smith", "Economics", "Psychology", "Math"],
      Faculty: ["George Lee", "Helen Davis", "Ivy Martin"],
      "Start Date": "2023-09-15",
      "End Date": "2023-12-31",
      Branches: {
        "Branch A": {
          Faculty: "Jack Brown",
          total: {
            completed: 40,
            joinedNew: 25,
            ongoing: 35,
          },
        },
        "Branch B": {
          Faculty: "Jill Smith",
          total: {
            completed: 38,
            joinedNew: 18,
            ongoing: 32,
          },
        },
      },
    },
  };
  
 ;
//  let commonFaculty = [];
// data.A.Faculty.forEach((facultyA) => {
//   const isCommonFaculty =
//     data.B.Faculty.includes(facultyA) && data.C.Faculty.includes(facultyA);
//   if (isCommonFaculty) commonFaculty.push(facultyA);
// });

// if (commonFaculty.length === 0) {
//   console.log(`no common faculty`);
// } else {
//   console.log(commonFaculty);
// }

// const branchData = Object.values(data).flatMap((program) => {
//     return Object.values(program.Branches);
//   });
//   console.log(branchData);
  
// const branchData = Object.values(data).flatMap((program) => {
//     return program;
//   });
//   console.log(branchData);

// const branchData = Object.values(data).flatMap((program) => {
//     return Object.values(program.Branches);
//   });
//   console.log(branchData);
  
//   branchData.map((Branches) => {
//     console.log(Branches.Faculty);
//   });
  
// 

const branchData = Object.values(data).flatMap((program) => {
    return Object.values(program.Branches);
  });
  console.log(branchData);
  
  const bdata = branchData.map((Branches) => {
    return Branches.total;
  });
  console.log(bdata);
  bdata.map((datas) => {
    console.log(datas.completed);
  });
  