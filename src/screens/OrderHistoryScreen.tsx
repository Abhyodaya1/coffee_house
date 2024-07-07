/* eslint-disable prettier/prettier */
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import Emptyanimation from '../components/Emptyanimation';
import Popupanimation from '../components/Popupanimation';
import Orderhistorycard from '../components/Orderhistorycard';
const Orderhistoryscreen = ({navigation}:any) => {
  const OrderHistoryList = useStore((state:any) => state.OrderHistoryList);
  const tabbarheight = useBottomTabBarHeight();
  const [showanimation,setshowanimation] = useState(false)
  const navigationhandler=({index,type,id}:any)=>{navigation.push('Details',{
    index,type,id});}; 
   const buttonpreshandler = ()=>{
    setshowanimation(true);
    setTimeout(()=>{
      setshowanimation(false)
    },2000)
   }
  return (
    <View style={styles.sc}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      {showanimation?(<Popupanimation style={styles.animation1} source={'../lottie/download.json'}/>):(<></>)}
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.sc1}>
        <View style={[styles.sc2,{marginBottom:tabbarheight}]}>
          <View style={styles.innersc}>
          <HeaderBar title="Order History" />
          {OrderHistoryList.length == 0 ? (<Emptyanimation title={'no orders'}/>) : (<View style={styles.lc}>
            {OrderHistoryList.map((data:any,index:any)=>(
              <Orderhistorycard key={index.toString()} 
              navigationHandler={navigationhandler}
              CartList={data.CartList}
              CartListPrice={data.cartlistprice}
              OrderDate={data.OrderDate}/>
            ))}
          </View>)}
          </View>
          {OrderHistoryList.length>0? <TouchableOpacity style={styles.downloadbutton}>
            <Text style={styles.buttontext}
            onPress={()=>{buttonpreshandler}}>Download</Text>
          </TouchableOpacity> : (<></>)}
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  sc:{
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
   },
   sc1:{flexGrow:1},
   sc2:{ flex:1,
    justifyContent: 'space-between',
   },
  innersc:{ flex: 1},
  lc:{paddingHorizontal:SPACING.space_20,
    gap: SPACING.space_30,
  },
  animation1:{
    height:250,
  },
  downloadbutton:{
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  buttontext:{ 
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
   }
})

export default Orderhistoryscreen;
