# Live version: https://live-space.herokuapp.com/

you can run:

### `devstart`

Runs the app in the development mode (local version).

This app was built on React and uses hooks for state management. (frontend) Uses placeholder data from pageData.js.

Initial Load :
All card data are loaded and "Most Popular" button will be highlighted. UseState is used to setting initial state.
Buttons are also loaded using data from pageData.

Filtered view: Data is filtered based on Header buttons click and resets the state which results to renders. Highlighted button would also change based on the button click.

Displays Larger Imgae: after a card is clicked the respective image will be displayed in a new component and can closed by clicking the big image itself. This was possible thanks to useState; holding a state object which is then for conditionally rendering the component.

Scroll: auto scroll will take place when a card is clicked and this scrollview to the big sized image.

Animation: css animation using transform and box-shadows.

### Dependencies:

-Create React (Boiler plate)
-React Bootstrap

![alt text](https://github.com/808vita/my-app--Lives-spaces/blob/master/src/screenshot.jpg?raw=true)
