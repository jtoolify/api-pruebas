const logger = (req, res, next) => {
    if (process.env.LOG_MODE === 'true') {
        const { method, url } = req;
        const start = Date.now();
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        res.on('finish', () => {
            const duration = Date.now() - start;
            console.log(`[${new Date().toISOString()}] ${method} ${url} - ${res.statusCode} (${duration}ms) - IP: ${ip}`);
        });
    }
    next();
};

export default logger;
