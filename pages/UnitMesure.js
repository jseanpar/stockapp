// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to register the user

import React, { useState } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

import lib from '../utils/functions';

var db = openDatabase({ name: 'UserDatabase.db' });

const UnitMesure = ({ navigation }) => {
    let [unitName, setUnitName] = useState('');

    let register_unit = () => {
        console.log(lib.currentDate);

        if (!unitName) {
            alert('Please fill unit name');
            return;
        }

        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO table_unit (unit_name,create_date,modifiedDate) VALUES (?,?,?)',
                [unitName, lib.currentDate, null],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(
                            'Success',
                            'You are Registered Successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => navigation.navigate('HomeScreen'),
                                },
                            ],
                            { cancelable: false }
                        );
                    } else alert('Registration Failed');
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1, justifyContent: 'space-between' }}>
                            <Mytextinput
                                placeholder="Enter Name"
                                onChangeText={(unitName) => setUnitName(unitName)}
                                style={{ padding: 10 }}
                            />
                            <Mybutton title="Submit" customClick={register_unit} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default UnitMesure;