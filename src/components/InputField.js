import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../styles";

const InputField = ({
    theme,
    label,
    placeholder,
    inputConfig,
    style,
    containerStyle,
    error,
    right,
    left,
    contentStyle,
    value,
    onChangeText,
}) => {
    return (
        <View style={containerStyle}>
            <TextInput
                theme={{
                    roundness: 4,
                    colors: {
                        primary: colors.primary500,
                        onSurfaceVariant: colors.dark200,
                    },
                    ...theme,
                }}
                mode="outlined"
                cursorColor={colors.dark500}
                right={right}
                left={left}
                defaultValue=""
                label={label}
                value={value}
                onChangeText={onChangeText}
                {...inputConfig}
                placeholder={placeholder}
                style={[
                    {
                        backgroundColor: "white",
                    },
                    !left && { paddingHorizontal: 0 },
                    style,
                ]}
                textColor={colors.dark500}
                error={error}
                contentStyle={[{ fontSize: 14, padding: 0 }, contentStyle]}
            />
            {error?.length && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    errorText: {
        fontSize: 12,
        color: colors.error500,
        marginTop: 4,
    },
});
