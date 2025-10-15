document.addEventListener('DOMContentLoaded', () => {
// This script both reads JSON files and sorts the data by "last name" in junction with the table needed.

    const table   = document.getElementById('gradebookTable');
    const tbody   = document.getElementById('studentTableBody');
    const sorter  = table.querySelector('.main-cell .sort-dropdown');
    let ascending = true;
  
    // 1) Fetch the JSON data
    fetch('/assets/data/gradebook_data.json')
      .then(res => res.json())
      .then(students => {
        // 2) Render all rows
        renderRows(students);
  
        // 3) Wire up the “Sort by last name” button
        sorter.style.cursor = 'pointer';
        sorter.addEventListener('click', () => {
          students.sort((a, b) => {
            const [lastA] = a.name.split(' ').slice(-1);
            const [lastB] = b.name.split(' ').slice(-1);
            return ascending
              ? lastA.localeCompare(lastB)
              : lastB.localeCompare(lastA);
          });
          ascending = !ascending;
          renderRows(students);
        });
      })
      .catch(err => console.error('Could not load student data:', err));
  
    // Function to clean up everything
    function renderRows(students) {
      tbody.innerHTML = '';
      students.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="student-info">
            <img src="/assets/default.png" alt="${s.name}" class="profile-pic" />
            <span>${s.name}</span>
          </td>
          ${s.grades.map(g => `<td>${g}</td>`).join('')}
          <td></td>  <!-- final grade placeholder -->
        `;
        tbody.appendChild(tr);
      });
    }
  });
  