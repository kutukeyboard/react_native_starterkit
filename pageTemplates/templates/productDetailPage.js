import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";

import { Layout } from "../../components/helpers/style";

import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/custom/button";
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

export default ProductDetailPage = ({ route }) => {
  const [productData, setProductData] = useState();

  const productId = route.params.productId;

  const getProduct = () => {
    // get message from your API here, then insert to productData variable via setProductData HOOK

    //code below is just filtering dummy data
    setProductData(dummyData.filter((e) => e.id == productId)[0]);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <SafeAreaView style={Layout.pageContainer}>
      <ScrollView style={Layout.contentContainer}>
        {productData && (
          <>
            <Image source={{ uri: productData.image }} style={pageStyle.productPicture} />

            <Text style={pageStyle.productName}>{productData.productName}</Text>
            <View style={Layout.moduleGroupContainer}>
              <Text>Price : </Text>
              <Text>Rp. {productData.price}</Text>
            </View>
            <Text>Description : </Text>
            <Text>{productData.description}</Text>
            <Spacer top={20} bottom={0} left={0} right={0} />
            <Button Title={"Buy Now"} btnStyle={"primary"} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const pageStyle = StyleSheet.create({
  productPicture: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    padding: 20,
  },
});
