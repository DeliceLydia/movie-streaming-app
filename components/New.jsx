import {ScrollView, View } from "react-native";
import Card from './Card';

const NewRelease = () => {
  const data = [
    {
      id: 1,
      image:
       'https://theacademyadvocate.com/wp-content/uploads/2020/10/Mulan-900x506-1.jpg'
    },
    {
      id: 2,
      image:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17331910_v_h9_ac.jpg",
    },
    {
      id: 3,
      image:
        "https://theacademyadvocate.com/wp-content/uploads/2020/10/Mulan-900x506-1.jpg",
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <View style={{ margin: 3 }}>
              <Card
                key={index}
                image={item.image}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default NewRelease;
