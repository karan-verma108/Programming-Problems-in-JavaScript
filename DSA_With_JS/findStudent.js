/*O(n)

const handleStudentSearch = (studentsArr, studentToSearch) => {
  let foundStudent;
  for (let i = 0; i <= studentsArr.length - 1; i++) {
    if (studentsArr[i] === studentToSearch) {
      foundStudent = `You searched for ${studentsArr[i]}`;
    } else {
      foundStudent = 'search result not found';
    }
  }
  return foundStudent;
};

const studentNames = ['roy', 'cena', 'undertaker', 'big show'];

const searchResult = handleStudentSearch(studentNames, 'big show');
console.log(searchResult);*/

/*O(1)

const findElement = (arr, index) => arr[index];

console.log(findElement([1, 2, 3, 4], 2)); */

/*O(n^2)

const newArr = [1, 2, 3, 4, 5];

for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < newArr.length; j++) {
    console.log('message');
  }
} */
