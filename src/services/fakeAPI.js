const dateDefault = {
  dateChat: new Date(0).toDateString(),
  dateMessage: new Date(0).toLocaleString(),
};

export const chatsData = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    message: [
      {
        id: '18',
        text: 'Hello',
        date: dateDefault,
        fromUser: false,
      },
      {
        id: '17',
        text: 'Hello',
        fromUser: true,
        date: dateDefault,
      },
    ],
    photoUrl:
      'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg',
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    message: [
      {
        fromUser: true,
        id: '16',
        text: 'Hello',
        date: dateDefault,
      },
      {
        fromUser: false,
        id: '15',
        text: 'Hello',
        date: dateDefault,
      },
    ],
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/626bd95f640aebc53adeb25c/Headshot-of-author-Deepa-Purushothaman-wearing-white-shirt/960x0.jpg?format=jpg&width=960',
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    message: [
      {
        fromUser: true,
        id: '13',
        text: 'Hello',
        date: dateDefault,
      },
      {
        fromUser: true,
        id: '12',
        text: 'Hello',
        date: dateDefault,
      },
    ],
    photoUrl:
      'https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Styling-American-Crew-Phillipe-RGMN_58cb1549-9653-4a1e-bbdc-4fee6c4bec4c.jpg?v=1648568598',
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    message: [
      {
        fromUser: false,
        id: '14',
        text: 'Hello',
        date: dateDefault,
      },
      {
        fromUser: true,
        id: '12',
        text: 'Hello',
        date: dateDefault,
      },
    ],
    photoUrl:
      'https://www.international.gc.ca/world-monde/assets/images/issues_development-enjeux_developpement/gender_equality-egalite_des_genres/jacqueline_oneill.jpg',
  },
];
