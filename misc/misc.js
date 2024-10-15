
//Hyperlinks
const projectLinks = {
    'greta-pic': '../../articles/greta',
    'pnw': '../../articles/pnw'
  };
  
  Object.keys(projectLinks).forEach(id => {
    document.getElementById(id).addEventListener('click', function () {
      window.location.href = projectLinks[id];
    });
});