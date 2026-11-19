class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    backHistory: string[];
    frontHistory: string[];
    constructor(homepage: string) {
        this.backHistory = [homepage];
        this.frontHistory = [];
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.backHistory.push(url);
        this.frontHistory = [];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps): string {
        while (steps-- > 0 && this.backHistory.length > 1) {
            this.frontHistory.push(this.backHistory.pop());
        }
        return this.backHistory[this.backHistory.length - 1];
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps): string {
        while (steps-- && this.frontHistory.length > 0) {
            this.backHistory.push(this.frontHistory.pop());
        }
        return this.backHistory[this.backHistory.length - 1];
    }
}
