module.exports = {
    apps: [{
        name: 'ufascbx2025',
        script: '.output/server/index.mjs',
        cwd: '/var/www/html/ufascbx/ufascbx2025',
        env: {
            HOST: '0.0.0.0',
            PORT: 58185,
            NODE_ENV: 'production'
        }
    }]
}