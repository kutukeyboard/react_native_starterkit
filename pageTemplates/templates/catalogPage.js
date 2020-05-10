import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";

import { Colors, Layout, Graphics, Inputs } from "../../components/helpers/style";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Spacer from "../../components/custom/spacer";

const dummyData = [
  {
    id: "1",
    productName: "Intel Xeon",
    price: 100000,
    image: "https://static.bmdstatic.com/pk/product/medium/5cb59c97ecce7.jpg",
    description:
      "Intel® Xeon® D processors deliver workload optimized performance in environments that are limited in power and space, from data centers to smart edges. This innovative system-on-a-chip processor supports high density computing solutions, single socket network, storage, and cloud edges with a variety of integrated security, network capabilities and acceleration.",
  },
  {
    id: "2",
    productName: "Intel Core i9",
    price: 340000,
    image: "https://toptech24.com/wp-content/uploads/2020/02/i9-9900k.png",
    description:
      "Introducing the new 10th Generation Intel® Core ™ desktop processor that delivers real elite performance with optimal balanced frequency, core and thread. Get the most out of your game with clock speeds of up to 5.3Gz, 10 cores, 20 threads, and the latest support for large bandwidth connectivity and devices. Integrated features such as Intel® Hyperthreading Technology and Intel® Thermal Velocity Boost that allow exceptional gameplay once opened from the package, while the new overclock control offers additional flexibility to improve performance.",
  },
  {
    id: "3",
    productName: "Intel Core i9 Extreeme",
    price: 280000,
    image: "https://balta.pl/wp-content/uploads/2020/05/98477_1550066775_1.jpg",
    description:
      "The Intel® Core ™ X-series processor series is unlocked to provide additional space. New features include the ability to overclock each core, control the AVX ratio for more stability, and control the VccU voltage for extreme scenarios. Combined with several tools, such as Intel® Extreme Tuning Utility (Intel® XTU) and Intel® Extreme Memory Profile (Intel® XMP), you have a range of powerful tools to maximize performance.",
  },
  {
    id: "4",
    productName: "AMD Ryzen 5",
    price: 210000,
    image: "https://www.scan.co.uk/images/tekspek/amd-2000-series-cpu.jpg",
    description:
      "Do everything. All at the same time. Render. Stream. Compile. Encode2. Work and Play. With the ultimate Desktop Platform, featuring the most powerful desktop processors in the world.",
  },
];

export default CatalogPage = () => {
  const [catalogData, setCatalogData] = useState();
  const [searchText, setSearchText] = useState();
  const navigation = useNavigation();

  const getCatalogData = () => {
    // get catalog data via your API here
    if (!searchText) {
      setCatalogData(dummyData);
    } else {
      setCatalogData(
        catalogData.filter(
          (e) => e.productName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  };

  function Search() {}

  useEffect(() => {
    getCatalogData();
  }, []);

  return (
    <SafeAreaView style={[pageStyle.productContainer, Layout.pageContainer]}>
      <Spacer top={10} bottom={0} left={0} right={0} />
      <TextInput
        placeholder="Search Product"
        onChangeText={(text) => setSearchText(text)}
        style={Inputs.textInput}
        keyboardType="web-search"
        returnKeyType="search"
        onSubmitEditing={(text) => getCatalogData()}
      />
      <Spacer top={20} bottom={0} left={0} right={0} />
      <ScrollView>
        <View style={[Layout.moduleGroupContainer]}>
          {catalogData &&
            catalogData.map((r, i) => {
              const myImage = r.image;
              return (
                <View key={i} style={pageStyle.frame}>
                  <TouchableOpacity
                    style={pageStyle.item}
                    onPress={() => navigation.navigate("ProductDetail", { productId: r.id })}
                  >
                    <Image source={{ uri: r.image }} style={pageStyle.productPicture} />
                    <Text style={pageStyle.productName}>{r.productName}</Text>
                    <Text style={pageStyle.productPrice}>{r.price}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const pageStyle = StyleSheet.create({
  productContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  productPicture: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  frame: {
    width: "50%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  item: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: Colors.bgColor,
    borderColor: Colors.bgDark,
    borderWidth: 0.5,
  },
  productName: {
    margin: 10,
  },
  productPrice: {
    padding: 5,
    marginBottom: 5,
    fontWeight: "700",
    color: Colors.primaryColor,
  },
});
