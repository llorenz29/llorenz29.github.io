//Hyperlinks
const projectLinks = {
    '40-Brian': '../articles/brian',
    'Baseball': '../articles/baseball'
  };

  Object.keys(projectLinks).forEach(id => {
    document.getElementById(id).addEventListener('click', function () {
      window.location.href = projectLinks[id];
    });
  });