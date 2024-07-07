/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBGIcon from './GradientBGIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface ImagebackgroundinfoProps{
   EnableBackHandler: boolean;
   imagelink_portrait: ImageProps;
   type: string;
   id: string;
   favourite: boolean;
   name: string;
   special_ingredient: string;
   ingredients:string;
   average_rating:number;
   ratings_count: string;
   roasted: string;
   BackHandler?: any;
   ToggleFavourite:any;
}
const Imagebackgroundinfo: React.FC<ImagebackgroundinfoProps>  = ({
    EnableBackHandler,
    imagelink_portrait,
    type,
    id,
    favourite,
    name,
    special_ingredient,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    BackHandler,
    ToggleFavourite,
}) => {
  return (
    <View>
   <ImageBackground
   source ={imagelink_portrait}
   style={styles.imageback}>
   {EnableBackHandler ?(
    <View style={styles.withback}>
        <TouchableOpacity onPress={()=> {BackHandler();}}>
            <GradientBGIcon 
            name="left"
            color={COLORS.primaryLightGreyHex}
            size={FONTSIZE.size_16} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{ ToggleFavourite(favourite,type,id)}}>
            <GradientBGIcon
            name="like"
            color={favourite? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            size ={FONTSIZE.size_16} />
        </TouchableOpacity>
        </View>):(   <View style={styles.withoutback}>
        <TouchableOpacity onPress={()=> {ToggleFavourite(favourite,type,id)}}>
            <GradientBGIcon
            name="like"
            color={favourite? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            size ={FONTSIZE.size_16} />
        </TouchableOpacity >
        </View>) 
   }
   <View style = {styles.imageouter}>
    <View style={styles.imageinner}>
        <View style={styles.infocontainer}>
            <View>
                <Text style ={styles.item}>{name}</Text>
                <Text style ={styles.ingredient}>{special_ingredient}</Text>
            </View>
        <View style ={styles.properties}>
            <View style={styles.properfirst}>
            <CustomIcon name={type == 'Bean' ? 'bean':'beans'} 
                size ={ type=='Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                color={COLORS.primaryOrangeHex} />
                <Text style={[styles.TEXT1,{marginTop: type == 'Bean'? SPACING.space_2+ SPACING.space_4: 0}]}>{type}</Text>
                </View>
                <View style={styles.properfirst}>
                <CustomIcon name={type == 'Bean' ? 'location':'drop'} 
                size ={  FONTSIZE.size_16}
                color={COLORS.primaryOrangeHex} />
                
                <Text style={styles.TEXT}>{ingredients}</Text>
                </View>
                </View>
                </View>
                <View style={styles.infocontainer}>
                    <View style={styles.rating}>
                        <CustomIcon
                        name={'star'}
                        color={COLORS.primaryOrangeHex}
                        size={FONTSIZE.size_20} />
                        <Text style={styles.ratingtext}>{average_rating}</Text>
                        <Text style={styles.count}>{ratings_count}</Text>
                    </View>
                    <View style={styles.roasted}>
                      <Text style={styles.rt}>{roasted}</Text>
                    </View>
                </View>
    </View>
   </View>
   </ImageBackground></View>
  )
}



const styles = StyleSheet.create({
    withoutback:{
        padding:SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    withback:{
        padding:SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        },
        imageback:{
            width:'100%',
            aspectRatio:20 / 25,
            justifyContent: 'space-between'
        },
        imageouter:{
            paddingHorizontal:SPACING.space_30,
            paddingVertical:SPACING.space_24,
            backgroundColor:COLORS.primaryBlackRGBA,
            borderTopLeftRadius: BORDERRADIUS.radius_20*2,
            borderTopRightRadius: BORDERRADIUS.radius_20*2,
        },
        imageinner:{
            justifyContent:'space-between',
            gap:SPACING.space_15
        },
        infocontainer:{
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        properties:{
            flexDirection:'row',
            alignItems: 'center',
            gap:SPACING.space_20
        },
        properfirst:{
            height:50,
            width:50,
            borderRadius:BORDERRADIUS.radius_15,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLORS.primaryBlackHex,
        },
        item:{
            fontFamily:FONTFAMILY.poppins_semibold,
            fontSize:FONTSIZE.size_24,
            color:COLORS.primaryWhiteHex
        },
        ingredient:{   fontFamily:FONTFAMILY.poppins_medium,
            fontSize:FONTSIZE.size_12,
            color:COLORS.primaryWhiteHex},
        TEXT:{
            fontFamily:FONTFAMILY.poppins_medium,
            fontSize:FONTSIZE.size_10,
            color:COLORS.primaryWhiteHex
        },
        rating:{
            flexDirection:'row',
            alignItems:'center',
            gap:SPACING.space_10,
        },
        rt:{
            fontFamily:FONTFAMILY.poppins_regular,
            fontSize:FONTSIZE.size_12,
            color:COLORS.primaryWhiteHex
        },
        count:{
            fontFamily:FONTFAMILY.poppins_regular,
            fontSize:FONTSIZE.size_12,
            color:COLORS.primaryWhiteHex
        },
        roasted:{
            height:40,
            width:50*2 + SPACING.space_20,
            borderRadius:BORDERRADIUS.radius_15,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLORS.primaryBlackHex,
        },
        ratingtext:{
            fontFamily:FONTFAMILY.poppins_semibold,
            fontSize:FONTSIZE.size_18,
            color:COLORS.primaryWhiteHex  
        },
        TEXT1:{
            fontFamily:FONTFAMILY.poppins_medium,
            fontSize:FONTSIZE.size_10,
            color:COLORS.primaryWhiteHex,
            marginTop:SPACING.space_2 + SPACING.space_4  
        }
})
export default Imagebackgroundinfo