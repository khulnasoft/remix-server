/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    ignoredRouteFiles: ['**/.*'],
    assetsBuildDirectory: 'public/web/build',
    publicPath: '/web/build/',
    serverDependenciesToBundle: ['@khulnasoft/ui'],
    // appDirectory: "app",
    // serverBuildPath: "build/index.js",
    watchPaths: ['../../packages/ui', '../../packages/shared'],
};
