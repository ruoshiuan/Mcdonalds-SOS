## Mcdonald’s Self Order Service 麥當勞 自助點餐

1. [Statement 注意事項](https://github.com/ruoshiuan/Mcdonalds-SOS#statement)
2. [Summary 專案簡介](https://github.com/ruoshiuan/Mcdonalds-SOS#summary)
3. [Demo 實際頁面](https://github.com/ruoshiuan/Mcdonalds-SOS#demo)
4. [Diagram 專案架構圖](https://github.com/ruoshiuan/Mcdonalds-SOS#architecture-diagram)
5. [Technologies 專案技術](https://github.com/ruoshiuan/Mcdonalds-SOS#technologies)
6. [Feature 專案介紹](https://github.com/ruoshiuan/Mcdonalds-SOS#feature)

### Statement

⚠️ This project is an imitation of McDonald’s Japan mobile ordering application. It is only used for the practice of a single-page application in React, not for any profitable purpose.

### Summary

McDonald's Self Order Service (麥當勞 自助點餐) is a meal ordering website for Mcdonald's Taiwan in-store pickup. (Not a real service)<br>
Users could select Mcdonald's restaurants in Taiwan from the map or from the keyword filter based on the distance and location detected by browsers. <br>

After registering and logging in, members could check the menu, add multiple meals to the food ordering cart, then place an order.

## Demo

### Demo Link

https://potent-zodiac-316305.web.app/

### Test account

| -        | -               |
| -------- | --------------- |
| Account  | tester@test.com |
| Password | tester          |


## Architecture Diagram

<img src="https://user-images.githubusercontent.com/76982122/132345664-5620360c-0a8b-4ac6-8b13-1abe02ce0698.png" alt="001" width="500" />
<img src="https://user-images.githubusercontent.com/76982122/132345661-cb5242f5-55e3-4d74-be26-8a13609ffe47.png" alt="000" width="500" />

## Technologies

| Name                       | Descriptions                                                 |
| -------------------------- | :----------------------------------------------------------- |
| React Hooks                | Use React state and lifecycle features from function components |
| React Router               | Navigate single page applicaions                             |
| Google Maps JavaScript API | Render Google Maps, marker clusters                          |
| Local Storage API          | Store cart items                                             |
| Python                     | Scrape and arrange the official restaurant data              |
| Firebase Firestore         | Store restaurant, user, menu, order data                     |
| Firebase Hosting           | Host website                                                 |
| Responsive Web Design      | Create web pages that look good on all devices               |
| Figma                      | Create UI flow, and some materials in the website            |

#### devDependencies
    webpack
    babel
    style-loader
    css-loader
    url-loader
    file-loader
    iconify/react
    eslint
#### dependencies
    react-router-dom
    styled-components
    react-firebase/auth
    react-google-maps/api
    haversine-distance


## Feature

### :small_blue_diamond:Choose a pick-up location

Users could use map mode or keyword mode to search for restaurants on the homepage.<br>

In Map Mode, zoom into any of the cluster locations, the number on the cluster will decrease,

then users begin to see many location markers.<br>

Click each marker to show the restaurant info and the start order button.<br>

Also, users could click the red button in the upper right corner to directly move to the current position.<br>

(Could not select restaurants which beyond a certain distance of user's position)

<img src="https://user-images.githubusercontent.com/76982122/130183691-531b94f4-857a-4bb4-8927-8574479e3866.png" alt="01" width="650" />

In keyword filter mode, user could enter keywords to search restaurants.The restaurants info would be presented as cards.<br>

User could check more cards by pagination.

<img src="https://user-images.githubusercontent.com/76982122/130183708-6b75af8d-40cb-48fa-ac4a-fd457f13efab.png" alt="02" width="650" />

### :small_blue_diamond:Check the Menu, make an order

Log in/sign up to become a member after registration, users could check out the menu, add meals to the cart, and make an order.

<img src="https://user-images.githubusercontent.com/76982122/132345646-d767ae70-df1a-4410-9f6e-52651a4386f3.png" alt="03" width="500" />
<img src="https://user-images.githubusercontent.com/76982122/130183716-ed382aed-9e1c-472d-a0de-1685b104c54f.png" alt="04" width="650" />

<img src="https://user-images.githubusercontent.com/76982122/130183721-f0132889-c7ac-4401-bd87-a4bd2f6dc4dc.png" alt="05" width="650" />

### :small_blue_diamond:Check out the order records

Members could check the order records and details in the member page.

<img src="https://user-images.githubusercontent.com/76982122/130183724-d014d13b-3778-4267-aaa6-4762cc30fb0c.png" alt="06" width="650" />
