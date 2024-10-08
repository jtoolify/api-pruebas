export const checkPermissions = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.userRole;

        if (!userRole) {
            return res.status(401).json({ message: 'Unauthorized: No role provided.' });
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ 
                message: 'Forbidden: You do not have the necessary permissions.',
                userRole, 
                allowedRoles 
            });
        }

        next();
    };
};
