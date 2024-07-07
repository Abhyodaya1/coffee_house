/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import Orderitemcard from './Orderitemcard';
interface OrderhistorycardProps{
    navigationhandler:any;
    CartList:any;
    cartlistprice:string;
    OrderDate:string;
}
const Orderhistorycard: React.FC<OrderhistorycardProps> = ({
    navigationhandler,
    CartList,
    cartlistprice,
    OrderDate,
}) => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View>
            <Text style={styles.text1}>Order Time</Text>
            <Text style={styles.text2}>{OrderDate}</Text>
        </View>
        <View style={styles.pricecontainer}>
            <Text style={styles.text1}>Total amount</Text>
            <Text style={styles.text21}>{cartlistprice}</Text>
        </View>
      </View>
      <View style={styles.listcontainer}>
          {CartList.map((data:any,index:any)=>(
           <TouchableOpacity key={index.toString() + data.id}onPress={()=>{navigationhandler({
            index:data.index,
            id: data.id,
            type:data.type,
           })}}>
            <Orderitemcard type={data.type}
            name={data.name}
            imagelink_square={data.imagelink_square}
            special_ingredient={data.special_ingredient}
            prices={data.prices}
            ItemPrice={data.ItemPrice}/>
           </TouchableOpacity>
          ))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  view1:{
    gap:SPACING.space_10,
  },
  view2:{
    flexDirection:'row',
    justifyContent:'space-between',
    gap:SPACING.space_20,
    alignItems:'center',
  },
  text1:{
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_16,
    color:COLORS.primaryWhiteHex
  },
  text2:{
    fontFamily:FONTFAMILY.poppins_light,
    fontSize:FONTSIZE.size_16,
    color:COLORS.primaryWhiteHex
  },
  pricecontainer:{
    alignItems:"flex-end",
  },
  text21:{   fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_18,
    color:COLORS.primaryOrangeHex},
    listcontainer:{
      gap: SPACING.space_20,
    }
})

export default Orderhistorycard;
