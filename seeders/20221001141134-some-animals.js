"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "animals",
      [
        {
          name: "Petunia",
          age: 1,
          species: "Hedgehog",
          description: `Petunia is the newest addition to our crew! She is a small African
          Pygmy Hedgehog around 8 months of age. Her favorite snacks include mealworms and fresh berries.
          While she mostly enjoys chilling out in her hut, she can often be found on her exercise wheel or 
          chewing on toilet paper rolls. Please keep in mind that hedgehogs are nocturnal. Interested in 
          adopting Petunia? Apply using the form below.`,
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        }, 
        {
          name: "Thumbs",
          age: 1,
          species: "Cat",
          description: `Thumbs is a playful orange kitten around three months old. She came to us 
          from a previous owner that could no longer care for her. Her favorite treats include tuna 
          and pumpkin. With her extra toes, Thumbs is an excellent and skillful climber! She enjoys 
          sunbathing by windows, using her scratching post, and any and all mouse toys. Interested in 
          adopting Thumbs? Apply using the form below.`,
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },  
        {
          name: "Hank",
          age: 1,
          species: "Dog",
          description:`Hank is a four year old male Chihuahua. He was found as a stray and 
          immediately taken in by our team here at Cuddly Critters. Hank loves to sleep and 
          is perfect for someone looking for a nap partner. Hank’s favorite treats are boiled 
          chicken and peanut butter. While he is a bit shy, he is very loving and gentle. 
          Hank is both housebroken and leash trained! Interested in adopting Hank? Apply using 
          the form below.`,
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },   
        {
          name: "Jolene",
          age: 1,
          species: "Rabbit",
          description: `Jolene is a two year old Angora rabbit. She is extremely 
          intelligent and playful! Jolene loves to snack and her favorite treats are 
          radishes and bananas. Due to her long hair, we are looking for someone willing 
          to keep up with daily brushing and occasional grooming. Interested in adopting 
          Jolene? Apply using the form below.`,
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },  
        {
          name: "Stroopwafel",
          age: 1,
          species: "Dog",
          description: `Stroopwafel is an energetic one year old Golden Retriever. 
          He loves to play fetch and roll over for belly rubs! Stroopwafel is definitely 
          not a picky eater and enjoys all types of treats. He is still learning how to 
          use his indoor voice, but is housebroken and leash trained. He is extremely friendly 
          and likes to introduce himself to other people and pets. Interested in adopting Stroopwafel? 
          Apply using the form below.`,
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },  
        {
          name: "Gustav",
          age: 1,
          species: "Bearded Dragon",
          description: `Gustav is a docile two year old Bearded Dragon. Gustav’s 
          favorite treats are crickets and dandelion greens. Gustav enjoys hanging out 
          under his heat lamp and being held. During his time here at Cuddly Creatures 
          Adoption Center, we have taught Gustav how to walk on a leash and come when called! 
          Interested in adopting Gustav? Apply using the form below.`,
          createdAt: new Date(),
          updatedAt: new Date(),
          adopted: false,
        },   
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("animals", null, {});
  },
};