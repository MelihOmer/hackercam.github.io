document.addEventListener("DOMContentLoaded", function() {
    const iframeContainer = document.getElementById('iframe-container');

    const videoURLs = [
        'images/stock_vido1.mp4?autoplay=1',
        'images/stock_vido5.mp4?autoplay=1',
        'images/stock_vido4.mp4?autoplay=1',
        'images/stock_vido3.mp4?autoplay=1',
        'images/stock_vido2.mp4?autoplay=1',
        'images/stock_vido.mp4?autoplay=1'
    ];


    // Videoları yükleme fonksiyonu
    function loadVideos() {
        videoURLs.forEach((videoURL, index) => {
            const iframe = document.createElement('iframe');
            iframe.width = 350;
            iframe.height = 150;
            iframe.src = videoURL;
            iframe.frameBorder = 0;
            iframe.gesture = 'media';
            iframe.allow = 'encrypted-media';
            iframe.allowFullscreen = true;
            iframeContainer.appendChild(iframe);
        });
    }

    // Videoları yükle
    loadVideos();
});





