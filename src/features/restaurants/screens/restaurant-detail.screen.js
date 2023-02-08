import React from "react";
import { View, ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";

export const RestaurantDetail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = React.useState(false);
  const [lunchExpanded, setLunchExpanded] = React.useState(false);
  const [dinnerExpanded, setDinnerExpanded] = React.useState(false);
  const [drinksExpanded, setDrinksExpanded] = React.useState(false);
  const [dessertsExpanded, setDessertsExpanded] = React.useState(false);
  const [breakfastMenu, setBreakfastMenu] = React.useState([
    { name: "Eggs Benedict", price: 10.99 },
    { name: "Pancakes", price: 9.99 },
    { name: "French Toast", price: 9.99 },
    { name: "Breakfast Burrito", price: 9.99 },
    { name: "Breakfast Sandwich", price: 9.99 },
    { name: "Breakfast Tacos", price: 9.99 },
  ]);
  const [lunchMenu, setLunchMenu] = React.useState([
    { name: "Burger", price: 10.99 },
    { name: "Chicken Sandwich", price: 9.99 },
    { name: "Chicken Tenders", price: 9.99 },
    { name: "Chicken Wings", price: 9.99 },
    { name: "Fries", price: 9.99 },
  ]);
  const [dinnerMenu, setDinnerMenu] = React.useState([
    { name: "Steak", price: 10.99 },
    { name: "Chicken", price: 9.99 },
    { name: "Salmon", price: 9.99 },
    { name: "Shrimp", price: 9.99 },
    { name: "Ribs", price: 9.99 },
  ]);
  const [drinksMenu, setDrinksMenu] = React.useState([
    { name: "Coke", price: 10.99 },
    { name: "Sprite", price: 9.99 },
    { name: "Dr. Pepper", price: 9.99 },
    { name: "Root Beer", price: 9.99 },
    { name: "Water", price: 9.99 },
  ]);
  const [dessertsMenu, setDessertsMenu] = React.useState([
    { name: "Ice Cream", price: 10.99 },
    { name: "Cake", price: 9.99 },
    { name: "Pie", price: 9.99 },
    { name: "Brownies", price: 9.99 },
    { name: "Cookies", price: 9.99 },
  ]);
  const handleBreakfastPress = () => setBreakfastExpanded(!breakfastExpanded);
  const handleLunchPress = () => setLunchExpanded(!lunchExpanded);
  const handleDinnerPress = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinksPress = () => setDrinksExpanded(!drinksExpanded);
  const handleDessertsPress = () => setDessertsExpanded(!dessertsExpanded);
  const listMenuItems = (menu) => {
    return menu.map((item) => (
      <List.Item title={item.name} description={"$" + item.price} />
    ));
  };
  const [expanded, setExpanded] = React.useState(true);
  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={handleBreakfastPress}
          >
            <View>{listMenuItems(breakfastMenu)}</View>
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={handleLunchPress}
          >
            <View>{listMenuItems(lunchMenu)}</View>
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={handleDinnerPress}
          >
            <View>{listMenuItems(dinnerMenu)}</View>
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={handleDrinksPress}
          >
            <View>{listMenuItems(drinksMenu)}</View>
          </List.Accordion>

          <List.Accordion
            title="Dessert"
            left={(props) => <List.Icon {...props} icon="cake" />}
            expanded={dessertsExpanded}
            onPress={handleDessertsPress}
          >
            <View>{listMenuItems(dessertsMenu)}</View>
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};
