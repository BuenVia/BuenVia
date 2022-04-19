export default class Grammar {
    constructor(type) {
        this.type = type
    }
}

class Underline extends Grammar {
    constructor(type, instruction, sentences, correct) {
        super(type)
        this.instruction = instruction
        this.sentences = sentences
        this.correct = correct
    }
}

const nouns = new Underline('Nouns', 'Click all the nouns in these sentences', 
    [
        'Odio la geografía y el inglés.',
        'Mi hermano compró unos zapatos nuevos',
        'Los deberes son siempre dificiles'
    ],
    ['geografía ', 'inglés.'])
const adjectives = new Grammar('Adjectives')
const adverbs = new Grammar('Adverbs')

export const grammarType = [nouns, adjectives, adverbs]