import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screens";

// Register screens
registerScreens();

// Set root screen
Navigation.events().registerAppLaunchedListener(() => {
     Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'PokeApp.Dashboard'
                        }
                    }
                ]
            }
        }
    });
});
    