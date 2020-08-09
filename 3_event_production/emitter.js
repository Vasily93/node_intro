//creating my own event emitter

const Emitter = {
    _events : {},
    on(eventName, handler) {
        if(this._events[eventName]) {
            this._events[eventName].push(handler);
        } else {
            this._events[eventName] = [handler];
        }
    },
    emit(eventName, data) {
        const handlers = this._events[eventName];
        handlers.forEach(handler => {
            handler(data);
        });
    }
};


module.exports = Emitter;
