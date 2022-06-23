import React, {useEffect,useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Shoe, ShoeList, ListItemSeparator} from '../Components/FootView';
import {FooterList} from '../Components/FooterList';

const styles = StyleSheet.create({
  navTitle: {
    flexDirection: 'row',
  },
  footer: {color: 'grey', padding: 10, fontSize: 18},
  footerStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 30,
    width: 30,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  signUp: {fontSize: 35, justifyContent: 'center', textAlign: 'center'},
  search: {
    marginLeft: 0,
    marginRight: 5,
    marginTop:5,
    height: 20,
    width: 20,
  },
  textInput: {
    backgroundColor: 'black',
    padding: 10,
    color:'white',
    borderRadius: 5,
    margin: 0,
    color:'gray',
    margin:5
  },
  cart: {marginLeft: 25, marginRight: 5, height: 30, width: 30},
  cartText: {
    color: 'white',
    paddingLeft: 8,
    paddingTop: 8,
    fontWeight: 'normal',
  },
  menuHeader: {
    marginLeft: 25,
    marginRight: 15,
    height: 40,
    width: 30,
  },
  menu: {height: 20, width: 20},
  requestTextView: {
    color: 'white',
    // padding: 10,
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft:10,
    // fontWeight: 'bold',
  },
  pagination: {
    color: 'white',
    fontSize: 26,
    padding: 20,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'grey',
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 5,
  },
  title: {
    fontSize: 25,
    color: 'white',
    padding: 20,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterTextStyle: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
  requestText: {
    flexDirection: 'row',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    paddingLeft:5,
    marginLeft:5,
    marginBottom: 30,
    marginRight:-40,
    // alignItems:'flex-end',
    // alinContent:'flex-end',
    width: Dimensions.get('window').width / 2 + 20,
  },
  imageArrow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -58,
    marginRight: 6,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width-10,
    textAlign: 'center',
    marginRight: 40,
    marginBottom: 40,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft:5,
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  titleTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    borderWidth: 4,
    borderColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export const Dunks = ({navigation}) => {
  const [value, setValue] = useState('Your email here...');
  const [cursorPosition,setCursorPosition]=useState(0);
  const HeaderRightView = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.search}></Image>
        <ImageBackground
          source={require('../../assets/images/cart.png')}
          style={styles.cart}>
          <Text style={styles.cartText}>02</Text>
        </ImageBackground>
        <Image
          source={require('../../assets/images/menu.jpg')}
          style={styles.menuHeader}></Image>
      </View>
    );
  };

  const navigationTo = item => {
    switch (item) {
      case 'Nike':
        navigation.navigate('Nike');
        break;
      case 'Jordans':
        navigation.navigate('Jordans');
        break;
      case 'Adidas':
        navigation.navigate('Adidas');
        break;
      case 'Supreme':
        navigation.navigate('Supreme');
        break;
      case 'Yeezys':
        navigation.navigate('Yeezys');
        break;
      default:
        alert(item + ' not available');
        break;
    }
  };
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerTintColor: 'black',
      headerRight: () => <HeaderRightView></HeaderRightView>,
    });
  });
  return (
    <SafeAreaView>
      <FlatList
        listKey="parentList"
        keyExtractor={(_, index) => index.toString()}
        data={[]}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Image
              source={require('../../assets/images/garden.png')}
              style={{height: 70}}></Image>
            <Text style={[styles.textStyle,{padding:5}]}>
              Home {'>'} Nike {'>'} Dunks
            </Text>
            <ListItemSeparator />
            <Text style={styles.title}>DUNKS</Text>
            <ListItemSeparator />
            <View style={styles.tabs}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Text style={[styles.textStyle, styles.filterTextStyle]}>
                  Filters
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <View style={[styles.filterText, {flexDirection: 'row'}]}>
                  <Text style={[styles.textStyle, {}]}>Open</Text>
                  <Image
                    source={require('../../assets/images/menu.jpg')}
                    style={styles.menu}></Image>
                </View>
              </View>
            </View>
            <ListItemSeparator />
            <ShoeList></ShoeList>
            <ListItemSeparator />
            <Text style={styles.pagination}>
              1{' '}
              <Text style={{color: 'gray'}}>
                {' '}
                2 3 4 5 {'<'} {'>'}
              </Text>
            </Text>
            <ListItemSeparator />
          </>
        }
        ListFooterComponent={
          <View>
            <Image
              source={require('../../assets/images/nike.png')}
              style={{height: 120}}></Image>
            <Text style={{color:'white',fontWeight:'bold',fontSize:35,paddingLeft:5}}>Not Seeing {"\n"}What You're {"\n"}Looking For?</Text>
            <Text style={{color:'white',paddingLeft:5,fontSize:20,paddingTop:10,paddingBottom:20}}>Our conceirge service will track it {"\n"}down for you.</Text>
            <View style={styles.requestText}>
              <Text style={styles.requestTextView}>REQUEST COCIERGE</Text>
              <View style={{flexDirection: 'row-reverse',margingTop:20,paddingTop:5}}>
              <Image
                source={require('../../assets/images/arrow3.png')}
                style={{height: 10, width: 30,marginLeft:20}}></Image>
              </View>
             
            </View>
            <ListItemSeparator></ListItemSeparator>
            <View style={{backgroundColor: '#100c08', marginBottom: 100}}>
              <Text style={[styles.title, styles.signUp]}>
                Sign up For The Newsletter.
              </Text>
              <TextInput
                onFocus={()=>setValue('')}
                autoFocus={false}
                placeholderTextColor={'red'}
                // placeHolder={value}
                style={styles.textInput}
                value={value}
                onChangeText={text=>setValue(text)}
                defaultValue={value}
                selection={{start:(value === 'Your email here...' || '')?0:value.length}}
              />
              <View style={styles.row}>
                <Text
                  style={[styles.center, {color: 'white', fontWeight: 'bold'}]}>
                  SUBSCRIBE
                </Text>
              </View>
              <ListItemSeparator></ListItemSeparator>
              <View style={styles.imageArrow}>
                <Image
                  source={require('../../assets/images/arrow3.png')}
                  style={{
                    height: 20,
                    width: 30,
                    alignItems: 'flex-end',
                    marginTop: -12,
                    marginRight: 10,
                    marginBottom: 10,
                  }}></Image>
              </View>
            </View>

            <View style={styles.titleStyle}>
              <Text style={styles.titleTextStyle}> BLITZ</Text>
            </View>
            <FooterList navigationTo={navigationTo} />
            <View style={{marginTop: 20}}>
              <ListItemSeparator />
            </View>
            <View style={styles.footerStyle}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../assets/images/fb.png')}
                  style={styles.logo}></Image>
                <Image
                  source={require('../../assets/images/insta.png')}
                  style={styles.logo}></Image>
                <Image
                  source={require('../../assets/images/twitt.png')}
                  style={styles.logo}></Image>
              </View>
              <Text style={styles.footer}>
                POWERED BY <Text style={{fontWeight: 'bold'}}> PROTON</Text>
              </Text>
              <Text style={styles.footer}>
                2022 Blitz Project. All rights reserved.
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};
