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
        position: 'bottom-right',
        content: {
          href: '/privacy-policy',
        },
        type: 'opt-out',
        allow: 'Allow cookies',
        deny: 'Decline',
        onStatusChange: function() {
          if (this.hasConsented()) {
            if (window.initializeYandexMetrica) {
              window.initializeYandexMetrica();
            }
          } else {
            document.location.reload(true);
          }
        },
      });
    });
  }
</script>
`;

module.exports = process.env.NODE_ENV === 'production' ? html : '';
