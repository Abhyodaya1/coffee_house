/* eslint-disable prettier/prettier */
import {ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Emptyanimation from '../components/Emptyanimation';
import HeaderBar from '../components/HeaderBar';
import PaymentFooter from '../components/PaymentFooter';
import Favouriteitem from '../components/Favouriteitem';
import { COLORS, SPACING } from '../theme/theme';

const FavoritesScreen = ({navigation}: any) => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const tabBarHeight= useBottomTabBarHeight();
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  return (
    <View style={styles.sc}>
    <StatusBar backgroundColor={COLORS.primaryBlackRGBA}/>
    <ScrollView showsVerticalScrollIndicator={false}
    contentContainerStyle = {styles.sc1}>
      <View style={[styles.sc2, {marginBottom:tabBarHeight}]}>
        <View style={styles.innersc}>
        <HeaderBar title='Favourites' />
       
       {FavoritesList?.length == 0 ? (<Emptyanimation title={'No Favourites'}/>):(<View style={styles.lc}>
        {FavoritesList.map((data:any)=>(
          <TouchableOpacity onPress={()=>{navigation.push('Details',{index:data.index,id:data.id,type:data.type})}}
          key={data.id}>
           <Favouriteitem id={data.id}
            roasted={data.roasted}
            name={data.name}
            special_ingredient={data.special_ingredient}
            imagelink_portrait={data.imagelink_portrait}
            type={data.type}
            ratings_count={data.rating_count}
            description={data.description}
            average_rating={data.average_rating}
            favourite={data.favourite}
            ToggleFavourite={ToggleFavourite} ingredients={data.ingredients} />
          </TouchableOpacity>
        ))}
       </View>)}
       </View>
      </View>
      </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  sc:{
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
   },
   sc1:{flexGrow:1,},
   sc2:{ flex:1,
    justifyContent: 'space-between',
   },
  innersc:{ flex: 1},
  lc:{paddingHorizontal:SPACING.space_20,
    gap: SPACING.space_20
  }
});
export default FavoritesScreen;
