

  module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'dhzkuzwgl',
          api_key: '514758594611743',
          api_secret: 'fByLYaDkg5LSIp8YgpHGGNXlwBA',
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });