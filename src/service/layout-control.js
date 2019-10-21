export const getlayouts = () => {
  const map = [
    {
      name: "一行两列",
      xtype: "twoColumns",
      caption: "一行两列",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAmUlEQVQ4T+2UzQ3CMAyF8yoWYRTGIDUVk9CUSVBwwxiMwiKoDyXHqFLTKhyQ8M1/n2zLNkwlQeR47/dNszsBSHqpkOQ0ve9d171Somq4GGOGUkAW14vYawKN46Mn6UTsqopUAwG4tj0O3wFtaW22omjMYSTP0QbgNuNzxa2phmcEiNhDDlo1oz9oeY9+fEbVjrbaG9lyY3nOB2110hPtMlxCAAAAAElFTkSuQmCC",
      icon: "&#xe610;",
      controlType: "grid",
      required: false,
      actived: false
      // children: [
      //   {
      //     xtype: 'div',
      //     children: []
      //   },
      //   {
      //     xtype: 'div',
      //     children: []
      //   }
      // ],
    },
    {
      name: "卡片分组",
      xtype: "cardGroup",
      caption: "卡片分组",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAArUlEQVQ4T+3SsQkCQRAF0P/NjQUTMy3ABgQzA3N3roJLLEGwCCuYue1AIzNNbGrkRPYUOdkTI3HD3T+PZfhEy1GNJ8BHbe8P9wNmhN5GVKvDDVGtShLrbiCPIqtSNe7vSDTApyRjDuTuMxJDkTB5Qkjvi4RlDmIWN4CHP9Js64d3Yha3qWyf9qTe1HcRwOckLjmNdceYBOvGpp+Y2cK9JzlAk/FzUYRdQroNv6avaYmi3xyUzGYAAAAASUVORK5CYII=",
      icon: "&#xe610;",
      controlType: "grid",
      required: false,
      actived: false
      // children: [],
    }
  ];
  return map;
};
