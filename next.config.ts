// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/doneaza',
        permanent: true, 
      },
    ];
  },
};
