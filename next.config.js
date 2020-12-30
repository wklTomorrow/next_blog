const path = require('path');

module.exports = {
    basePath: '/docs',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'src')],
    },
    env: {
        REACT_ENV: 'react_env'
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            // '/': { page: '/' },
            // '/about': { page: '/about' },
            // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
            // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
            // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
            '/test/hello': { page: '/test/hello-next', query: {title: 'hello'} },
            '/test/learn': { page: '/test/learn-next', query: {title: 'learn'} },
        }
    },
}