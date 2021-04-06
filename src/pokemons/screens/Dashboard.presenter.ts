import { Navigation } from "react-native-navigation"
import { Colors } from "react-native-ui-lib"

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
                        name: 'PokeApp.AddPokemon',
                        options: {
                            topBar: {
                                leftButtons: [{
                                    id: "cancel-btn",
                                    text: "Cancel",
                                    color: Colors.red30
                                }]
                            }
                        }
                    },
                },
            ],
        },
    })
}