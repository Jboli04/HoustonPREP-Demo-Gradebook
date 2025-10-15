const groupsData = {
  "1A": {
    groupName: "1A",
    pa: "Johnathon Bolivar",
    courses: ["Problem Solving", "Science I", "Engineering I"],
    students: [
      "Sheldon Cooper",
      "Scott Wozniak",
      "Joey Wheeler",
      "Tristia Tang",
      "Jane Doe"
    ]
  },
  "1B": {
    groupName: "1B",
    pa: "Eliza Khan",
    courses: ["Computer Science I", "Science I", "Math I"],
    students: [
      "Johnny Guitar",
      "Esmerelda Smellderelda",
      "FirstNameAh LastNameUh",
      "George Washington",
      "John Doe"
    ]
  }
};

let selectedGroup = null;
let students = [];
let courses = [];

function populateGroupDropdown() {
  const select = document.getElementById('group-select');
  select.innerHTML = `<option value="">Select a Group</option>` + 
    Object.keys(groupsData).map(groupName => `<option value="${groupName}">${groupName}</option>`).join('');
}

function confirmGroupSelection() {
  const select = document.getElementById('group-select');
  const groupName = select.value;
  if (groupName && groupsData[groupName]) {
    selectedGroup = groupsData[groupName];
    students = [...selectedGroup.students];
    courses = [...selectedGroup.courses];
    document.getElementById('edit-form').style.display = 'block';
    loadGroupData();
  }
}

function loadGroupData() {
  document.getElementById('group-name').value = selectedGroup.groupName;
  document.getElementById('pa-name').value = selectedGroup.pa;
  updateStudentList();
  updateCourseList();
}

function updateStudentList() {
  const list = document.getElementById('student-list');
  list.innerHTML = students.map(student => `<p>${student}</p>`).join('');
}

function updateCourseList() {
  const list = document.getElementById('course-list');
  list.innerHTML = courses.map(course => `<p>${course}</p>`).join('');
}

function addStudent() {
  const name = document.getElementById('student-name').value.trim();
  if (name) {
    students.push(name);
    document.getElementById('student-name').value = '';
    updateStudentList();
  }
}

function addCourse() {
  const courseName = document.getElementById('course-name').value.trim();
  if (courseName) {
    courses.push(courseName);
    document.getElementById('course-name').value = '';
    updateCourseList();
  }
}

function submitEditForm() {
  const updatedGroup = {
    groupName: document.getElementById('group-name').value.trim(),
    pa: document.getElementById('pa-name').value.trim(),
    courses: [...courses],
    students: [...students]
  };
  
  console.log('Updated Group Data:', updatedGroup);
  alert('Group updated successfully (not saved, demo mode)');
}

// Initialize
document.addEventListener('DOMContentLoaded', populateGroupDropdown);
