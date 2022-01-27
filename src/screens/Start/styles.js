import { StyleSheet } from "react-native";

import { theme } from "../../global/style/theme";

export const style = StyleSheet.create({
    
    container:
    {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },

    main:
    {
        backgroundColor: theme.colors.secondary,
        height: 680,
        paddingTop: 60,
        paddingHorizontal: 16,
        alignItems: 'center',
        borderBottomEndRadius: 150,
    },

    imgPresentation:
    {
        height: 250,
        width: 300,
        marginBottom: 60,
    },

    title1:
    {
        fontSize: 28,
        color: theme.colors.readind,
        textAlign: 'center',
    },

    title2:
    {
        fontSize: 28,
        color: theme.colors.readind,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },

    info:
    {
        color: theme.colors.readind,
        fontSize: 16,
        marginBottom: 20,
    },

    link:
    {
        color: theme.colors.primary,
        fontWeight: 'bold',
    },

    footer:
    {
        alignItems: 'center',
        height: '20%',
        justifyContent: 'center',
    },

    button:
    {
        flexDirection: 'row',
        backgroundColor: theme.colors.secondary,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
        height: 60,
        width: '60%'
    },

    textButton:
    {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.colors.primary,
    },

    iconButton:
    {
        height: 30,
        width: 30,
    }
})