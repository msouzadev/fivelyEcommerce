import React, { useState } from "react";
import FilterModal from "../../components/FilterModal";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import Modal from "../../components/Modal";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
// import { Container } from './styles';

export default function Catalog() {
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#1E1F28" }}>
      <Modal
        style={{ fleX: 1 }}
        transparent={true}
        open={sortModal}
        onClose={() => setSortModal(false)}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "#1E1F28",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 20
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 14
            }}
          >
            <View
              style={{
                backgroundColor: "#ABB4BD",
                width: 60,
                height: 6,
                borderRadius: 10
              }}
            ></View>
            <Text style={{ color: "#F6F6F6", fontSize: 18, marginTop: 16 }}>
              Sort by
            </Text>
          </View>
          <View style={{ marginTop: 33 }}>
            {[1, 2, 3, 4, 6].map(item => (
              <View
                key={item}
                style={{
                  marginBottom: 10,
                  backgroundColor: item == 3 && "#EF3651",
                  padding: 20
                }}
              >
                <Text style={{ color: "#F7F7F7", fontSize: 16 }}>Popular</Text>
              </View>
            ))}
          </View>
        </View>
      </Modal>
      <FilterModal open={filterModal} onClose={() => setFilterModal(false)} />
      <FlatList
        style={{ marginLeft: 14, marginVertical: 12, height: 60 }}
        horizontal
        keyExtractor={item => String(item)}
        data={[1, 2, 3, 4, 6]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F7F7F7",
              marginRight: 7,
              paddingVertical: 8,
              width: 130,
              borderRadius: 20
            }}
          >
            <Text style={{ color: "#2A2C36" }}>T-shirts</Text>
          </TouchableOpacity>
        )}
      />

      <View style={{ marginTop: 18, marginHorizontal: 14 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity onPress={() => setFilterModal(true)}>
              <MaterialIcons name="filter-list" color="#F7F7F7" size={30} />
            </TouchableOpacity>
            <Text style={{ color: "#F7F7F7", marginLeft: 7 }}>Filters</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => setSortModal(true)}
              style={{ transform: [{ rotate: "90deg" }] }}
            >
              <MaterialIcons name="compare-arrows" color="#F7F7F7" size={25} />
            </TouchableOpacity>
            <Text style={{ color: "#F7F7F7", marginLeft: 7 }}>
              Price: lowest to high
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <MaterialIcons name="apps" color="#F7F7F7" size={30} />
          </View>
        </View>
      </View>

      <FlatList
        keyExtractor={item => String(item)}
        style={{ marginHorizontal: 16, marginTop: 20, marginBottom: "21.3%" }}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={{
                marginBottom: 26,
                flexDirection: "row",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15
              }}
            >
              <Image
                style={{
                  width: 104,
                  height: 104,
                  flex: 3,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15
                }}
                source={require("../../../assets/img/product-list.png")}
              ></Image>
              <View
                style={{
                  backgroundColor: "#2A2C36",
                  flex: 7,
                  borderTopRightRadius: 15,
                  borderBottomRightRadius: 15
                }}
              >
                <View style={{ paddingLeft: 10, paddingTop: 11 }}>
                  <Text style={{ color: "#F7F7F7", fontWeight: "bold" }}>
                    Pullover
                  </Text>
                  <Text style={{ color: "#ABB4BD", fontSize: 11 }}>Mango</Text>
                  <View
                    style={{
                      paddingTop: 8,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: 110,
                      alignItems: "center"
                    }}
                  >
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star" color="#FFBA49" size={15} />
                    <FontAwesome name="star-o" color="#ABB4BD" size={15} />
                    <Text style={{ color: "#ABB4BD" }}>(3)</Text>
                  </View>
                  <Text style={{ color: "#F7F7F7" }}>51$</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                justifyContent: "center",
                alignItems: "center",
                bottom: 10,
                right: 0,
                position: "absolute",
                backgroundColor: "#1E1F28",
                borderRadius: 40 / 2,
                width: 40,
                height: 40
              }}
            >
              <MaterialCommunityIcons
                name="heart-outline"
                size={18}
                color="#ABB4BD"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
