document.getElementById('staffForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    idNumber: form.idNumber.value,
    jobTitle: form.jobTitle.value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/YOUR_SUBMISSION_SCRIPT_ID/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.getElementById('successMsg').classList.remove('d-none');
      form.reset();
    } else {
      alert('Submission failed.');
    }
  } catch (err) {
    alert('Offline or error submitting the form.');
  }
});