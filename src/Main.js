import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from './Redux/Action';

const Main = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const dataFromApi = useSelector(state => state.Reducer.data);

    useEffect(() => {
        setData(dataFromApi);
    }, [dataFromApi])


    const apihandler = () => {
        Alert.alert("working");
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                dispatch(getApi(response.data));
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <View style={{ height: '100%', width: '100%' }}>
            {/* <TouchableOpacity onPress={apihandler}>
                <Text>Pull data</Text>
            </TouchableOpacity> */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={{ color: 'black' }}>{item.name}</Text>
                )}
            />

        </View>
    )
};

export default Main