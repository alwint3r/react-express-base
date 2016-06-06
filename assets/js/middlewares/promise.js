
export default function promiseMiddleware() {
    return next => action => {
        if (!action.promise) {
            return next(action);
        }

        return action.promise().then(result => {
            return next({ type: action.type, result: result });
        })
        .catch(ex => {
            return next(action);
        });
    };
};
