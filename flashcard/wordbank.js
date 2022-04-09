export default class wordObj {
    constructor(word, infinitive, pronoun, form, translation) {
        this.word = word,
        this.infinitive = infinitive,
        this.pronoun = pronoun,
        this.form = form,
        this.translation = translation
    }
}

export const wordList = [
    new wordObj('soy', 'ser', 'yo', 'presente', 'I am'),
    new wordObj('eres', 'ser', 'tú', 'presente', 'You are'),
    new wordObj('es', 'ser', 'El', 'presente', 'He / She / It is'),
    new wordObj('somos', 'ser', 'Nosotros', 'presente', 'We are'),
 ]