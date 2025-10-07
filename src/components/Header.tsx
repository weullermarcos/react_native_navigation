import { ReactNode } from "react";
import { View } from "react-native";

export function Header({children}: {children: ReactNode}) {
    return (
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop: 54 }}>
            {children}
        </View>
    );
}
