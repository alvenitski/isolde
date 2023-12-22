const serie_1Array = []
for (let i = 1; i < 9; i++) {
    serie_1Array.push('../../images/paintings/tyrol/t' + i + '.jpg')
}
export const data = [
    [
        {
            name: 'serie-t1',
            container: 'container-t33',
            imgArray: serie_1Array,
            details: {
                container: 'details-tyrol',
                medium: 'huile sur MDF.',
                format: '33x25cm.',
                year: '2019.'
            }
        },
        {
            name: 'serie-t2',
            container: 'container-t81',
            imgArray: ['../../images/paintings/tyrol/t-grand.jpg'],
            details: {
                container: 'details-tyrol',
                medium: 'huile sur MDF.',
                format: '81x61cm.',
                year: '2023.'
            }
        },

        {
            name: 'serie-t3',
            container: 'container-t33',
            imgArray: ['../../images/paintings/tyrol/t9a.jpg',
                '../../images/paintings/tyrol/t9b.jpg',
                '../../images/paintings/tyrol/t9c.jpg'],
            details: {
                container: 'details-tyrol',
                medium: 'huile sur MDF.',
                format: '33x25cm.',
                year: '2019.'
            }
        },
    ],
    [
        {
            name: 'serie-p1',
            container: 'container-p1',
            imgArray: ['../../images/paintings/paysages/p1a.jpg',
                '../../images/paintings/paysages/p1b.jpg',
                '../../images/paintings/paysages/p1c.jpg'
            ],
            details: {
                container: 'details-paysage',
            }
        },
        {
            name: 'serie-p2',
            container: 'container-p2',
            imgArray: ['../../images/paintings/paysages/p2a.jpg',
                '../../images/paintings/paysages/p2b.jpg',
            ],
            details: {
                container: 'details-paysage',
            }
        },
        {
            name: 'serie-p3',
            container: 'container-p3',
            imgArray: ['../../images/paintings/paysages/p3a.jpg',
                '../../images/paintings/paysages/p3b.jpg'
            ],
            details: {
                container: 'details-paysage',
            }
        },
        {
            name: 'serie-p4',
            container: 'container-p4',
            imgArray: ['../../images/paintings/paysages/p4a.jpg',
                '../../images/paintings/paysages/p4b.jpg',
                '../../images/paintings/paysages/p4c.jpg',
                '../../images/paintings/paysages/p4d.jpg'
            ],
            details: {
                container: 'details-paysage',
            }
        },
        {
            name: 'serie-p5',
            container: 'container-p5',
            imgArray: ['../../images/paintings/paysages/p5a.jpg',
                '../../images/paintings/paysages/p5b.jpg'
            ],
            details: {
                container: 'details-paysage',
            }
        },
        {
            name: 'serie-p6',
            container: 'container-p6',
            imgArray: ['../../images/paintings/paysages/p6a.jpg',
                '../../images/paintings/paysages/p6b.jpg',
                '../../images/paintings/paysages/p6c.jpg',
            ],
            details: {
                container: 'details-paysage',
            }
        },
    ],
    [
        {
            name: 'serie-pers1',
            container: 'container-pers1',
            imgArray: ['../../images/paintings/perso/pers1.jpg'],
            details: {
                container: 'details-p6',
                medium: 'huile sur MDF.',
                format: '81x61cm.',
                year: '2019.'
            }
        },
        {
            name: 'serie-pers2',
            container: 'container-pers2',
            imgArray: ['../../images/paintings/perso/pers2a.jpg', '../../images/paintings/perso/pers2b.jpg'],
            details: {
                container: 'details-pers2',
                medium: 'huile sur MDF.',
                format: '33x25cm.',
                year: '2019.'
            }
        },
        {
            name: 'serie-pers3',
            container: 'container-pers3',
            imgArray: ['../../images/paintings/perso/pers3.jpg'],
            details: {
                container: 'details-pers3',
                medium: 'huile sur MDF.',
                format: '36x30cm.',
                year: '2023.'
            }
        }
    ]
]
