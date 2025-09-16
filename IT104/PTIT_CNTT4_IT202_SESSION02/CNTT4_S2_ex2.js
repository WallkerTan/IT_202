let greetingWithWeather = (name = "anh tan dep zai", weather) => {
    if (weather === "sunny") {
        console.log(`xin chao ${name}, hom nay troi nang tuyet voi`);
    } else if (weather === "rainy") {
        console.log(`xin caho ${name} , hom nay troi mua hay mang theo o`);
    } else {
        console.log(`xin caho ${name} , hom nay thoi tiet khong xac dinh`);
    }
};
greetingWithWeather();
