class Materializer {
    constructor(param) {
        this.target = param;
        this.activated = false;
    }

    activate() {
        this.activated = true;
    }

    materialize() {
        if (this.activated == true) return this.target;
    }
}