/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import BGicons from '../components/BGicons';
import GradientBGIcon from '../components/GradientBGIcon';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import { useStore } from '../store/store';
import Popupanimation from '../components/Popupanimation';
const Paymentlist = [{
  name:'wallet',
  icon: 'icon',
  isIcon: true,
},
{
  name:'Google Pay',
  icon: require('../assets/app_images/gpay.png'),
  isIcon: false,
},
{
  name:'Apple Pay',
  icon: require('../assets/app_images/applepay.png'),
  isIcon: false,
},
{
  name:'Amazon Pay',
  icon: require('../assets/app_images/amazonpay.png'),
  isIcon: false,
},
];
const Paymentscreen = ({navigation,route}:any) => {
  const [paymentMode,setpayment] = useState('credit card');
  const [showanimation,setshowanimation] = useState(false)
  const calculateCartPrice = useStore((state:any) => state.calculateCartPrice);
  const  addToOrderHistoryListFromCart = useStore((state:any) => state. addToOrderHistoryListFromCart);
   const buttonpresshandler =()=>{
    setshowanimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setshowanimation(false)
      navigation.navigate('History')
    }, 2000);
   };
  return (
    <View style={styles.sc}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showanimation?(<Popupanimation style={styles.animation1} source={require('../lottie/successful.json')}/>):(<></>)}
      <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={styles.scflex}>
        <View style={styles.headercontainer}>
          <TouchableOpacity onPress={()=>(navigation.pop())}>
          <GradientBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
          </TouchableOpacity>
          <Text style={styles.textcont}>Payment</Text>
          <View style={styles.viewcont} />
        </View>
        <View>
          <TouchableOpacity>
          
              <View style ={[styles.creditcardcontainer,
                {
                  borderColor:
                  paymentMode=='credit card' ?
                  COLORS.primaryOrangeHex:
                  COLORS.primaryGreyHex
                },
              ]}>
                <Text style={styles.text1}>Credit Card</Text>
                <View style={styles.view1}>
                  <LinearGradient
                  start={{x:0,y:0}}
                  end={{x:1,y:1}}
                  colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
                  style={styles.lineargradient}>
                    <View style={styles.view2}>
                      <CustomIcon name='chip'
                      size={FONTSIZE.size_20*2} 
                      color={COLORS.primaryOrangeHex}/>
                      <CustomIcon
                      name='visa'
                      size={FONTSIZE.size_30*2}
                      color={COLORS.primaryWhiteHex} />
                    </View>
                    <View style={styles.creditcardnumber}>
                      <Text style={styles.ccn}>1234</Text>
                      <Text style={styles.ccn}>2345</Text>
                      <Text style={styles.ccn}>6889</Text>
                      <Text style={styles.ccn}>2356</Text>
                    </View>
                    <View style={styles.creditcardrow}>
                      <View style={styles.CreditCardNameContainer}>
                        <Text style={styles.subtitle}>card holder name</Text>
                        <Text style={styles.cct}>abhi</Text>
                      </View>
                      <View style={styles.ccdc}>
                        <Text style={styles.subtitle}>Expiry Date</Text>
                        <Text style={styles.cct} >12/12/28</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              </View>
              </TouchableOpacity>
              {Paymentlist.map((data:any)=> (
            <TouchableOpacity key={data.name}
             onPress={()=>{setpayment(data.name)}}>
              <PaymentMethod paymentMode={paymentMode} name={data.name} icon={data.icon} isIcon={data.isIcon} />
            </TouchableOpacity>
          ))}
        </View>
        
       </ScrollView>
      <PaymentFooter price={{price: route.params.amount,currency:'$'}} buttonPressHandler={buttonpresshandler} buttontitle={`Pay  with ${paymentMode}`} />
    </View>
  );
};



const styles = StyleSheet.create({
  sc:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex,
  },
  scflex:{
    flexGrow:1,
  },
  headercontainer:{
    paddingHorizontal:SPACING.space_24,
    paddingVertical:SPACING.space_15,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  textcont:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
  color:COLORS.primaryWhiteHex},
  viewcont:{
    height:SPACING.space_36,
    width:SPACING.space_36,
  },
  creditcardcontainer:{
    padding:SPACING.space_10,
    gap:SPACING.space_10,
    borderRadius:BORDERRADIUS.radius_15,
    borderWidth:3,
   
  },
  text1:{ fontFamily:FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
  color:COLORS.primaryWhiteHex,
marginLeft:SPACING.space_10},
 view1:{
  borderRadius:BORDERRADIUS.radius_25,
  backgroundColor:COLORS.primaryGreyHex
 },
 lineargradient:{ borderRadius:BORDERRADIUS.radius_25,
  paddingHorizontal:SPACING.space_15,
  gap:SPACING.space_36,
  paddingVertical:SPACING.space_10,
 },
 view2:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',

 },
subtitle: {
  fontFamily: FONTFAMILY.poppins_regular,
  fontSize: FONTSIZE.size_12,
  color: COLORS.secondaryLightGreyHex,
},
cct: {
  fontFamily: FONTFAMILY.poppins_medium,
  fontSize: FONTSIZE.size_18,
  color: COLORS.primaryWhiteHex,
},
creditcardrow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
creditcardnumber: {
  flexDirection: 'row',
  gap: SPACING.space_10,
  alignItems: 'center',
},
ccn: {
  fontFamily: FONTFAMILY.poppins_semibold,
  fontSize: FONTSIZE.size_18,
  color: COLORS.primaryWhiteHex,
  letterSpacing: SPACING.space_4 + SPACING.space_2,
},
ccdc: {
  alignItems: 'flex-end',
},
CreditCardNameContainer: {
  alignItems: 'flex-start',
},
animation1:{flex:1}
});
export default Paymentscreen;
