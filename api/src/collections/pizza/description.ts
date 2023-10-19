import {defineDescription} from "sonata-api"

export const [Pizza, description] = defineDescription({
    $id: "pizza",
    required:[],
    properties:{
        flavours:{
            type:"array",
            items:{
                enum:[
                    "mussarela",
                    "calabresa",
                    "portuguesa",
                    "bacon"
                ]
            }
        },
        edges:{
            enum:[
                "sem_borda",
                "catupiry",
                "cheedar"
            ]
        },
        price:{
            type:"number",
        },
        size:{
            enum:[
                "p",
                "m",
                "x",
                "xl"
            ]
        },
        premium:{
            type:"boolean"
        }
    },
    icon: 'apps',
    presets:[
        'crud'
    ]
})


