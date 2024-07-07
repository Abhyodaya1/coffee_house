/* eslint-disable prettier/prettier */
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import Emptyanimation from '../components/Emptyanimation';
import PaymentFooter from '../components/PaymentFooter';
import Cartitem from '../components/Cartitem';

const Cartscreen = ( {navigation,route}:any) => {
  const CartList = useStore((state:any) => state.CartList);
  const CartPrice = useStore((state:any) => state.CartPrice);
  const incrementCartItemQuantity = useStore((state:any) => state.incrementCartItemQuantity);
  const decrementCartItemQuantity = useStore((state:any) => state.decrementCartItemQuantity);
  const calculateCartPrice = useStore((state:any) => state.calculateCartPrice);
   const tabBarHeight = useBottomTabBarHeight();
  const buttonPressHandler = () =>{
 navigation.push('Payment',{amount: CartPrice });
  };
  const incrementCartItemQuantityHandler = (id:string, size:string)=>{ incrementCartItemQuantity(id,size);
    calculateCartPrice();
  };
  const decrementCartItemQuantityHandler = (id:string, size:string)=>{ decrementCartItemQuantity(id,size);
    calculateCartPrice();
  };

  return (
    <View style={styles.sc}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle = {styles.sc1}>
        <View style={[styles.sc2, {marginBottom:tabBarHeight}]}>
          <View style={styles.innersc}>
          <HeaderBar title="Cart" />
          
         {CartList.length == 0 ? (<Emptyanimation title={'cart list empty'}/>) : (<View style={styles.lc}>
          {CartList.map((data:any)=>(
            <TouchableOpacity onPress={()=>{navigation.push('Details',{index:data.index,id:data.id,type:data.type});}}
            key={data.id}>
              <Cartitem id={data.id} roasted={data.roasted} name={data.name} special_ingredient={data.special_ingredient} imagelink_square={data.imagelink_square} prices={data.prices} type={data.type} incrementCartItemQuantityHandler={incrementCartItemQuantityHandler} decrementCartItemQuantityHandler={decrementCartItemQuantityHandler} />
            </TouchableOpacity>
          ))}
         </View>)}
        </View>
        {CartList.length != 0 ? (<PaymentFooter
          buttonPressHandler={buttonPressHandler} price={{price: CartPrice, currency: '$'}} buttontitle={'pay'} />) : (<></>)}</View>
        </ScrollView>
    </View>
  );
};



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
  gap: SPACING.space_20,
},
});
export default Cartscreen;

