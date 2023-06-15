import { View } from 'react-native';
import LanguageSelector from "../components/LanguageSelector";

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, paddingTop: 12 }}>
            <LanguageSelector />
        </View>
    );
};

export default SettingsScreen;