/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import Imagebackgroundinfo from '../components/Imagebackgroundinfo';
import PaymentFooter from '../components/PaymentFooter';

const DetailsScreen = ({navigation, route}: any) => {
  const itemindex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const addToCart = useStore((state:any) => state.addToCart)
  const calculateCartPrice =useStore((state:any)=> state.calculateCartPrice)
  const [fulldes, setfulldes] = useState(false);

  const [price, setprice] = useState(itemindex.prices[0]);
  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };
  const BackHandler = () => {
    navigation.pop();
  };
  const addToCarthandler = ({id,index,imagelink_square,name,roasted,type, price,special_ingredient}:any) => {addToCart({id,index,imagelink_square,name,roasted,type,prices: [{...price, quantity: 1}],special_ingredient});
 calculateCartPrice();
navigation.navigate('Cart')}

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <Imagebackgroundinfo
          EnableBackHandler={true}
          imagelink_portrait={itemindex.imagelink_portrait}
          type={itemindex.type}
          id={itemindex.id}
          favourite={itemindex.favourite}
          name={itemindex.name}
          special_ingredient={itemindex.special_ingredient}
          ingredients={itemindex.ingredients}
          average_rating={itemindex.average_rating}
          ratings_count={itemindex.rating_counts}
          roasted={itemindex.roasted}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />

        <View style={styles.footerinfo}>
          <Text style={styles.infotile}> Description</Text>
          {fulldes ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setfulldes(prev => !prev);
              }}>
              <Text style={styles.dt}>{itemindex.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setfulldes(prev => !prev);
              }}>
              <Text numberOfLines={3} style={styles.dt}>
                {itemindex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.infotile}>Size</Text>
          <View style={styles.sizes}>
            {itemindex.prices.map((data: any) => (
              <TouchableOpacity
                key={data.size}
                onPress={() => {
                  setprice(data);
                }}
                style={[
                  styles.sizebox,
                  {
                    borderColor:
                      data.size == price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryLightGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    styles.sizetext,
                    {
                      fontSize:
                        itemindex.type == 'Bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size == price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.primaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <PaymentFooter price={price} buttontitle='add to cart' buttonPressHandler={() =>{
          addToCarthandler({
            id:itemindex.id,
            index:itemindex.index,
            name:itemindex.name,
            roasted:itemindex.roasted,
            imagelink_square:itemindex.imagelink_square,
            special_ingredient:itemindex.special_ingredient,
            price: price,
            type:itemindex.type,
          })
        }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: COLORS.primaryBlackHex},
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent:'space-between'
  },
  footerinfo: {padding: SPACING.space_20, borderRadius: BORDERRADIUS.radius_20},
  infotile: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  dt: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
    letterSpacing: 0.5,
  },
  sizes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  sizebox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  sizetext: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
export default DetailsScreen;
