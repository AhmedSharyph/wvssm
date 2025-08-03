fetch('https://script.google.com/macros/s/AKfycbwDSXKAUOg-PR1FUqZNTNEU1vFpn4Letcp7KGxdJLfZxb1xNVQ7hun4NPWwQIa1WhZu/exec')
  .then(res => res.json())
  .then(data => {
    const select = document.getElementById('jobTitle');
    select.innerHTML = '<option value="">Select a job title</option>';
    data.forEach(title => {
      const opt = document.createElement('option');
      opt.value = title;
      opt.textContent = title;
      select.appendChild(opt);
    });
    new TomSelect(select);
  })
  .catch(() => {
    const select = document.getElementById('jobTitle');
    select.innerHTML = '<option value="">[Offline] Cannot load job titles</option>';
  });
