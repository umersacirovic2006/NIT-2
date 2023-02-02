const students = [
    {name:"Suhail" , surname:"Bazi" , subjects:["English", "Language history", "Grammar", "Arabic", "Turkish"] , grades:[9, 8, 9, 10, 10] , course:"Language" },
    {name:"Abdullah" , surname:"Al Wahya" , subjects:["Math", "Arts", "Geography", "Chemistry", "Physics"] , grades:[5, 10, 8, 9, 3] , course:"Architecture" },
    {name:"Abdi" , surname:"Al Nasr" , subjects:["Math", "Economy", "Accounting", "Finance", "Marketing"] , grades:[9, 10, 8, 6, 8] , course:"Business" },
    {name:"Meryam" , surname:"Ghazali" , subjects:["Electronics", "Communication", "Aviation", "Automotive Engineering", "Arts"] , grades:[4, 8, 9, 7, 10] , course:"Engineering" },
    {name:"Sara" , surname:"Hadid" , subjects:["Botany", "Anatomy", "Chemistry", "Analysis", "Microbiology"] , grades:[7, 9, 8, 10, 10] , course:"Pharmacy" },
    {name:"Bilal" , surname:"Agovic" , subjects:["Algebra", "Calculus", "Geometry", "Arithmetic", "Trigonometry"] , grades:[9, 8, 10, 6, 9] , course:"Math" },
    {name:"Alen" , surname:"Kalac" , subjects:["C", "Java", "C++", "C#", "PHP"] , grades:[8, 10, 7, 8, 5] , course:"Computer Science" },
    {name:"Selma" , surname:"Gaddafi" , subjects:["Anatomy", "Botany", "Zoology", "Microbiology", "Genetics"] , grades:[9, 6, 7, 8, 9] , course:"Biology" },
    {name:"Yasmin" , surname:"Ibnu Umer" , subjects:["General Psychology", "History of Psychology", "Cognitive Psychology", "Abnormal Psychology", "Developmental Psychology"] , grades:[10, 9, 9, 8, 9] , course:"Psychology" },
    {name:"Seida" , surname:"Qureshia" , subjects:["Field Archeology", "History", "Science in Archeology", "Introduction to Archeology", "Methods in Archaeology"] , grades:[10, 8, 9, 6, 5] , course:"Archeology" },
]

console.log(students);

const filteredGrades = []

const filteringGrades = students.filter((a) => filteredGrades.push(a.grades))
// console.log(filteredGrades)
// thanks to Imran Zukorlic

const averageGradeFirst = filteredGrades[0].reduce((prev, curr) => (prev + curr) / 5 ,0)
const averageGradeSecond = filteredGrades[1].reduce((prev, curr) => (prev + curr) / 5 ,0)
const averageGradeThird = filteredGrades[2].reduce((prev, curr) => (prev + curr) / 5 ,0)
const averageGradeFourth = filteredGrades[3].reduce((prev, curr) => (prev + curr) / 5 ,0)
const averageGradeFifth = filteredGrades[4].reduce((prev, curr) => (prev + curr) / 5 ,0)

const averageGrades = {averageGradeFirst, averageGradeSecond, averageGradeThird, averageGradeFourth, averageGradeFifth}

students.push(averageGrades)

// console.log(averageGrades);

// console.log(averageGradeFirst, averageGradeSecond, averageGradeThird, averageGradeFourth, averageGradeFifth);

console.log(students);
