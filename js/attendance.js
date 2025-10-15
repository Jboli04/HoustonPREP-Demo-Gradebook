document.querySelectorAll('.attendance-buttons').forEach(group => {
    const presentBtn = group.querySelector('.present');
    const absentBtn = group.querySelector('.absent');
  
    presentBtn.addEventListener('click', () => {
      presentBtn.style.backgroundColor = '#4055A8'; // blue
      presentBtn.style.color = 'white';
      absentBtn.style.backgroundColor = 'white';
      absentBtn.style.color = 'black';
    });
  
    absentBtn.addEventListener('click', () => {
      absentBtn.style.backgroundColor = '#666'; // gray
      absentBtn.style.color = 'white';
      presentBtn.style.backgroundColor = 'white';
      presentBtn.style.color = 'black';
    });
  });