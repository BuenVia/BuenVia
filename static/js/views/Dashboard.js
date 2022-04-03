import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Dashboard')
    }

    async getHtml() {
        return `
        <h1>Title page</h1>
        <p>First line of blah blah blah</p>
        <p>Second line of blah blah blah</p>
        `
    }
}