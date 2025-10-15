// Placeholder course data
const coursesData = {
    "1A - Engineering": {
      name: "1A - Engineering",
      teacherName: "Mr. Samuel Nunez",
      group: "1A"
    },
    "1A - Problem Solving": {
      name: "1A - Problem Solving",
      teacherName: "Mr. Jose Viera",
      group: "1A"
    },
    "1A - Computer Science I": {
      name: "1A - Computer Science I",
      teacherName: "Ms. Eliza Khan",
      group: "1A"
    },
    "1B - Engineering": {
      name: "1B - Engineering",
      teacherName: "Mr. Samuel Nunez",
      group: "1B"
    },
    "1B - Problem Solving": {
      name: "1B - Problem Solving",
      teacherName: "Ms. Missy Cooper",
      group: "1B"
    },
    "1B - Science I": {
      name: "1B - Science I",
      teacherName: "Mr. Cool Blonde",
      group: "1B"
    }
  };
  
  const courseSelector = document.getElementById('course-selector');
  const confirmEditCourseBtn = document.getElementById('confirm-edit-course-btn');
  const editCourseFormContainer = document.getElementById('edit-course-form-container');
  
  // Enable "Edit" button when a course is selected
  courseSelector.addEventListener('change', function() {
    confirmEditCourseBtn.disabled = !this.value;
  });
  
  // Populate form when "Edit" is clicked
  confirmEditCourseBtn.addEventListener('click', function() {
    const selectedCourse = courseSelector.value;
    if (coursesData[selectedCourse]) {
      populateCourseForm(coursesData[selectedCourse]);
      editCourseFormContainer.style.display = 'block';
    }
  });
  
  // Fill form with course info
  function populateCourseForm(data) {
    document.getElementById('course-name').value = data.name || '';
    document.getElementById('teacher-name').value = data.teacherName || '';
    document.getElementById('group-name').value = data.group || '';
  }
  
  // Handle form submission
  document.querySelector('.edit-course-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const courseName = document.getElementById('course-name').value.trim();
    const teacherName = document.getElementById('teacher-name').value.trim();
    const groupName = document.getElementById('group-name').value.trim();
  
    if (!courseName || !teacherName || !groupName) {
      alert('Please fill out all fields.');
      return;
    }
  
    const updatedCourseData = {
      name: courseName,
      teacherName: teacherName,
      group: groupName
    };
  
    console.log('Updated Course:', updatedCourseData);
  
    downloadJSON(updatedCourseData, `${courseName.replace(/\s+/g, '_')}_Course.json`);
  });
  
  // Function to download updated JSON
  function downloadJSON(data, filename) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
  }
  