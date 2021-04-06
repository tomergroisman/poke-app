import { Navigation } from "react-native-navigation"

// Push pokemon view screen to the stack
export function pushViewScreen(componentId: string, id: number) {
    Navigation.push(componentId, {
        component: {
            name: "PokeApp.PokemonView",
            passProps: {
                id
            }
        }
    })
}

// Push add pokemon modal to the stack
export function pushAddModal() {
    Navigation.showModal({
        stack: {
            children: [
                {
                    component: {
                        name: 'PokeApp.AddPokemon'
                    },
                },
            ],
        },
    })
}