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

    imgResult:
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
        marginBottom: 50,
    },

    resultStatus1:
    {
        fontSize: 24,
        color: theme.colors.readind,
        textAlign: 'center',
        marginBottom: 5,
    },

    resultStatus2:
    {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.readind,
        textAlign: 'center',
        marginBottom: 5,
    },

    footer:
    {
        alignItems: 'flex-start',
        height: '20%',
        justifyContent: 'center',
        paddingHorizontal: 36,
    },

    backBtn:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    iconBack:
    {
        height: 30,
        width: 30,
    },

    textBackBtn:
    {
        fontWeight: 'bold',
        color: theme.colors.secondary,
        fontSize: 16,
        marginLeft: 10,
    }
    

})