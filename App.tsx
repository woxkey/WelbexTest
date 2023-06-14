import {StatusBar} from 'expo-status-bar';

import RootNavigator from './src/navigation';
import {I18nextProvider} from "react-i18next";
import i18n from './src/localizition'

export default function App() {
    return (
        <>
            <I18nextProvider i18n={i18n}>
                <RootNavigator/>
                <StatusBar style="auto"/>
            </I18nextProvider>

        </>
    );
}