console.log("======== Bem vindo ao sistema de notas ==========");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Digite os nomes dos seus alunos separados por vírgula (ex: Bianca,Fernando,...)\n",
  (names) => {
    readline.question(
      "Digite as notas de cada aluno (ex: 10,10,10-9,8,7)\n",
      (grades) => {
        readline.close();
        const studentsNames = names.split(",");
        const untreatedGrades = grades.split("-");
        const studentsGrades = [];
        for (untreatedGrade of untreatedGrades) {
          studentsGrades.push(untreatedGrade.split(","));
        }
        for (let i = 0; i < studentsNames.length; i++) {
          console.log(studentsNames[i]);
          console.log(studentsGrades[i]);
        }
      }
    );
  }
);
