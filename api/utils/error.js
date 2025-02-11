export const errorHandler = (message, statusCode = 500) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.message = message;
    return error;
};
