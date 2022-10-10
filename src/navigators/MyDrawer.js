import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PatientList from '../screens/PatientList';
import AddPatient from '../screens/AddPatient';
import EditPatient from '../screens/EditPatient';
import PatientDetails from '../screens/PatientDetails';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="PatientList" component={PatientList} />
      <Drawer.Screen name="AddPatient" component={AddPatient} />
      <Drawer.Screen name="EditPatient" component={EditPatient} />
      <Drawer.Screen name="Article" component={PatientDetails} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
