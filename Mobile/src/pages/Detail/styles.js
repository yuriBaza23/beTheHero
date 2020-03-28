import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: "bold"
    },

    incidentList: {
        marginTop: 32
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    
    contactTitle: {
        fontSize: 20,
        color: '#13131a',
        fontWeight: 'bold'
    },

    contactDescription: {
        fontSize: 15,
        marginTop: 16,
        marginBottom: 16,
        lineHeight: 24,
        color: '#737380'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        height: 50,
        borderRadius: 8,
        backgroundColor: '#E02041',
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});