module.exports = [
  "strapi::errors",
  {
    
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': ["'self'", 'data:', 'blob:', `metalages.s3.ap-south-1.amazonaws.com`],
              'media-src': ["'self'", 'data:', 'blob:', `metalages.s3.ap-south-1.amazonaws.com`],
              upgradeInsecureRequests: null,
          },
        },
      },
    },
];
 
 