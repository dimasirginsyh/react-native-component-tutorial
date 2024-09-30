import { FlatList, StyleSheet, Text, View } from "react-native";

type Data = {
  id: number;
  city: string;
  province: string;
  country: string;
};

const datas: Data[] = [
  { id: 1, city: "Malang", province: "Jawa Timur", country: "indonesia" },
  { id: 2, city: "Surabaya", province: "Jawa Timur", country: "indonesia" },
  { id: 3, city: "Yogya", province: "DI Yogyakarta", country: "indonesia" },
  { id: 4, city: "Solo", province: "Jawa Tengah", country: "indonesia" },
  { id: 5, city: "Semarang", province: "Jawa Tengah", country: "indonesia" },
  {
    id: 6,
    city: "Jakarta Selatan",
    province: "DK Jakarta",
    country: "indonesia",
  },
];

const RenderItem = ({ data }: { data: Data }) => {
  return (
    <View style={styles.tbody}>
      <Text style={styles.td}>{data.id}</Text>
      <Text style={styles.td}>{data.city}</Text>
      <Text style={styles.td}>{data.province}</Text>
      <Text style={styles.td}>{data.country}</Text>
    </View>
  );
};

export default function Index() {
  return (
    <View style={styles.main}>
      <View style={styles.thead}>
        <Text style={styles.th}>ID</Text>
        <Text style={styles.th}>City</Text>
        <Text style={styles.th}>Province</Text>
        <Text style={styles.th}>Country</Text>
      </View>
      <FlatList<Data>
        data={datas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RenderItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  thead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  th: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    flex: 1,
    elevation: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    padding: 10
  },
  tbody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 2,
    padding: 10,
    borderColor: "#fff",
    borderRadius: 3,
    elevation: 1,
    backgroundColor: "#fff",
  },
  td: {
    fontSize: 15,
    textAlign: "left",
    flex: 1,
  },
});
