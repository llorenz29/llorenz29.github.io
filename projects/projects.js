//Hyperlinks
const projectLinks = {
    'website': '../',
    'genAI': '../articles/genAI',
    'ecgNN': 'https://github.com/llorenz29/ECGNN',
    'celeb-vae': 'https://github.com/llorenz29/Celeb-Variational-Autoencoder',
    'camel-up': 'https://github.com/llorenz29/camel-up-AI',
    'pairHMM': 'https://github.com/llorenz29/PairHMM',
    'pred-LOS': 'https://github.com/llorenz29/Predicting-Mortality-Length-of-Stay-and-Pre-Admission-Conditions-in-Intensive-Care-Units',
    'dial-a-ride': 'https://github.com/llorenz29/1D-Dial-A-Ride-Optimization',
    'dutch-mapping': 'https://alexisballo.shinyapps.io/finalProject/',
    'pathfinding': 'https://github.com/llorenz29/Pathfinding-Visualization'
  };

  Object.keys(projectLinks).forEach(id => {
    document.getElementById(id).addEventListener('click', function () {
      window.location.href = projectLinks[id];
    });
  });