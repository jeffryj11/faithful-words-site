fetch('https://docs.google.com/document/d/e/2PACX-1vRKP5i4pkpwYHKHjpQB99YAWHtgMVrcO3Jm0Kf8RJyjVRVoj9dUluwIDNjsnKhuypRnxI9FP0bewQo_/pub?embedded=true')
  .then(response => response.text())
  .then(data => {
    document.getElementById('post').innerHTML = data;
  })
  .catch(error => {
    document.getElementById('post').innerHTML = '<p>Failed to load content. Please check back later.</p>';
  });