const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('monthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const todayButton = document.getElementById('todayButton');

let currentDate = new Date();

const events = {
  '2025-06-03': ['Teacher Meeting'],
  '2025-06-12': [, 'Grades Due'],
  '2025-06-20': ['No Class'],
  '2025-06-30': ["Final's Day 1"],
  '2025-07-01': ["Final's Day 2"],
  '2025-07-02': ['Engineering Day'],
  '2025-07-03': ['UHD Day'],
};

function renderCalendar() {
  calendar.innerHTML = '';

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  // Center the month and year
  monthYear.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

  // Calculate days from previous month to display
  const prevMonth = new Date(year, month, 0);
  const prevMonthDays = prevMonth.getDate();
  const prevMonthName = prevMonth.toLocaleString('default', { month: 'short' });
  
  // Add previous month days
  for (let i = 0; i < startDay; i++) {
    const day = prevMonthDays - startDay + i + 1;
    const emptyDiv = document.createElement('div');
    emptyDiv.innerHTML = `<span class="day-number other-month"><span class="month-indicator">${prevMonthName}</span> ${day}</span>`;
    emptyDiv.classList.add('other-month-day');
    calendar.appendChild(emptyDiv);
  }

  // Fill days for current month
  for (let day = 1; day <= totalDays; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayDiv = document.createElement('div');
    
    // Add day number at the top
    const dayNumber = document.createElement('span');
    dayNumber.classList.add('day-number');
    dayNumber.textContent = day;
    
    // Check if it's today
    const today = new Date();
    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dayNumber.classList.add('today');
    }
    
    dayDiv.appendChild(dayNumber);

    // Add events if they exist
    if (events[dateString]) {
      events[dateString].forEach(eventText => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.textContent = eventText;
        dayDiv.appendChild(eventDiv);
      });
    }

    calendar.appendChild(dayDiv);
  }

  // Calculate how many cells we need to complete the grid (either 5x7=35 or 6x7=42)
  const totalCells = startDay + totalDays;
  const rowsNeeded = Math.ceil(totalCells / 7);
  const cellsNeeded = rowsNeeded * 7;
  const remainingCells = cellsNeeded - totalCells;

  // Get next month name
  const nextMonth = new Date(year, month + 1, 1);
  const nextMonthName = nextMonth.toLocaleString('default', { month: 'short' });

  // Add next month days
  for (let i = 1; i <= remainingCells; i++) {
    const nextMonthDay = document.createElement('div');
    nextMonthDay.innerHTML = `<span class="day-number other-month"><span class="month-indicator">${nextMonthName}</span> ${i}</span>`;
    nextMonthDay.classList.add('other-month-day');
    calendar.appendChild(nextMonthDay);
  }
}

// Event Listeners
prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

todayButton.addEventListener('click', () => {
  currentDate = new Date();
  renderCalendar();
});

// Initial render
renderCalendar();