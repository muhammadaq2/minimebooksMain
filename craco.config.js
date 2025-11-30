module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the source-map-loader rule and modify it to ignore missing source maps
      const sourceMapLoaderRule = webpackConfig.module.rules.find((rule) => 
        rule.loader && rule.loader.includes('source-map-loader')
      );
      
      if (sourceMapLoaderRule) {
        // Ensure exclude is an array and add exclusion for @mediapipe packages
        const currentExclude = sourceMapLoaderRule.exclude;
        if (Array.isArray(currentExclude)) {
          sourceMapLoaderRule.exclude = [...currentExclude, /node_modules\/@mediapipe/];
        } else if (currentExclude) {
          sourceMapLoaderRule.exclude = [currentExclude, /node_modules\/@mediapipe/];
        } else {
          sourceMapLoaderRule.exclude = [/node_modules\/@mediapipe/];
        }
      }
      
      // Alternative approach: Configure source-map-loader to not warn about missing source maps
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.loader && rule.loader.includes('source-map-loader')) {
          rule.options = {
            ...rule.options,
            filterSourceMappingUrl: (url, resourcePath) => {
              // Suppress warnings for @mediapipe packages
              if (resourcePath.includes('@mediapipe')) {
                return false;
              }
              return true;
            }
          };
        }
      });
      
      // Suppress specific webpack warnings about missing source maps
      const currentIgnoreWarnings = webpackConfig.ignoreWarnings || [];
      webpackConfig.ignoreWarnings = [
        ...currentIgnoreWarnings,
        {
          module: /node_modules\/@mediapipe/,
        },
        /Failed to parse source map/,
        /vision_bundle_mjs\.js\.map/,
      ];
      
      return webpackConfig;
    },
  },
};
