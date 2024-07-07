/* eslint-disable prettier/prettier */
import {ImageProps, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import Imagebackgroundinfo from './Imagebackgroundinfo';

interface Favouriteitem {
  id: string;
  roasted: string;
  name: string;
  special_ingredient: string;
  imagelink_portrait: ImageProps;
  type: string;
  ratings_count: string;
  description: string;
  average_rating: number;
  favourite: boolean;
  ingredients:string;
  ToggleFavourite: any;
}

const Favouriteitem: React.FC<Favouriteitem> = ({
    id,
    roasted,
    name,
    special_ingredient,
    imagelink_portrait,
    type,
    ratings_count,
    description,
    average_rating,
    favourite,
    ingredients,
    ToggleFavourite,
}) => {
  return (
    <View style={styles.Cardcontainer}>
      <Imagebackgroundinfo 
      EnableBackHandler={false}
      imagelink_portrait={imagelink_portrait}
      type={type}
      id={id}
      favourite={favourite}
      name={name}
      special_ingredient={special_ingredient}
      average_rating={average_rating}
      ratings_count={ratings_count}
      roasted={roasted}
      ToggleFavourite={ToggleFavourite}
      ingredients={ingredients}/>
     <LinearGradient start={{x:0,y:0}}
     end={{x:1,y:1}}
     colors={[COLORS.primaryGreyHex,
      COLORS.primaryBlackHex]}
      style={styles.lineargradientcontainer}>
        <Text style={styles.decriptiontitle}>Descriptions</Text>
        <Text style={styles.descriptioninfo}>{description}</Text>
      </LinearGradient>
      </View>
  );
};

const styles = StyleSheet.create({
  Cardcontainer:{
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  lineargradientcontainer:{
    gap:SPACING.space_10,
    padding:SPACING.space_20,
  },
  decriptiontitle:{
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  descriptioninfo:{
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default Favouriteitem;
