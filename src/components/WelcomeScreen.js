import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { Button } from 'native-base';

class WelcomeScreen extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden />
                <Text style={styles.textHeader}>
                    Selamat Datang
                </Text>
                <Button block info style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('LoginForm')}>
                    <Text style={styles.buttonText}>Login</Text>
                </Button>
                <Button block info style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('RegisterForm')}>
                    <Text style={styles.buttonText}>Register</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#62d660'
    },
    textHeader: {
        color: '#ffffff',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 100
    },
    buttonStyle: {
        paddingTop: 6,
        marginRight: 16,
        marginLeft: 16,
        marginBottom: 20,
        borderRadius: 6
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15
    }
});

export default WelcomeScreen;