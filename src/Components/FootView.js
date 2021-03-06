import React from 'react';
import { Text,View,StyleSheet,Image,FlatList,SafeAreaView,Dimensions } from 'react-native';
import { newConst,sale } from '../Utils/AppConstants';
import shoeList from '../../mocks/foots.json';
import _ from 'lodash';

import Pagination from 'react-native-pagination';
const styles = StyleSheet.create({
    safeArea: {
      marginHorizontal: 16,
    },
    stockStyle:{
        flexDirection: 'row-reverse',
        height:25,
        marginBottom:5,
        marginRight:5
    },
    priceStyle:{flexDirection:'row'
    },
    image:{
        width:170,
        height:170,
     
    },
    desc:{
        width:170
    },
    shoeView:{width:Dimensions.get('window').width/2},
    sale:{
        backgroundColor:'red',
        color:'white',
        paddingLeft:10,
        paddingRight:10,
        margin:2,
        // marginRight:5,
        marginTop:0
       
        // margingRight:5,
    },
    newStyles:{
        backgroundColor:'#62BD69',
        paddingLeft:10,
        paddingRight:10,
        margin:2,
        // marginRight:5,
        marginTop:0

    },
    stockDesc:{
        paddingRight:10
    },

    textColor:{color:'white'}
});
 export const ListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "grey",
        }}
      />
    );
  }
  export const ListItemSeparatorColumn = () => {
    return (
      <View
        style={{
          width:1,
          backgroundColor: "grey",
          height: "100%",
        }}
      />
    );
  }
const columnItemSeperator =()=>{
    return (
        <View
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "#000",
          }}
        />
      );
}
export const ShoeList =()=>{
    return <FlatList 
    keyExtractor={(index) => index.toString()}
    numColumns={2}
    listKey="shoeslist"
    // initialNumToRender={10}
    ItemSeparatorComponent = { ListItemSeparator}
    data={shoeList.list.slice(0,10)}
    // ref={r=>refs=r}
    //maxToRenderPerBatch={10}
    renderItem={({item,index}) => (
  <Shoe props={item} index={index}></Shoe>
    )}
  />
      
  {/*<ListItemSeparator></ListItemSeparator>
   <Pagination
  horizontal
  // debugMode
  // dotSwapAxis
  // dotPositionSwap
  // listRef={refs} //to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list)
  dotIconNameNotActive={'account-outline'}
  dotIconNameEmpty={'account-off'}
  dotIconNameActive={'account-settings'}
  dotTextHide
  dotIconSizeNotActive={20}
  dotIconSizeActive={27}
  dotIconSizeEmpty={27}
  //iconColorhasNotSeen={"red"}
  // paginationVisibleItems={10} //needs to track what the user sees
  paginationItems={shoeList.list} //pass the same list as data
  paginationItemPadSize={3}
/> 
</View>*/}
}
const images=[require( '../../assets/images/shoe1.png'),require( '../../assets/images/shoe2.png'),require( '../../assets/images/shoe3.png'),require( '../../assets/images/shoe4.png'),require( '../../assets/images/shoe5.png'),require( '../../assets/images/shoe6.png'),require( '../../assets/images/shoe1.png'),require( '../../assets/images/shoe2.png'),require( '../../assets/images/shoe3.png'),require( '../../assets/images/shoe4.png'),require( '../../assets/images/shoe5.png'),require( '../../assets/images/shoe6.png'),require( '../../assets/images/shoe1.png'),require( '../../assets/images/shoe2.png'),require( '../../assets/images/shoe3.png'),require( '../../assets/images/shoe4.png'),require( '../../assets/images/shoe5.png'),require( '../../assets/images/shoe6.png'),require( '../../assets/images/shoe1.png'),require( '../../assets/images/shoe2.png'),require( '../../assets/images/shoe3.png'),require( '../../assets/images/shoe4.png'),require( '../../assets/images/shoe5.png'),require( '../../assets/images/shoe6.png'),require( '../../assets/images/shoe1.png'),require( '../../assets/images/shoe2.png'),require( '../../assets/images/shoe3.png'),require( '../../assets/images/shoe4.png'),require( '../../assets/images/shoe5.png'),require( '../../assets/images/shoe6.png'),require( '../../assets/images/shoe1.png'),require( '../../assets/images/shoe2.png'),require( '../../assets/images/shoe3.png'),require( '../../assets/images/shoe4.png'),require( '../../assets/images/shoe5.png'),require( '../../assets/images/shoe6.png'),require( '../../assets/images/shoe1.png'),require( '../../assets/images/shoe2.png'),require( '../../assets/images/shoe3.png'),require( '../../assets/images/shoe4.png'),require( '../../assets/images/shoe5.png'),require( '../../assets/images/shoe6.png')]
 const Shoe = (props) => {
    const oldPrice = props.props.oldPrice;
  return (
    <View style={{flexDirection:'row'}}>
    <View style={[styles.shoeView,{marginRight:-5,marginLeft:5}]}>
        <View style ={styles.stockStyle}>
            {props.props.new ?<Text style={[styles.newStyles]}>{newConst}</Text>:<></>}
            {props.props.sale?<Text style={styles.sale}>{sale}</Text>:<></>}
        {props.props.availableStock !== '' && props.props.totalStock !== '' ?<Text style={[styles.stockDesc,styles.textColor]}>{props.props.availableStock} of {props.props.totalStock} {props.props.stockDesc}</Text>:<Text></Text>}
    </View>
    <Image source={images[props.index]} style={styles.image}></Image>
    <Text style={[styles.textColor,{fontSize:20,paddingRight:20}]}>{props.props.desc}</Text>
    <View style={styles.priceStyle}><Text style={oldPrice === '' ?styles.textColor : {color:'green'}}>${props.props.currentPrice}</Text>{oldPrice !== ''? <Text style={[styles.textColor,{textDecorationLine: 'line-through'}]}> + ${props.props.oldPrice}</Text>:<></>}</View>
    
    </View>
    <ListItemSeparatorColumn></ListItemSeparatorColumn>
    </View>
       

  );
}
