export default {
  'schemas-to-ts': {
    enabled: true,
    resolve: './src/plugins/strapi-plugin-schemas-to-ts', // path to plugin folder
    config: {
      verboseLogs: true,
      alwaysAddEnumSuffix: false,
      alwaysAddComponentSuffix: true,
      usePrettierIfAvailable: true
    }
  },
}
