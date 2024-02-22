import {ScrollView, View } from "react-native";
import Card from './Card';

const MadeForYou = () => {
  const data = [
    {
      id: 1,
      image:
       'https://m.media-amazon.com/images/M/MV5BZjFmY2IwZmEtNTE4Mi00YzNmLTgzZTgtZjg1NzBhMGZjNGYzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg'
    },
    {
      id: 2,
      image:"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Steve-Rogers-Marches-Forward-In-Captain-America-The-Winter-Soldier.jpg",
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/M/MV5BZjFmY2IwZmEtNTE4Mi00YzNmLTgzZTgtZjg1NzBhMGZjNGYzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
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

export default MadeForYou;
