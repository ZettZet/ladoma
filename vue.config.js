module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/ladoma/' : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/global.sass"
                `
            }
        }
    }
}
