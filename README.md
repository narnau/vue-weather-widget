# benshai-app

## Project decisions

### Context
This is my first time using Vue.js, as I'm currently using React, and some years ago I used Angular 1.x and 2.0+. I didn't have much time to get in all the details of Vue.js, but I tried to understand the basics -once you've really learnt two frameworks, it's easy to learn another one-.

Regarding the SCSS part, I'm used to work with Tailwind CSS Framework, componing previously created classes to build components -and I really like the concept of that- but I tried my best using SCSS. I know that maybe I didn't used all the potential of SCSS.

### Components
I decided to create three components: 
- WeatherWidget
- BasicWeatherTile
- WeatherIcon

I was thinking about maybe create another component for the current weather information block, but finally I decided to not do over engineering in this case.

### Libs

I really like to isolate all the logic in separate libs. I guess I have kind of trauma because I had a really bad time migrating a very big application with a lot of business logic from Angular 1.X to Angular 2.X with all the logic inside the components.
I prefer to mantain all the possible logic isolated. I think it's easier to do clean code, to reuse, to test, and to follow the SOLID principles.

### Testing

As you'll see, I didn't test all the components and all the logic. I did some very basic tests to show that I know how to do it. If I had more time, I would have tested the computed values of the WeatherWidget, but for do that, I've to mock the dependencies and this requires more time than I had.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
