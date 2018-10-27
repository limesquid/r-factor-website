const html = `<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    var isYandexMetricaInitialized = false;
    function initializeYandexMetrica() {
        if (isYandexMetricaInitialized) {
            return;
        }
        isYandexMetricaInitialized = true;
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter50483083 = new Ya.Metrika2({
                        id:50483083,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true,
                        trackHash:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/tag.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks2");
    }
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/50483083" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->`;

module.exports = process.env.NODE_ENV === 'production' ? html : '';
