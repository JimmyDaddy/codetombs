
class EventEmitter {
  constructor(maxListeners) {
    this.events = new Map();
    this.maxListeners = maxListeners || 10;
  }

  _checkParams(event, listener) {
    if (!event) {
      console.error('event should not be null!');
      return false;
    }
    if (!listener || typeof listener !== 'function') {
      console.error('listener should be a function!');
      return false;
    }

    return true;
  }

  _addListener(event, listener, stick = true) {
    let myListener = listener;
    if (!stick) {
      myListener = (...args) => {
        listener(args);
        this.removeListener(event, myListener);
      }
      myListener.realListener = listener;
    }
    if (this.events.has(event)) {
      this.events.get(event).push(myListener);
    } else {
      const listeners = [myListener];
      this.events.set(event, listeners);
    }
    if (this.events.get(event).length > this.maxListeners) {
      console.warn(`there are too much listener on event ${event}`);
    }
  }

  addListener(event, listener) {
    if(this._checkParams(event, listener)) {
      this._addListener(event, listener);
    }
  }

  on(event, listener) {
    this._addListener(event, listener);
  }

  once(event, listener) {
    if (this._checkParams(event, listener)) {
      this._addListener(event, listener, false);
    }
  }

  listeners(event) {
    if (this.events.has(event)) {
      return this.events.get(event).map((listenerObj) => listenerObj.realListener || listenerObj);
    }
    return [];
  }

  removeAllListeners(event) {
    if (event) {
      return this.events.delete(event);
    } else {
      this.events.clear();
      return true;
    }
  }

  removeListener(event, listener) {
    if (this.events.has(event)) {
      const listeners = this.events.get(event);
      this.events.set(event, listeners.filter(it => it !== listener));
    }
  }

  setMaxListeners(n) {
    this.maxListeners = n;
  }

  emit(event, ...args) {
    if (this.events.has(event)) {
      this.events.get(event).forEach(listener => listener(...args));
    }
  }
}

module.exports = EventEmitter;
