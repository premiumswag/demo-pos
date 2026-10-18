(function () {
    const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    window.POS_API_URL = isLocal
        ? 'http://localhost:3000/api'
        : 'https://demo-pos-backend-0jd6.onrender.com/api';
})();
