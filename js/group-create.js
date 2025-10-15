// Pretty but incomplete Functionality, left blueprints for future Gabriel
const students = [];
const courses = [];

document.getElementById('add-student-btn').addEventListener('click', function() {
  const id = document.getElementById('student-id').value.trim();
  const name = document.getElementById('student-name').value.trim();

  if (!id || !name) {
    alert('Please enter both Student ID and Name');
    return;
  }

  students.push({ id, name });
  updateStudentList();

  document.getElementById('student-id').value = '';
  document.getElementById('student-name').value = '';

  if (students.length > 0) {
    document.getElementById('course-section').style.display = 'block';
  }
});

document.getElementById('add-course-btn').addEventListener('click', function() {
  const course = document.getElementById('course-select').value;
  if (!course) {
    alert('Please select a course!');
    return;
  }

  if (!courses.includes(course)) {
    courses.push(course);
    updateCourseList();
  }
});

function updateStudentList() {
  const list = document.getElementById('student-list');
  list.innerHTML = students.map(student => `<p>${student.id} - ${student.name}</p>`).join('');
}

function updateCourseList() {
  const list = document.getElementById('course-list');
  list.innerHTML = courses.map(course => `<p>${course}</p>`).join('');
}

document.getElementById('create-group-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const groupName = document.getElementById('group-name').value.trim();
  const groupPA = document.getElementById('group-pa').value.trim();

  if (!groupName || students.length === 0) {
    alert('Please fill Group Name and add at least one student!');
    return;
  }

  const newGroup = {
    name: groupName,
    pa: groupPA || null,
    students,
    courses
  };
})