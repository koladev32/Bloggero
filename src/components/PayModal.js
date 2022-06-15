import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const PayModal = props => {
  const {isOpen, navigation} = props;
  const [modalVisible, setModalVisible] = useState(isOpen);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Enjoy your private content! No ads or tracking.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonSubscription]}
              onPress={() => console.log('Closed.')}>
              <Text style={styles.textStyle}>Upgrade for $US 5,99 / month</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.goBack()}>
              <Text style={styles.textStyleClose}>Go back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '80%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 7,
    borderColor: '#000',
    paddingHorizontal: 35,
    paddingVertical: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 8,
  },
  buttonClose: {
    backgroundColor: '#fff',
    color: '#000',
  },
  buttonSubscription: {
    backgroundColor: '#000',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleClose: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PayModal;
