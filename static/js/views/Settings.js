import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Settings')
    }

    async getHtml() {
        return `
        <h1>Settings page</h1>
        <p>An entirely different page<p>
        `
    }
}