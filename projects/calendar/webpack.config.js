const { ModuleFederationPlugin } = require('webpack').container;

/**@type {require('webpack').Configuration} */

module.exports = {
   output: {
      publicPath: 'auto', // setup the `publicHost` in `angular.json`
      uniqueName: 'calendar',
   },
   optimization: {
      runtimeChunk: false,
   },
   experiments: {
      // Allow output javascript files as module source type.
      outputModule: true,
   },
   plugins: [
      new ModuleFederationPlugin({
         name: 'calendar',
         filename: 'remoteEntry.js',
         library: {
            // because Angular v14 will output ESModule
            type: 'module',
         },
         exposes: {
            './CalendarModule': './projects/calendar/src/app/calendar/calendar.module.ts',
         },

         /**
          * shared can be an object of type SharedConfig
          * you can change this to select something can be shared
          */
         shared: ['@angular/core', '@angular/common', '@angular/router'],
         // shared: {
         //   "@angular/animations": {
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/animations/browser": {
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/common": {
         //     eager: true,
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/common/http": {
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/core": {
         //     eager: true,
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/platform-browser": {
         //     eager: true,
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/platform-browser/animations": {
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/router": {
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         //   "@angular/platform-browser-dynamic": {
         //     eager: true,
         //     singleton: true,
         //     strictVersion: true,
         //     requiredVersion: "^14.2.0",
         //   },
         // },
      }),
   ],
};
