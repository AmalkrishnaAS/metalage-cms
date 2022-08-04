

module.exports = ({env}) => ({
  
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId:'AKIAYWZPHCGMMJLV7EVN',
          secretAccessKey: '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',
          region:'ap-south-1',
          params: {
            Bucket:'metalage-strapi'
          },
        },
      },
    },
  });