import { ActivityIndicator, Modal, StatusBar, Text, View } from "react-native";
import LoadingView, {} from '../src/components/LoadingView'
import MyColors, {} from '../src/constants/MyColors'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'white'
      }}
    >
          
     <Modal visible={true} backdropColor={1} animationType='fade'>
        <View style={{marginHorizontal:'auto', marginVertical:'auto'}}>
          <LoadingView />
        </View>
     </Modal>
    </View>
  );
}
