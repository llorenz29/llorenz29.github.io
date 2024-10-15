//Hyperlinks
const projectLinks = {
    '40-Brian': '../articles/brian'
  };

  Object.keys(projectLinks).forEach(id => {
    document.getElementById(id).addEventListener('click', function () {
      window.location.href = projectLinks[id];
    });
  });