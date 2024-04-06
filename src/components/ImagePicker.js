import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { colors } from "../../styles";

const PickImage = ({ label, setSelectedImage, existingImage }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(existingImage || "");
    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 4],
            quality: 1,
            allowsEditing: true,
            base64: true,
        });

        if (!result.canceled) {
            setIsLoading(true);
            setImage(result.assets[0].uri);
            const formData = new FormData();
            formData.append("image", {
                uri: result.assets[0].uri,
                type: "image/jpeg",
                name: "image.jpg",
            });
            fetch(
                "https://api.imgbb.com/1/upload?key=87e8e1bf702d6fb550ee78ef762e55da",
                {
                    method: "POST",
                    body: formData,
                }
            )
                .then((res) => res.json())
                .then((imageData) => {
                    const imageUrl = imageData?.data?.url;
                    setSelectedImage(imageUrl);
                    setIsLoading(false);
                });
        }
    };
    const removeImageHandler = () => {
        setImage("");
        setSelectedImage("");
    };
    return (
        <View style={{ marginTop: 8 }}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.container}>
                {image ? (
                    <View style={{ position: "relative" }}>
                        <Image source={{ uri: image }} style={styles.image} />
                        {isLoading && (
                            <View style={styles.spinner}>
                                <ActivityIndicator
                                    color={colors.primary500}
                                    size="large"
                                />
                            </View>
                        )}
                        {isLoading ? null : (
                            <Pressable
                                onPress={removeImageHandler}
                                style={({ pressed }) => [
                                    styles.removeImage,
                                    pressed && styles.pressed,
                                ]}
                            >
                                <AntDesign
                                    name="close"
                                    size={16}
                                    color="white"
                                />
                            </Pressable>
                        )}
                    </View>
                ) : (
                    <Pressable
                        disabled={isLoading}
                        onPress={selectImage}
                        style={({ pressed }) => [
                            styles.picker,
                            pressed && styles.pressed,
                        ]}
                    >
                        <MaterialCommunityIcons
                            name="image-plus"
                            size={32}
                            color={colors.primary500}
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default PickImage;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    picker: {
        borderStyle: "dashed",
        borderColor: colors.primary500,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 100,
    },
    label: {
        fontWeight: "500",
        marginVertical: 4,
    },
    pressed: {
        opacity: 0.6,
    },
    image: {
        borderWidth: 1,
        borderColor: colors.border,
        height: 100,
        width: 100,
        marginBottom: 20,
        borderRadius: 6,
    },
    removeImage: {
        position: "absolute",
        right: 6,
        top: 6,
        height: 24,
        width: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: colors.primary500,
    },
    spinner: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 20,
        justifyContent: "center",
    },
});
