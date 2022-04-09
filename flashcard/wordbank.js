export default class wordObj {
    constructor(category, words) {
        this.category = category,
        this.words = words
    }
}

class words {
    constructor(spa, eng) {
        this.spa = spa,
        this.eng = eng
    }
}

const colors = new wordObj('Colours',[
    new words ('rojo', 'red'),
    new words ('amarillo', 'yellow'),
    new words ('azul', 'blue'),
    new words ('blanco', 'white'),
    new words ('claro', 'clear')
    ]
)

const numbers = new wordObj('Numbers',[
    new words ('uno', 'one'),
    new words ('dos', 'two'),
    new words ('tres', 'three'),
    new words ('cuatro', 'four'),
    new words ('cinco', 'five')
    ]
)

const work = new wordObj('Work',[
    new words ('a tiempo completo', 'full time'),
    new words ('a tiempo parcial', 'part time'),
    new words ('el amuncio de trabajo', 'job advert'),
    new words ('el aprendiz', 'apprentice'),
])

export const col = [colors, numbers, work]