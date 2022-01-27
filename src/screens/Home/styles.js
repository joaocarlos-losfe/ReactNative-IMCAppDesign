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


    title:
    {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.readind,
        textAlign: 'center',

        marginBottom: 60,
        
    },

   
    footer:
    {
        alignItems: 'flex-start',
        height: '20%',
        justifyContent: 'center',
        paddingHorizontal: 36,
    },

    InfoContainerColect:
    {
        alignItems: 'baseline',
        justifyContent: 'center',
        marginBottom: 20,
    },

    infoText:
    {
        color: theme.colors.readind,
        marginBottom: 15,
    },

    InfoColect:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input:
    {
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.primary,
        height: 40,
        width: 100,
        padding: 10,
        textAlign: "right",
        marginRight: 10,

    },

    inputIcon:
    {
        height: 40,
        width: 40,
    },

    button:
    {
        marginTop: 60,
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
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
        color: theme.colors.secondary,
    },

    iconButton:
    {
        height: 30,
        width: 30,
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