import AsyncStorage, {} from '@react-native-async-storage/async-storage'


const storeData = async(key, value) => {
try{
    await AsyncStorage.setItem(key, JSON.stringify(value))
} catch(e){
    console.error(`Error saving data ${key}`,e)
}
}

export default storeData