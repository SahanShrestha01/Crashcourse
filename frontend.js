async function submitForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
  
    
    const response = await fetch('/api/insertData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age, gender }),
    });
  
    if (response.ok) {
      alert('Data inserted successfully');
    } else {
      alert('Error inserting data');
    }
  }
  