const html = `
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js"></script>
<script>
  if (navigator.userAgent !== 'ReactSnap') {
    window.addEventListener('load', function() {
      window.cookieconsent.initialise({
        palette: {
          popup:{
            background: '#333'
          },
          button: {
            background: '#14a7d0'
          }
        },
        position: 'bottom-right'
      });
    });
  }
</script>
`;

module.exports = process.env.NODE_ENV === 'production' ? html : '';
