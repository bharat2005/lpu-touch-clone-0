import AsyncStorage from "@react-native-async-storage/async-storage"


const getData = async(key) => {
  try{
    const value = await AsyncStorage.getItem(key)
    return value != null ? JSON.parse(value) : null
  } catch(error){
    console.error(`Error getting data ${key}`, error)
  }
}

export default getData