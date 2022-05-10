

module.exports = ({env}) => ({
  
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId:'AKIATBE2UU5PLPRFDKER',
          secretAccessKey: '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',
          region:'us-east-1',
          params: {
            Bucket:'metalage'
          },
        },
      },
    },
  });