export const configureCors = () => {
    return {
        origin: process.env.CORS_ORIGIN.split(','), 
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    };
};
